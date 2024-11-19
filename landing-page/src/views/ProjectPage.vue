<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {getRepoCommits, getUserReposwithLogo, Repo} from "@/service/GithubService";
import CommitsTimeline from "@/components/projetos/CommitsTimeline.vue";
import InfoProject from "@/components/projetos/InfoProject.vue";
import DocumentacaoBotao from "@/components/projetos/DocumentacaoBotao.vue";

export default defineComponent({
  name: "ProjectPage",
  components: {
    DocumentacaoBotao,
    InfoProject,
    CommitsTimeline
  },

  setup () {
    const repos = ref<Repo[]>([])
    const commits = ref<Record<string, { message: string; date: string, html_url: string }[]>>({})
    const loading = ref(true)


    const fetchRepos = async () => {
      try {
        setTimeout(async () => {
          repos.value = await getUserReposwithLogo();

          await Promise.all(
              repos.value.map((repo) => fetchCommits(repo.name))
          )
          loading.value = false
        }, 1500)
      } catch (error) {
        console.log("Erro ao buscar repositórios:", error);
      }
    };

    const fetchCommits = async (repoName: string) => {
      try {
        commits.value[repoName] = await getRepoCommits(repoName)
      } catch (error) {
        console.error(`Erro ao buscar commits para ${repoName}:`, error)
      }
    }

    onMounted(fetchRepos)

    return {
      repos,
      commits,
      loading,
      fetchCommits,
    }
  }

})
</script>

<template>
  <main>
    <h1>Projetos</h1>
    <article>

      <div v-if="loading" class="project-skeleton">

        <el-skeleton animated>
          <template #template>
            <div class="skeleton-container">
              <el-skeleton-item class="skeleton-img" variant="image" style="width: 150px; height: 150px" />
              <el-skeleton :rows="3" />
            </div>
          </template>
        </el-skeleton>
      </div>

      <div v-else class="project-container" v-for="repo in repos" :key="repo.id">

        <section class="github-container" :style="{ backgroundImage: `url(${repo.logo_url})` }">
          <el-tooltip
              content="Abrir repositório do projeto"
              placement="top"
          >
            <a :href="repo.html_url" class="github-overlay" target="_blank">
              <v-icon name="co-github" scale="2" />
            </a>
          </el-tooltip>
        </section>

        <div class="linha-vertical"></div>

        <div class="info-container">
          <InfoProject :tituloProjeto="repo.name" :descricaoProjeto="repo.description" />
        </div>

        <div class="linha-vertical"></div>

        <div class="commits-container">
          <el-tooltip
            content="Commits"
            placement="top"
          >
            <CommitsTimeline
                :commits="commits[repo.name]?.slice(0, 3) || []"
            />
          </el-tooltip>
        </div>

        <div class="linha-vertical"></div>

        <div class="documentacao-container">
          <DocumentacaoBotao :docUrl="`https://github.com/FerrazRezende/${repo.name}/blob/main/README.md`" />
        </div>

      </div>
    </article>
  </main>
</template>

<style lang="sass" scoped>
h1
  font-family: var(--text-title), sans-serif
  font-size: 32px
  padding: 64px 0
  text-align: center

article
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.github-overlay
  width: 100%
  height: 100%
  border-radius: 8px

.github-overlay:hover
  display: flex
  align-items: center
  justify-content: center
  background-color: black
  opacity: 0.8

.github-overlay > svg
  color: transparent
  width: 100%
  height: 100%

.github-overlay > svg:hover
  color: var(--text-color)


.project-container
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  padding: 16px
  width: 85%
  max-width: 1300px
  border: solid 3px var(--primary-color)
  border-radius: 8px
  gap: 25px
  margin: 16px 0

.github-container
  background-repeat: no-repeat
  background-size: cover
  height: 150px
  width: 150px
  border-radius: 8px
  outline: 2px solid var(--text-color)
  cursor: pointer

.info-container
  flex: 2 1 300px
  display: flex
  flex-direction: column
  justify-content: center
  min-width: 300px
  max-width: 100%

.commits-container
  flex: 1 1 200px
  display: flex
  flex-direction: column
  justify-content: center
  min-width: 200px
  max-width: 100%

.documentacao-container
  flex: 1 1 150px
  display: flex
  align-items: center
  justify-content: center
  min-width: 150px
  max-width: 100%

.linha-vertical
  width: 1px
  height: 48px
  background-color: var(--text-color)

.el-skeleton
  padding: 16px
  --el-skeleton-color: var(--background-color)
  --el-skeleton-to-color: var(--primary-color)

.skeleton-img
  border-radius: 8px
  margin-right: 16px

.project-skeleton
  flex-wrap: wrap
  padding: 16px
  width: 85%
  max-width: 1300px
  border: solid 3px var(--primary-color)
  border-radius: 8px
  gap: 25px
  margin: 16px 0

.skeleton-container
  display: flex
  justify-content: space-between
  align-items: center


</style>