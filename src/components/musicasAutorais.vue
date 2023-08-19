<script>

export default {
    name: 'musicasAutorais',
    methods: {
        pegarVolume: function () {
            let inputRange = document.querySelector('#volume-control')
            this.volume = inputRange.value
        },
        atualizarVolume: function(){
                this.$refs.audioPlayer.volume = this.volume
        },
        tocar: function (index, thumb, link, nome) {
            const audioElement = this.$refs.audioPlayer;
            const item = this.musicas[index];

            this.thumb = thumb;
            this.link = link;
            this.musicaAtual = nome;

            if (item.tocando) {
                audioElement[index].pause();
                item.tocando = false
                this.status = require('../../public/musicas/player/play.svg')
                this.tempoAtual = audioElement[index].currentTime
            } else {
                this.pararTodasAsMusica();
                this.status = require('../../public/musicas/player/pause.svg')
                audioElement[index].play();
                item.tocando = true
            }
        },
        pararTodasAsMusica: function () {
            const audioElement = this.$refs.audioPlayer;
            this.musicas.forEach((item, index) => {
                item.tocando = false;
                audioElement[index].pause();
                audioElement[index].currentTime = 0;
            })
        },
        atualizarTempo: function (index) {
            const audioElement = this.$refs.audioPlayer;

            this.musicas.forEach((musica) => {
                if(musica.id === index) {
                    const tempoAtual = audioElement[index].currentTime;
                    const duracaoTotal = audioElement[index].duration;
                    const tempoDecorrido = this.formatarTempo(tempoAtual);
                    const tempoRestante = this.formatarTempo(duracaoTotal - tempoAtual);

                    musica.tempoDecorrido = tempoDecorrido;
                    musica.tempoRestante = tempoRestante;
                }
            });
        },
        formatarTempo: function (tempo) {
            const minutos = Math.floor(tempo / 60);
            const segundos = Math.floor(tempo % 60);
            return `${minutos}:${segundos.toString().padStart(2, '0')}`;
        },
        ajustarVolume: function (index) {
            const audioElement = this.$refs.audioPlayer;

            this.musicas.forEach((musica) => {
                if(musica.id === index) {
                    audioElement[index].volume = this.volume;
                }
            });

        }
        },
    data () {
        return {
            musicas: [
                {
                    id: 0,
                    nome: 'Abstract Dialogues',
                    src: require('@/assets/musicas/abstractdialogues.mp3'),
                    tocando: false,
                    tempoDecorrido: '0:00',
                    tempoRestante: '0:00',
                    thumb: require('@/assets/musicas/thumbs/abstractdialogues.png'),
                    link: "https://onerpm.link/215595865565"
                },
                {
                    id: 1,
                    nome: 'Respectful',
                    src: require('@/assets/musicas/respectful.mp3'),
                    tocando: false,
                    tempoDecorrido: '0:00',
                    tempoRestante: '0:00',
                    thumb: require('@/assets/musicas/thumbs/respectful.png'),
                    link: "https://onerpm.link/831199541090"
                },
                {
                    id: 2,
                    nome: 'Good Drugs',
                    src: require('@/assets/musicas/gooddrugs.mp3'),
                    tocando: false,
                    tempoDecorrido: '0:00',
                    tempoRestante: '0:00',
                    thumb: require('@/assets/musicas/thumbs/gooddrugs.png'),
                    link: "https://onerpm.link/794011372257"
                },
                {
                    id: 3,
                    nome: 'I Dont Know',
                    src: require('@/assets/musicas/idontknwo.mp3'),
                    tocando: false,
                    tempoDecorrido: '0:00',
                    tempoRestante: '0:00',
                    thumb: require('@/assets/musicas/thumbs/idontkwo.jpg'),
                    link: "https://onerpm.link/318995616069"
                }
            ],
            tempoAtual: 0,
            volume: 1,
            play: require('../../public/musicas/player/play.svg'),
            pause: require('../../public/musicas/player/pause.svg'),
            thumb: require('../../public/musicas/logo.png'),
            link: "https://linktr.ee/cognizantrance",
            musicaAtual: "Cognizant"                                                 

        }
    },
}
</script>

