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
                mostrarTexto: false,
                descricaoImagem: "",
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
                
            },
            abrirTexto: function () {
                this.mostrarTexto = !this.mostrarTexto
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
                this.descricaoImagem = resp.data.explanation
                console.log(resp.data)
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
                <p v-if="mostrarTexto" @click="abrirTexto" id="fechar-texto">x</p>
                <div @click="abrirTexto" id="info-foto"><ion-icon id="icon-i" name="help-circle-outline"></ion-icon>
                </div>

                <p id="texto-descritivo" v-if="mostrarTexto">{{ descricaoImagem }}</p>
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
    margin-top: -10%;
    margin-bottom: 20%;
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
    height: 128px;
    width: 128px;
}

#api-cont {
    display: flex;
    flex-direction: column;
    height: 100%;  
    margin-top: 0;
    width: 110px;
}

#texto-descritivo {
    position: absolute;
    background-color: black;
    color: var(--branco);
    font-size: .7rem;
    overflow: auto;
    height: 80%;
    width: 120%;
    border-radius: 8px;
    padding: 4px;
    opacity: 0.8;
}

#fechar-texto {
    font-size: 1rem;
    color: var(--branco);
    position: absolute;
    z-index: 100;
    top: 25px;
    right: 130px;
    cursor: pointer;
}


#foto-cont {
    border: solid 5px var(--verde-claro);
    border-radius: 5px;
    height: auto;
    margin-top: 0%;
    width: auto;
}

#info-foto {
    position: absolute;
    right: 0%;
    cursor: pointer;

}


@media (min-width: 950px) {

    #fechar-texto {
        font-size: 1rem;
    }

    #icon-i {
        width: 32px;
        height: 32px;
    }

    #texto-descritivo {
        width: 328px;
        font-size: 1rem;
    }

    #fechar-texto {
        top: 80px;
        right: 240px;
        position: absolute;
    }

    img {
        width:332px;
        height: 299px;
    }

    a {
        font-size: 1.5rem;
        width: 420px;
        margin-bottom: 7%;
    }

    h1 {
        font-size: 1.5rem;
    }

    #info-foto {
        left: 202px;
 
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
        height: 382px;
        width: 500px;       
    }

    #api-cont {
        height: 100%;  
        margin-top: 10%;
        width: 100%;
    }

    #foto-cont {
        border: solid 10px var(--verde-claro);
        border-radius: 15px;
        height: 100%;
        margin-top: 0%;
        width: 93%;
    }

    #info-foto {
        left: 350px;
    }

    #icon-i {
        width: 32px;
        height: 32px;
    }

    #texto-descritivo {
        width: 500px;
        font-size: 1.5rem;
    }

    #fechar-texto {
        right: 550px;
        font-size: 1.5rem;
    }
}


</style>
