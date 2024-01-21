<script>
import headerPage from '@/components/headerPage.vue';
import infoCards from '@/components/infoCards.vue';
import SobreMim from '@/views/SobreMim.vue';
import MeusProjetos from '@/views/MeusProjetos.vue';
import ConsumindoApis from '@/views/ConsumindoApis.vue';
import FooterFinal from '@/views/FooterFinal.vue';

export default {

  name: 'App',
  components: {
    headerPage,
    SobreMim,
    infoCards,
    MeusProjetos,
    ConsumindoApis,
    FooterFinal
  },
  data () {
    return {
      //exibirBotoes: false,
      //botoesVisiveis: true,
      //animarSaida: "",
      fixarHeader: false,
      headerAberto: false,
      ultimoScroll: 0,
    }
  },
  methods: {
    //mostrarBotoes: function () {
      //this.exibirBotoes = !this.exibirBotoes
    //},
//    esconderBotoes: function () {
//      var scroll = window.scrollY;
      //if (scroll >= 500) {
        //this.animarSaida = "animate__animated animate__backOutDown"
        //setTimeout(() => {
          //this.botoesVisiveis = false
        //}, 1000);
      //}
      //if (scroll <= 499){
        //this.animarSaida = "animate__animated animate__backInUp"
        //setTimeout(() => {
          //this.botoesVisiveis = true
        //}, 500);
      //}
    //},
    headerFixar: function () {
      var scrollAtual = window.scrollY
      if (scrollAtual >= 200) {
        this.fixarHeader = true
      }
      if (scrollAtual < this.ultimoScroll) {
        this.fixarHeader = false
      }
      this.ultimoScroll = scrollAtual
    },
    pegarEstadoHeader: function () {
      this.headerAberto = !this.headerAberto
    }
  },
  watch: {
    headerAberto(header) {
      if (header) {
        document.body.classList.add('bloquear-overflow');
      } else {
        document.body.classList.remove('bloquear-overflow');
      }
    }
  },
  mounted () {
//window.addEventListener('scroll', this.esconderBotoes);
    window.addEventListener('scroll', this.headerFixar);

  }
}
</script>

<template>

  <div>
<!--
    <a v-if="botoesVisiveis" :class="animarSaida" id="menu-button" @click="mostrarBotoes">
    </a>
    <div v-if="exibirBotoes">
      <a id="github-button" href="https://github.com/FerrazRezende" target="_blank" class="animate__animated animate__zoomInUp">
      </a>
      <a id="soundcloud-button" href="https://linktr.ee/cognizantrance" class="animate__animated animate__zoomInUp" >
      </a>
     <a id="curriculo-button" href="https://drive.google.com/file/d/1FusTMfaIOmmF1hozXTPBh3yNz94NslNy/view?usp=sharing" class="animate__animated animate__zoomInUp" target="_blank">
      </a> 
  </div>
-->
    <headerPage @headerAtivado="pegarEstadoHeader" :class="{'fixar-header': fixarHeader}" />
    <SobreMim />
    <infoCards class="bg-1"/>
    <MeusProjetos class="bg-reverse" />
    <ConsumindoApis />
    <FooterFinal />

  </div>
</template>



<style>
@import "@/style/global.css";
@import 'animate.css';

.bg-1 {
  background-image: url(../public/img/bg-dktp.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
}

.bg-reverse {
  background-image: url(../public/img/image.png);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;

}

#curriculo-button {
  animation-delay: 1s;
  background-image: url(../public/img/docpng.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 50%;
  bottom: 160px;
  cursor: pointer;
  height: 45px;
  margin: 3% 3.5%;
  position: fixed;
  width: 45px;
  z-index: 10;
}

.fixar-header {
  top: 0;
  z-index: 150;
  position: fixed;
  animation: bounceInDown 1s;
}


#github-button {
  background-image: url(../public/img/github.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border-radius: 50%;
  bottom: 70px;
  cursor: pointer;
  height: 45px;
  margin: 3% 3.5%;
  position: fixed;
  width: 45px;
  z-index: 10;
}

#menu-button {
  background-image: url(../public/img/botao.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 50%;
  bottom: 0;
  cursor: pointer;
  height: 60px;
  margin: 5% 0 5% 2%; 
  position: fixed;
  width: 60px;
  z-index: 10;
}


#soundcloud-button {
  animation-delay: 0.5s;
  background-image: url(../public/img/soundcloud.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border-radius: 50%;
  bottom: 115px;
  cursor: pointer;
  height: 45px;
  margin: 3% 3.5%;
  position: fixed;
  width: 45px;
  z-index: 10;
}

.bloquear-overflow {
  overflow: hidden;
}

@media (min-width: 950px) {

  .bg-1 {
    border: 1px solid transparent;
    background-position: 100% 40%;
    
  }

  #curriculo-button {
    bottom: 190px;
    left: -11px;
  }

  #github-button {
    bottom: 90px;
    left: -11px;
  }

  #soundcloud-button {
    bottom: 140px;
    left: -11px;
  }
}

@media (min-width: 1490px) {

  #curriculo-button {
    bottom: 220px;
    left: -30px;
  }

  #github-button {
    bottom: 120px;
    left: -30px;
  }

  #soundcloud-button {
    bottom: 170px;
    left: -30px;
  }
}

</style>
