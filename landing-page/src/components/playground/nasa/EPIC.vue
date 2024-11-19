<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import nasaService, { EpicImageData } from "@/service/NasaService";
import DeepLService from "@/service/DeepLService";
import {ElNotification} from "element-plus";

export default defineComponent({
  name: 'EPICNasa',

  setup() {
    const dateSelected = ref("")
    const loading = ref(false)
    const epicImageData = ref<EpicImageData | null>(null)
    const epicImageUrl = ref<string | null>(null)
    const translatedCaption = ref<string | null>(null)
    const translating = ref(false)

    const formatDateForUrl = (date: string) => {
      return date.split('-').join('/')
    }

    const fetchEpicImage = async () => {
      loading.value = true

      if (!dateSelected.value) return;

      try {
        const data = await nasaService.getEpicData(dateSelected.value);
        epicImageData.value = data.length > 0 ? data[0] : null;

        if (epicImageData.value) {
          const formattedDate = formatDateForUrl(dateSelected.value);
          epicImageUrl.value = `https://epic.gsfc.nasa.gov/archive/enhanced/${formattedDate}/png/${epicImageData.value.image}.png`;
          console.log(epicImageUrl.value);
        }
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
        console.log(dateSelected.value);
        epicImageData.value = null;
        epicImageUrl.value = null;
      } finally {
        loading.value = false
        translating.value = false
      }
    };

    const translateText = async () => {
      if (epicImageData.value?.caption && !translatedCaption.value) {
        translating.value = true

        try {
          translatedCaption.value = await DeepLService.translateText(
              epicImageData.value.caption,
              "PT-BR"
          )
        } catch(error) {
          ElNotification({
            title: "Erro",
            message: `Erro ao traduzir o texto ${error}`,
            type: "error",
          })
        }
      }
    }

    const disabledFutureText = (date: Date) => {
      const today = new Date()

      const twoDaysAgo = new Date()

      twoDaysAgo.setDate(today.getDate() - 4)

      return date > twoDaysAgo
    }



    watch(dateSelected, fetchEpicImage);

    return {
      dateSelected,
      epicImageData,
      epicImageUrl,
      translatedCaption,
      loading,

      translateText,
      disabledFutureText

    };
  }
});
</script>

<template>
  <main>
    <div class="block">
      <h1>Escolha uma data</h1>
      <div class="date-epic">

        <el-date-picker
            class="date-epic"
            v-model="dateSelected"
            type="date"
            format="DD/MM/YYYY"
            value-format="YYYY-MM-DD"
            :disabled-date="disabledFutureText"
        />

      </div>

      <div class="skeleton-container" v-if="loading">
        <el-skeleton style="width: 413px" animated>
          <template #template>
            <el-skeleton-item variant="text" style="margin: 16px" />
            <el-skeleton-item variant="image" style="width: 400px; height: 400px; border-radius: 16px" />
          </template>
        </el-skeleton>
      </div>


      <div v-if="epicImageData && !loading">
        <p class="epic-caption">

          <el-tooltip
            content="A API EPIC fornece informações sobre as imagens diárias recolhidas pelo instrumento EPIC (Earth Polychromatic Imaging Camera) do DSCOVR. <br> Exclusivamente posicionada no ponto de Lagrange Terra-Sol, a EPIC fornece imagens do disco completo da Terra e capta perspectivas únicas de certos <br> eventos astronómicos, como os trânsitos lunares, utilizando um detetor CCD (Charge Coupled Device) de 2048x2048 pixels acoplado a um <br> telescópio Cassegrain de 30 cm de abertura."
            raw-content
            placement="bottom"
          >
            {{ translatedCaption || epicImageData.caption }}
          </el-tooltip>

          <el-tooltip
              content="Traduzir"
              placement="top"
          >
            <a @click="translateText"><v-icon name="bi-translate" scale="1" /></a>
          </el-tooltip>
        </p>

        <div class="image-container" :style="{ backgroundImage: `url(${epicImageUrl})` }">

        </div>

      </div>


    </div>
  </main>
</template>

<style lang="sass" scoped>

h1
  font-size: 2rem

.date-epic
  margin: 8px 0

.epic-caption
  cursor: pointer

.image-container
  margin: 32px auto
  width: 400px
  height: 400px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover
  border-radius: 16px
  outline: 5px solid var(--text-color)

.skeleton-container
  margin: 8px 0
  display: flex
  align-items: center
  justify-content: center

.el-skeleton
  --el-skeleton-color: var(--background-color)
  --el-skeleton-to-color: var(--primary-color)


a
  margin: 0 8px



</style>