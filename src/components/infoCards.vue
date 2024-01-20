<script>
import idadeDoMiguel from "@/services/idadeDoMiguel";
import { Skeleton } from 'vue-loading-skeleton';
import "vue-loading-skeleton/dist/style.css";

export default {
    name: 'InfoCards',
    components: {
        Skeleton,
    },
    data() {
        return {
            idadeDoMiguel: {
                meses: "",
                semanas: "",
            },
            idadeCarregada: false,
        }
    },
    methods: {
        pegarIdade: async function() {
            var idade = await idadeDoMiguel.get();
            this.idadeDoMiguel.meses = idade.data.meses;
            this.idadeDoMiguel.semanas = idade.data.semanas;
            this.idadeCarregada = true;
        }
    },
    mounted: function() {
       this.pegarIdade();

    },
}


</script>

<template>
    <div class="container">
        <article>
            <section id="card-container">
                <div id="card-1" class="cards-container">
                    <div>
                        <h3>22</h3>
                        <h3>SP</h3>
                    </div>
                    <div id="linha-vertical"></div>
                    <img id="foto" src="/img/Foto.png">
                </div>
                <div id="card-2" class="cards-container">
                    <p>Eu sou o <b>Matheus</b>, um estudante de <b>Ciência da Computação</b> apaixonado por tecnologia. Minha busca
                        constante é pela acumulação de experiências, visando um futuro onde eu possa realizar feitos
                        grandiosos ou auxiliar um grande número de pessoas por meio da tecnologia.</p>
                    <p>Natural da cidade de <b>São Paulo</b>, carrego em mim a essência dinâmica e diversificada desse ambiente, o
                        que intensifica minha criatividade e ambição. Além disso, desfruto da gratificante experiência de
                        ser pai de uma <Skeleton loading="100%" width="40%" v-if="!idadeCarregada"/><a v-if="idadeCarregada" id="idade" href="https://api-do-miguel.onrender.com/index" target="_blank">criança de {{idadeDoMiguel.meses}} meses e {{ idadeDoMiguel.semanas }} semanas.</a></p>                
                </div>
                <div id="card-2" class="cards-container">
                    <p>O campo da arte e do entretenimento exerce um papel crucial em minha vida. Através de atividades como
                        a produção de música eletrônica, a apreciação de animes e as partidas de
                        Valorant, encontro formas de expressar e recarregar minha energia criativa.
                    </p>
                    <p>
                        Neste espaço, tenho o propósito de realizar uma breve apresentação e compartilhar meu conhecimento
                        na área. Agradeço pela oportunidade de me expressar e aguardo ansiosamente a chance de contribuir
                        com meu know-how. Obrigado.
                    </p>
                </div>
            </section>
        </article>
        <div class="linha-container" id="infocards">
            <div id="linha-final"></div>
        </div>
    </div>
</template>



<style scoped>
@import '@/style/global.css';

article {
    margin-top: 150%;
    width: 75%;
}

h3 {
    color: var(--branco);
    font-size: 1.5rem;
}

p {
    color: var(--branco);
}


#card-1 {
    align-items: center;
    background-color: var(--verde-escuro);
    display: flex;
    height: 80px;
    justify-content: center;
    padding: 5px;
    width: 150px;
    z-index: 10;
}

#card-2 {
    background-color: var(--verde-escuro);
    height: auto;
    width: 100%;
}

#card-2 p {
    margin: 1% 2% 1% 2%;
    font-size: 0.8rem;
}

#card-container {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    height: 450px;
    margin-left: 10%;
    margin-bottom: 0; 
    width: 100%;
    z-index: 10;
}

#foto {
    border-radius: 10px;
    margin-left: 2.5%;
    width: 40%;
}

#idade {
    cursor: pointer;
    font-style: italic;
    text-decoration: underline;
}

#infocards {
    margin-bottom: -15%;
    margin-top: -20%;
}

.linha-container {
    padding: 10% 0 10% 0;
}

#linha-final {
    margin: 20% 0 5% 0;
}

#linha-vertical {
    background-color: var(--branco);
    height: 70%;
    margin: 2% 4%;
    width: 2px;
}

.cards-container {
    border-radius: 10px;
    margin-bottom: 10%;
    margin-right: -8%;
}

.img-bg {
    height: 100%;
    margin-top: -50%;
    margin-left: 2.5%;
    pointer-events: none;
    position: absolute;
    width: 97.4%;
}

#skeleton {
    maring-left: 50%;
}


@media (min-width: 950px) {

    article {
        margin-top: 130%
    }

    #card-1 {
        height: 80px;
        margin-top: -140%;
        width: 150px;
    }

    #card-2 {
        width: 80%;
    }

    #card-2 p {
        font-size:1.1rem;
    }

    #card-container {
        margin-bottom: 0px;
        margin-left: 5%;
        padding-left: 25%;
        z-index: 10;
    }

    #linha-final {
        margin-bottom: 50%;
        margin-top: -10%;
    }

    .cards-container {
        margin-right: 12%;
    }
}


@media (min-width: 1490px) {

    h3 {
        font-size: 2.5rem;
        margin-left: 10%;
    }

    #card-1 {
        border-radius: 20px;
        height: 120px;
        width: 220px;
    }

    #card-2 {
        border-radius: 20px;
        width: 100%;
    }

    #card-2 p {
        font-size: 1.2rem;
        margin: 0;
        padding: 1.5%;
    }

    #card-container {
        margin-left: 10%;
        margin-top: 0%;
        z-index: 10;
    }

    #foto {
        margin-left: 5%;
        width: 45%;
    }

    #infocards {
        margin-top: 2%;
    }

    #linha-vertical {
        margin-left: 10%;
    }

    .cards-container {
        margin-top: 0%;
    }

    .img-bg {
        height: 100%;
        margin-left: 9.6%;
        margin-top: -65%;
        position: absolute;
        width: 90%;
    }
}
</style>
