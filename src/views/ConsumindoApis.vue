<script>
//import musicasAutorais from '@/components/musicasAutorais.vue';
import apiNasa from '@/components/apiNasa.vue';
import indexPageRn from '@/components/rickandmorty/indexPageRn.vue';

export default {
    name: 'consumindoApis',
    components: {
        apiNasa,
        indexPageRn,
//        musicasAutorais,
    },
    data () {
        return {
            exibirNasa: true,
            exibirRN: false,
//            exibirMusica: false
        }
    },
    methods: {

        mostrarNasa: function () {

            if (this.exibirRN === true) {
                this.exibirRN = false
            }
//            if (this.exibirMusica === true) {
//                this.exibirMusica = false
//            }

            this.exibirNasa = true
        },

        mostrarRN: function () {

            if (this.exibirNasa === true) {
                this.exibirNasa = false
            }

//            if (this.exibirMusica === true) {
//                this.exibirMusica = false
//            }

            this.exibirRN = true
        },

//        mostrarMusicas: function () {

//            if (this.exibirNasa === true) {
//                this.exibirNasa = false
//            } 

//            if (this.exibirRN === true) {
//                this.exibirRN = false
//            }
//            this.exibirMusica = true
//        }
    },
}
</script>

<template>
    <h1 id="api">Consumindo APIs</h1>
    <div>
        <div id="display">
            <div class="buttons">
                <a @click="mostrarNasa()">API da NASA</a>
                <a id="rm" @click="mostrarRN()">Rick and Morty</a>
<!--               <p id="musicas" @click="mostrarMusicas()"></p> -->
            </div>
            <div id="sidebar"></div>
            <div id="panel">
                <div v-if="exibirNasa" id="nasa">
                    <apiNasa :exibirNasa="exibirNasa" />
                </div>
                <div v-if="exibirRN" id="rickandmorty">
                    <indexPageRn />
                </div>
                <!-- <div v-if="exibirMusica" id="musicas-autorais">
                    <musicasAutorais />
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>

@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';

a:hover {
    cursor: pointer;
}

div {
    align-items: center;
    display: flex;
    justify-content: center;

} 

h1 {
    color: var(--branco);
    font-size: 1.5rem;
    margin: 5% 0 0 0 ;
    text-align: center;
}

#display {
    background-color: var(--verde-escuro);
    border-radius: 5px;
    height: 342px;
    margin: 2% 0;
    width: 430px;
}

#musicas {
    background-color: var(--verde-escuro);
    background-image: url(../../public/img/icons/music.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    border: solid 3.5px var(--bege-bg);
    border-radius: 100px;
    cursor: pointer;
    height: 50px;
    justify-self: flex-end;
    margin-top: 120%;
    width: 50px;
}

#musicas-autorais {
    height: 100%;
    width: 100%;
    overflow: auto;
}

#nasa {
    display: flex;
    align-items: flex-start;
    height: 100%;
    margin-top: 15%;
    width: 100%;
}

#panel {
    align-items: flex-start;
    background-color: #3b5005;
    border: solid 5px #2e3f05;
    border-radius: 5px;
    height: 80%;
    justify-content: center;
    margin-left: 5%;
    margin-right: -15%;
    width: 50%;
}

#rickandmorty {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
}

#rm {
    font-size: 1rem;
}

#sidebar {
    border: solid 1px #3b5005;
    height: 95%;
    margin-left: 5%;
    opacity: 0.8;
}

.buttons {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-left: -15%;
    margin-top: -50%;

}

.buttons a {
    background-color: var(--bege-bg);
    border: solid 2px #EAD05E;
    border-radius: 5px;
    color: var(--branco);
    font-size: 10px;
    font-weight: bold;
    height: 18px;
    margin-top: 30%;
    margin-left: -10%;
    text-align: center;
    width: 84px;
}

.buttons a:hover {
    animation: jello 1s;
}



@media (min-width: 950px) {

    #display {
        border-radius: 15px;
        height: 605px;
        width: 822px;
    }

    #panel {
        border-radius: 15px;
        height: 512px;
        margin-left: 14%;
        width: 520px;
    }


    #sidebar {
        margin-left: 1%;
        margin-right: -5%;

    }

    #musicas {
        height: 80px;
        margin-left: 5%;
        width: 80px;
    }

    #rm {
        font-size: 0.8rem;
        margin-bottom: 150%;
        text-align: center;
    }

    .buttons {
        margin-top: -29%;
    }

    .buttons a {
        font-size: 0.8rem;
        height: 25px;
        margin-top: 30%;
        margin-left: -10%;
        text-align: center;
        width: 138px;
    }


}

@media (min-width: 1490px) {

    h1 {
        font-size: 3rem;
    }
    
    #display {
        border-radius: 25px;
        height: 840px;
        width: 1100px;
    }


    #panel {
        border-radius: 25px;
        height: 745px;
        margin: 0%;
        width: 656px;
    }

    #sidebar {
        margin: 0% 3%;
    }

    .buttons{ 
        margin-left: 2%;
        margin-right: 0%;
    }

    .buttons a {
        border-radius: 16px;
        font-size: 1.5rem;
        height: 52px;
        width: 225px;
    }

    #musicas {
        border: solid 10px var(--bege-bg);
        height: 140px;
        width: 140px;
        margin-top: 0%;
    }

    #rm {
        font-size: 1.5rem;
    }

}

</style>