<template>
    <div>
        <header>
            <a :href="link" target="_blank">
                <h1>{{ musicaAtual }}</h1>
                <img :src="thumb" id="thumb">
            </a>
        </header>
        <div id="music-container">
            <article id="player" v-for="musica in musicas" :key="musica.id">
                    <h2>{{ musica.nome }}</h2>
                    <div id="tempo">
                        <h2>{{ musica.tempoDecorrido }}</h2>
                        <h2>{{ musica.tempoRestante }}</h2>
                    </div>
                    <img id="play" :src="musica.tocando ? pause : play" @click="tocar(musica.id, musica.thumb, musica.link, musica.nome)">
                <audio ref="audioPlayer" @timeupdate="atualizarTempo(musica.id)">
                    <source :src="musica.src" type="audio/mp3">
                </audio>
 
            <div id="volume-button">
                <input type="range" v-model="volume" @input="ajustarVolume(musica.id)" id="volume-control" min="0" max="1" step="0.1">
                <p>Volume: {{ volume }}</p>
            </div>
            </article>
        </div>
    </div>
</template>

<style scoped>
@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';



a {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

div {
    background-color: var(--bege-bg);
    border-radius: 5px;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

p {
    color: var(--branco);
    font-size: 0.7rem;
    white-space: nowrap;
}

h1 {
    color: var(--branco);
    font-size: 0.7rem;
    margin: 15%;
    white-space: nowrap;
}


h2 {
    color: var(--branco);
    font-size: 0.7rem;
    margin: 5%;
}

#music-container {
    background-color: var(--verde-escuro);
    overflow: auto;
    padding: 5%;
}

#play {
    height: 20px;
    margin: 5%;
    transition: 0.5s;
    width: 20px;
}

#player {
    align-items: center;
    background-color: var(--bege-bg);
    border-radius: 5px;
    display: flex;
    height: 40px;
    justify-content: space-around;
    margin: 15% 0;
    padding: 15% 20%;
    width: 200px;
}

#player-buttons {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -15%;
}

#tempo {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#thumb {
    border: 2px solid var(--verde-escuro);
    border-radius: 50%;
    height: 50px;
    margin-bottom: 50%;
    width: 50px;
}

#volume-button {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 25px;
    justify-content: center;
    margin-top: 5%;
}

#volume-control {
    appearance: none;
    background-color: #3b5005;
    border-radius: 0 15px 15px 0;
    margin-top: -5%;
    width: 100%;
}

#volume-control::-webkit-slider-thumb {
    appearance: none;
    background-color: var(--bege-bg);
    border: solid 1px var(--branco);
    border-radius: 0 15px 15px 0;
    display: block;
    height: 10px;
    width: 10px;
}

    ::-webkit-scrollbar {
        width: 1px;
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
        height: 100%;
    }

    header {
        height: 40%;
        width: 90%;
    }

    h1 {
        color: var(--branco);
        font-size: 1.5rem;
        margin: 2% 0;
        text-align: center;
    }

    p {
        font-size: 1rem;
    }

    h2 {
        font-size: 1rem;
        margin-right: 30%;
    }

    div {
        border-radius: 10px;
    }

    #thumb {
        border: 4px solid var(--verde-escuro);
        border-radius: 50%;
        height: 150px;
        width: 120px;
    }


    #player {
        align-items: space-between;
        background-color: var(--bege-bg);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        margin: 5%;
        width: 510px;
    }

    #play {
        height: 45px;
        margin: 0 20%;
        width: 45px;

    }
}

@media (min-width: 1490px) {
    
    h1 {
        color: var(--branco);
        font-size: 2rem;
        margin: 2% 0;
        text-align: center;
    }

    h2 {
        margin-left: -30%;
        white-space: nowrap;
    }

    div {
        border-radius: 25px;
    }

    header {
        height: 50%;
        width: 90%;
    }

    #tempo {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #player-buttons {
        margin-top: -15%;
    }

    #thumb {
        border: 10px solid var(--verde-escuro);
        border-radius: 50%;
        height: 250px;
        width: 250px;
    }

    #volume-button {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 5%;
        height: 25px;
    }

    #volume-control::-webkit-slider-thumb {
        appearance: none;
        background-color: var(--bege-bg);
        border: solid 1px var(--branco);
        border-radius: 0 15px 15px 0;
        display: block;
        height: 25px;
        width: 25px;
    }

    #play {
        height: 50px;
        margin: 5%;
        transition: 0.5s;
        width: 50px;
    }

    #volume-control {
        appearance: none;
        background-color: #3b5005;
        border-radius: 0 15px 15px 0;
        margin-top: -5%;
    }

    #music-container {
        background-color: var(--verde-escuro);
        overflow: auto;
    }

    #music-container::-webkit-scrollbar-track {
        display: none;
    }

    #player {
        align-items: center;
        background-color: var(--bege-bg);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        height: 96px;
        margin: 5%;
        width: 90%;
    }

} 


</style>