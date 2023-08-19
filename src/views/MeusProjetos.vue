<script>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import github from '@/services/github';

import "swiper/css";
import 'swiper/css/navigation';

export default {
    name: 'meusProjetos',
    components: {
        Swiper, 
        SwiperSlide
    },
    data() {
        return {
            projetosArray: [],
            avatar: ''

        }
    },
    mounted() {

        github.get("/repos")
        .then((resp) => {
            this.projetosArray = resp.data;
        })

        github.get()
        .then((resp) => {
            this.avatar = resp.data.avatar_url
        })
    },

    setup() {
        return {
            modules: [Navigation]
        }
    },

}

</script>



<template>

<img class="img-bg" src="../../public/img/bg-dktp.svg">
    <div id="projetos">
        <h1>Projetos</h1>
        <swiper 
        :slides-per-view="1" 
        :space-between="50" 
        :navigation="true"
        :modules="modules"
        class="swiper"
        
        >
            <swiper-slide v-for="(SlideContent, index) in projetosArray" :key="index">
                    <article class="container">
                        <section>
                            <div class="projetos">
                                <div id="avatar">
                                    <a class="github-link" :href="SlideContent.owner.html_url" target="_blank">
                                        <img id="foto" :src="avatar">
                                    </a>
                                </div>
                                <h2>{{ SlideContent.name }}</h2>
                                <p>{{ SlideContent.description }}</p>
                                <div id="stacks">
                                    <label><b>Stack:</b></label>
                                    <p>{{ SlideContent.language }}</p>
                                </div>
                                <div class="btn-align">
                                    <a id="botao" :href="SlideContent.html_url" target="_blank">
                                        Abrir projeto
                                    </a>
                                </div>
                            </div>
                        </section>
                    </article>
            </swiper-slide>
        </swiper>
        <div class="linha-container">
            <div class="meusprojetos" id="linha-final"></div>
        </div>
    </div>

</template>


<style scoped>

@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';


h1 {
    color: var(--branco);
    font-size: 1.5rem ;
    text-align: center;
}

h2 {
    color: var(--branco);
    font-size: 1rem;
    font-weight: bold;
    padding: 5%;
}

label {
    color: var(--branco); 
    font-size: 1rem;
    margin: 5%;
}

p {
    color: var(--branco);
    font-size: 0.8rem;
    margin: 5%;
}

section {
    display: flex;
    justify-content: space-around;

}

#avatar {
    margin: 5% 0;
}

#botao {
    align-items: center;
    background-color: var(--bege-bg);
    border-radius: 5px;
    border: solid 3px var(--verde-claro);
    color: var(--branco);
    display: flex;
    font-weight: bold;
    height: 25px;
    justify-content: center;
    width: 80%;
}

#botao:hover {
    animation: jello 1s; 
}

#foto {
    border: solid 2px var(--verde-claro);
    border-radius: 15%;
    width: 30%;
}

#stacks {
    align-items: center;
    display: flex;
    justify-content: center;
}

.btn-align {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 25% 0;
}

.github-link {
    align-items: center;
    display: flex;
    justify-content: center;
}

.github-link:hover {
    background-image: url(../../public/img/icons/github.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25%;
}

.meusprojetos {
    margin-top: 10%;
}

.projetos {
    background-color: var(--verde-escuro);
    border-radius: 25px;
    height: 339px;
    width: 166px;
}
.img-bg {
    height: 100%;
    margin-top: -45%;
    pointer-events: none;
    position: absolute;
    transform: scaleX(-1);
    width: 98%;
}

@media (min-width: 950px) {

    p {
        font-size: 1.2rem;
    }

    h2 {
        margin-bottom: 15%;

    }

    #botao {
        margin-top: 15%;
    }

    #projetos {
        margin-top: -35%;
        z-index: 100;
    }

    #stacks {
        margin-top: 20%;
    }

    .projetos {
        background-color: var(--verde-escuro);
        border-radius: 25px;
        height: 616px;
        width: 216px;
    }

    .img-bg {
        height: 90%;
        margin-top: -40%;
        width: 97.4%;
    }

}

@media(min-width: 1490px) {

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 1.5rem;
    }

    label {
        font-size: 1.8rem;
    }

    #botao {
        border: solid 3px var(--verde-claro);
        font-size: 1.5rem; 
        height: 45px;
        margin-top: 20%;

    }
    
    #linha-final {
        margin-top: 5%;
    }
    .img-bg {
        height: 100%;
        margin-left: -3%;
        margin-top: -30%;

    }

    .projetos {
        height: 825px;
        width: 351px;
    }

    .meusprojetos {
        margin: 2% 0 0 0;
    }

}

</style>