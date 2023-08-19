<script>
import personagensTela from './personagens/personagensTela.vue';

export default {
    name: 'indexPageRn',
    components: {
        personagensTela,
    },
    data () {
        return {
            ativarPersonagens: false,
            ativarEpisodios: false,
            ativarMundos: false,
            mostrarBotoes: true,

        }
    },
    methods: {
        abrirPersonagens: function () {

            if(this.mostrarBotoes === true) {
                this.mostrarBotoes = false
            }

            this.ativarPersonagens = !this.ativarPersonagens
        },
    }
}
</script>

<template>
    <div>
        <section v-if="mostrarBotoes">
            <button id="personagens" @click="abrirPersonagens" class="animate__animated animate__fadeInLeft">
                <p>Personagens</p>
            </button>
        </section>
        <article v-if="ativarPersonagens">
            <personagensTela />
        </article>
    </div>
</template>

<style scoped>
@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';

article {
    height: 100%;
    overflow: auto;
    width: 100%;
}

button {
    background-color:#e89ac7;
    border: none;
    border-radius: 15px 0 15px 0;
    height: 84px;
    width: 90px;
}

div {
    align-items: center;
    height: 100%;
    justify-content: center;
    width: 100%;
}

p {
    color: var(--branco);
    font-size: 0.8rem;
    text-shadow: -1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000, 1px 1px 1px #000;
}

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: #3b5005;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--verde-escuro);
        border-radius: 5px;

    }


@media (min-width: 950px) {
    button {
        height: 280px;
        width: 295px;
    }

    p {
        font-size: 2rem;
    }
}

@media (min-width: 1490px) {

    button {
        background-color:#e89ac7;
        border: none;
        border-radius: 15px 0 15px 0;
        height: 215px;     
        margin: 25px 0;
        width: 285px;
    }

    p {
        font-size: 2rem;
    }

}
</style>