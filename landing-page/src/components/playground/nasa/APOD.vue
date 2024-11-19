<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue"
import NasaService, {imgData} from "@/service/NasaService"
import {ElNotification} from "element-plus";
import DeepLService from "@/service/DeepLService"

export default defineComponent({
  name: "APODNasa",


  setup () {
    const loading = ref(false)
    const imgData = ref<imgData | null>(null)
    const isDesc = ref(false)
    const imgUrl = computed(() => imgData.value?.url || "")
    const translatedExplanation = ref<string | null>(null)
    const translating = ref(false)

    const closeDesc = () => {
      isDesc.value = false
    }

    const showDesc = () => {
      isDesc.value = true
    }

    const formatDate = (date: string) => {
      const dateObj = new Date(date)
      return dateObj.toLocaleDateString("pt-BR")
    }

    const getImgData = async () => {
      loading.value = true

      try {
        imgData.value = await NasaService.getPictureData()

      } catch (error) {
        ElNotification({
          title: 'Warning',
          message: 'Imagem não carregada',
          type: 'warning',
        })

      } finally {

        setTimeout(() => {
          loading.value = false

        }, 1500)
      }
    }

    const translateText = async () => {
      if (imgData.value?.explanation && !translatedExplanation.value) {
        translating.value = true

        try {
          translatedExplanation.value = await DeepLService.translateText(
              imgData.value.explanation,
              "PT-BR"
          )
        } catch(error) {
          ElNotification({
            title: "Erro",
            message: `Erro ao traduzir o texto ${error}`,
            type: "error",
          })
        } finally {
          translating.value = false
        }
      }
    }

    onMounted(() => {
      getImgData()
    })


    return {
      loading,
      isDesc,
      imgUrl,
      imgData,
      translatedExplanation,
      translating,

      getImgData,
      closeDesc,
      formatDate,
      showDesc,
      translateText
    }
  }
})

</script>

<template>
  <main>
    <el-empty v-if="!imgUrl && !loading" description="Imagem não carregada" />


    <el-skeleton v-if="loading" style="width: 240px" animated>
      <template #template>
        <el-skeleton-item variant="text" style="margin: 16px; width: 40%!important;" />
        <el-skeleton-item variant="image" style="width: 440px; height: 400px; border-radius: 16px" />
      </template>
    </el-skeleton>

    <div v-if="imgUrl && !loading">
      <h1>{{ imgData.title }}</h1>
      <div class="image-container" :style="{ backgroundImage: `url(${imgUrl})` }">
        <div class="info-container" v-if="!isDesc">
          <div class="info-button">
            <a @click="showDesc"><v-icon scale="1.5" name="md-info-outlined" /></a>
          </div>
        </div>
        <div class="descricao-container" v-if="isDesc">
          <div class="overlay-header">
            <p>{{ formatDate(imgData.date) }}</p>
            <a @click="closeDesc">x</a>
          </div>
          <div class="explanation-container">
            <el-button
                :type="primary"
                :loading="translating"
                @click="translateText"
                link
            >
              Traduzir texto
            </el-button>
            <p>{{ translatedExplanation || imgData.explanation }}</p>
          </div>

        </div>
      </div>
    </div>

  </main>
</template>

<style lang="sass" scoped>
p, a, svg
  color: white!important
  font-family: var(--text-content), sans-serif!important

h1
  font-family: var(--text-title), sans-serif!important

.image-container
  outline: 2px solid var(--text-color)
  border-radius: 16px
  margin: 16px auto
  width: 440px
  height: 440px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.descricao-container
  background-color: rgba(0, 0, 0, 0.8)
  padding: 8px
  text-align: start
  display: flex
  align-items: end
  flex-direction: column
  justify-content: space-between
  height: 100%
  border-radius: 16px

.info-container
  display: flex
  justify-content: flex-end
  padding: 4px

.info-button
  background-color: black
  border-radius: 50%

.el-skeleton
  width: 100%!important
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  margin: 16px 0
  --el-skeleton-color: var(--background-color)
  --el-skeleton-to-color: var(--primary-color)

.overlay-header
  padding: 0 8px
  width: 100%
  display: flex
  justify-content: space-between

.overlay-header > p
  font-size: 12px

.explanation-container
  display: flex
  flex-direction: column
  align-items: flex-end

.el-button.is-link
  color: #FAFAFA
  text-decoration: underline

.el-skeleton
  --el-skeleton-color: var(--background-color)
  --el-skeleton-to-color: var(--primary-color)

@media (max-width: 768px)
  h1
    font-size: 1rem

  .image-container
    width: 80%
    height: 256px

  .explanation-container > p
    font-size: 0.5rem

  .el-button.is-link
    font-size: 1rem
</style>