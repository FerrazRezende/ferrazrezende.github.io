<script>

import nasa from '@/services/nasa'

    export default {
        name: 'apiNasa',
        data() {
            return {            
                imagemExibida: false,
                aberto: false,
                linkImagem: '',
                tituloImagem: '',
                abrirOuFechar: 'Abrir',

            }
        },
        methods: {
            exibirImagem: function () {
                this.imagemExibida = !this.imagemExibida
                
                this.aberto = !this.aberto

                if (this.aberto === true) {
                    this.abrirOuFechar = 'Fechar'
                }

                if (this.aberto === false) {
                    this.abrirOuFechar = 'Abrir'
                }
                
            }
        },
        props: {
            exibirNasa: Boolean
        },
        mounted() {
            nasa.get()
            .then(resp => {
                this.linkImagem = resp.data.url
                this.tituloImagem = resp.data.title
                console.log(this.linkImagem)
            })
        }
    }
</script>

<template>
    <div class="aninated__animated animate__bounceIn" v-if="exibirNasa">
        <a @click="exibirImagem()">{{ abrirOuFechar }} a imagem do dia</a>
        <div v-if="imagemExibida" id="api-cont" class="animate__animated animate__jackInTheBox">
            <h1>{{ tituloImagem }}</h1>
            <div id="foto-cont">
                <img :src="linkImagem" >
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';

a {
    align-self: center;
    background-color: var(--verde-claro);
    border: solid 2px var(--verde-escuro);
    border-radius: 5px;
    color: var(--branco); 
    cursor: pointer;
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 30%;
    padding: 2%;
    text-align: center;
    width: 110%;
    white-space: nowrap;
}


div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    }


h1 {
    color: var(--branco);
    font-size: 0.6rem;
    margin-bottom: 10%;
    white-space: nowrap;
}


img{
    height: 100%;
    width: 100%;
}

#api-cont {
    display: flex;
    flex-direction: column;
    height: 130px;  
    margin-top: 5%;
    width: 110px;
}

#foto-cont {
    border: solid 5px var(--verde-claro);
    border-radius: 5px;
    height: 420px;
    margin-top: 5%;
    width: 160px;
}


@media (min-width: 950px) {

    a {
        font-size: 1.5rem;
        margin-bottom: 50%;
        margin-top: 10%;
        width: 420px;
    }

    h1 {
        font-size: 1.5rem;
    }

    #foto-cont {
        height: 880px;
        width: 415px;
    }
}

@media (min-width: 1490px) {

    a {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        font-size: 2rem;
        margin: -10% 0 0 0;
        text-align: center;
        width: 556px;
    }

    a:hover {
        cursor: pointer;
    }

    h1 {
        color: var(--branco);
    }

    img{
        height: 100%;
        width: 100%;       
    }

    #api-cont {
        height: 640px;  
        margin-top: 10%;
        width: 750px;
    }

    #foto-cont {
        border: solid 10px var(--verde-claro);
        border-radius: 15px;
        height: 512px;
        margin-top: 0%;
        width: 600px;
    }
}


</style>