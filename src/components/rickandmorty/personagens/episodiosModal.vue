<script>
import rickAndMorty from '@/services/rickAndMorty';


export default {
    name: 'mundosRn',

    data() {
        return {
            dados: [],
            dadosMundos: [],
            temporada: 0,
        }
    },

    mounted() {
        this.pegarDados();
    },
    methods: {
        pegarDados: function () {
            rickAndMorty.get(`/character/${this.persoId}`)
            .then(resp => {
                this.dados = resp.data.episode
                this.pegarMundo()
            })
        },
        pegarMundo: function () {
            for(let i = 0; i < this.dados.length; i++) {
                rickAndMorty.get(this.dados[i]).then(resp => {
                    this.dadosMundos.push(resp.data)
                })
            }
        }
    },
    props: {
        persoId: Number,
        nomeDoPersonagem: String,
        fecharModalMundo: {
            type: Function,
        }
    }
}
</script>

<template>
    <div class="bg">
        <a @click="fecharModalMundo">x</a>
        <h1>Episódios que o {{ nomeDoPersonagem }} aparece:</h1>
        <div v-for="dado in dadosMundos" :key="dado.id">
            <div id="infos">
                <h3>Episódio: {{ dado.name }}</h3>
                <h3>Número: {{ dado.id }}</h3>
                <h3>Temporada: {{ dado.episode.split(0)[1].split("E")[0] }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>

a {
    color: var(--branco);
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    padding: 5% 0 0 5%;
}

h1 {
    color: var(--branco);
    font-size: 0.7rem;
    padding: 6%;
    text-align: center;
}

h3 {
    color: var(--branco);
    font-size: 0.5rem;
    margin: 5%;
}

#infos {
    border: solid 2px var(--branco);
    border-radius: 5px;
    display: flex;
    margin: 5%;
}

.bg {
    background-color: var(--bege-bg);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding-bottom: 5%;
}

@media (min-width: 950px) {

    a{
        font-size: 1.5rem;
    }

    h1 {
        font-size: 1.2rem;
        
    }

    h3 {
        font-size: 1rem;
    }

    .bg {
        background-size: 100%;
    }
}

@media (min-width: 1490px) {
    a{
        font-size: 1.5rem;
    }

    h1 {
        font-size: 1.2rem;
        
    }

    h3 {
        font-size: 1rem;
    }

}


</style>@/services/rickAndMorty