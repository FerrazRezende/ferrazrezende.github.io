<script>
import barraDeBusca from '../barraDeBusca.vue';
import episodiosModal from './episodiosModal.vue';

import rickAndMorty from '@/services/rickAndMorty';

export default {
    name: 'personagensTela',
    data() {
        return {
            results: [],
            qtdPaginas: 0,
            pagina: 1,
            resultadoDasBuscas: "",
            persoId: Number,
            nomeDoPersonagem: "",
            ativarModalMundo: false
        }
    },
    components: {
        barraDeBusca,
        episodiosModal,

    },
    methods: {
        avancarPagina(){
            if(this.pagina >= this.qtdPaginas) {
                this.pagina = this.qtdPaginas-1
                document.querySelector("#erro").style.display = "block";
                document.querySelector("#erro").innerHTML = "Você está na última página";
                
                setTimeout(() => {
                    document.querySelector("#erro").style.display = "none";
                }, 3000);
            }

            this.pagina++;
        },

        voltarPagina() {
            if (this.pagina <= 1) {
                this.pagina = 2
                document.querySelector("#erro").style.display = "block";
                document.querySelector("#erro").innerHTML = "Não é possível voltar";
                setTimeout(() => {
                    document.querySelector("#erro").style.display = "none";
                }, 3000);
            }
            this.pagina--;
        },

        async buscarResultados() {
            await rickAndMorty.get(`/character/?page=${this.pagina}`)
            .then(resp => {
                this.results = resp.data.results
                this.qtdPaginas = resp.data.info.pages
        })
        },

        lidarResultadoBusca(resultado) {
            this.resultadoDasBuscas = resultado
        },

        abrirModalMundo: function(persoId, nomeDoPersonagem) {
            this.nomeDoPersonagem = nomeDoPersonagem
            this.persoId = persoId
            this.ativarModalMundo = !this.ativarModalMundo
        },
        fecharModalMundo() {
            this.ativarModalMundo = false
        }
    },
    watch: {
        pagina() {
            this.buscarResultados();
        }
    },
    computed: {
        itensFiltrados() {
            let valores = [];
            
            valores = this.results.filter( item => {
                return (
                    item.name.toLowerCase().indexOf(this.resultadoDasBuscas.toLowerCase()) > -1
                    
                )

            })

            return valores
        }
    },
    mounted() {
        this.buscarResultados();
    },
    
}
</script>

<template>
    <div>
        <header>
            <barraDeBusca @eventoBusca="lidarResultadoBusca" :pagina="pagina" :qtdPaginas="qtdPaginas" :voltarPagina="voltarPagina" :avancarPagina="avancarPagina"/>
            <p id="erro" class="animate__animated animate__shakeX"></p>
        </header>
    </div>
    <div v-if="ativarModalMundo" class="episodiosCont animate__animated animate__zoomIn" >
        <episodiosModal :persoId="persoId" :nomeDoPersonagem="nomeDoPersonagem" :fecharModalMundo="fecharModalMundo"/>
    </div>
    <div id="personagemContainer" v-for="item in itensFiltrados" :key="item.id">
        <img :src="item.image" class="animate__animated animate__jackInTheBox">
        <div id="primeiraColuna">
            <p class="animate__animated animate__zoomIn" id="nome">Nome: <a>{{ item.name }}</a></p>
            <p class="animate__animated animate__zoomIn status">Status: <a>{{ item.status }}</a></p>
            <p class="animate__animated animate__zoomIn animate__delay-1s">Localidade: <a id="localidade">{{ item.location.name }}</a></p>
        </div>
        <div id="segundaColuna">
            <p class="animate__animated animate__zoomIn genero">Genero: <a>{{ item.gender }}</a></p>
            <p class="animate__animated animate__zoomIn" id="origem">Origem: <a>{{ item.origin.name }}</a></p>
            <p class="animate__animated animate__zoomIn animate__delay-1s" id="episodios" @click="abrirModalMundo(item.id, item.name)">{{ item.episode.length }}</p>
        </div>
    </div>


</template>

<style scoped>
@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';

a{
    font-size: 0.5rem;
}

img {
    border: solid 3px var(--bege-bg);
    border-radius: 5px;
}

p {
    color: var(--branco);
    font-size: 0.5rem;
    margin: 5%10%;
}

#episodios {
    border: solid 1px var(--bege-bg);
    border-radius: 2px;
    cursor: pointer;
    height: 5px 5px;
    text-align: center;
    width: 20px;
}

.episodiosCont {
    border-radius: 5px;
    height: 320px;
    overflow: auto;
    position: absolute;
    top: 50;
    width: 210px;
    z-index: 100;
}

#nome {
    animation-delay: 0.25s;
}

#personagemContainer {
    display: flex;
    height: 90px;
    margin-bottom: 20%;
    padding: 5% 10%;
    width: 90px;
}

#primeiraColuna {
    display: flex;
    flex-direction: column;
    margin: 5% 15%;
}

#segundaColuna {
    display: flex;
    flex-direction: column;
    margin: 0 1%;
}



    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        display: none;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--branco);
        border-radius: 2px;

    }

@media (min-width: 950px) {

    a {
        font-size: 1rem;
        white-space: nowrap;
    }

    p {
        font-size: 1.5rem;
    }

    #episodios {
        width: 45px;
    }

    #personagemContainer {
        height: 212px;
        width: 256px;
    }

    #primeiraColuna {
        margin-right: 25%;
        margin-top: -12px;
    }

    .episodiosCont {
        height: 720px;
        width: 510px;
    }
}


@media (min-width: 1490px) {

    a{
        font-size: 1rem;
        white-space: nowrap;
    }

    img {
        border: solid 7px var(--bege-bg);
        border-radius: 5px;
    }

    p {
        color: var(--branco);
        font-size: 1.5rem;
        margin: 5%10%;
        white-space: nowrap;
    }

    #episodios {
        border: solid 2px var(--bege-bg);
        border-radius: 5px;
        width: 168px;
    }

    #erro {
        color: red;
        display: none;
        font-size: 1rem;
    }

    #localidade {
        white-space: pre-wrap;
    }

    #nome {
        animation-delay: 0.25s;
        white-space: pre-wrap;
    }

    #origem {
        animation-delay: 0.5s;
        white-space: pre-wrap;
    }

    #personagemContainer {
        height: 290px;
        padding: 5% 10%;
        width: 325px;
    }

    #primeiraColuna {
        display: flex;
        flex-direction: column;
        margin: -15px 15%;
    }

    #segundaColuna {
        display: flex;
        flex-direction: column;
        margin: -15px 15%;
    }

    .episodiosCont {
        height: 560px;
        width: 440px;
    }

    .genero {
        animation-delay: 0.25s;
    }

    .status {
        animation-delay: 0.5s;
    }
}
</style>
@/services/rickAndMorty