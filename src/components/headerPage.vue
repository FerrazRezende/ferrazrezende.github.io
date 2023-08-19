<script>

export default {
    name: 'headerPage',
    data () {
        return {
            ativarMenu: false
        }
    },
    methods: {
        abrirMenu: function () {
            this.ativarMenu = !this.ativarMenu
        }
    }
}

</script>

<template>

    <header>
        <nav class="container">
            <a><img src="/img/Logo.svg" id="logo" alt="Logo"></a>
            <a v-on:click="abrirMenu"><img src="/img/menu-bar.svg" id="menu-bar"></a>
            
            <div v-if="ativarMenu" id="overlay" v-on:click="abrirMenu" class="animate__animated animate__fadeInLeft"></div>
            
            <div id="items" :class="{ativar:ativarMenu}" class="animate__animated animate__fadeInRight">
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#api">APIs</a></li>
                    <li id="curriculo"><a href="https://drive.google.com/file/d/11KE05wW0Pv45QMXaCmYcP7M77b0fNt2-/view?usp=sharing" target="_blank">Curriculo</a></li>
                </ul>
            </div>
            </nav>
        </header>

</template>


<style scoped>

@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';

header {
    height: 105px;
    width: 100%;
}

nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

ul {
    list-style: none;
}

ul li a {
    color: var(--branco);
    font-size: 1.5rem;
}

ul li {
    margin: 50px 0;
}

#curriculo {
    border: solid 4px var(--amarelo-borda);
    border-radius: 25px;
    margin-left: 2%;
    width: 105%;

}

#items {
    align-items: center;
    background-color: var(--bege-bg);
    display: none;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    position: fixed;
    right: 0;
    top: 0;
    transition: 1s;
    width: 60%;
    z-index: 60;
}

#items.ativar{
    display: flex;


}

#logo {
    height: 75px;
    width: 109px;
}

#overlay {
    animation: overlayInLeft 1s;
    background-color: black;
    height: 100vh;
    left: 0;
    opacity: 0.5;
    position: fixed;
    top: 0;
    width:40%;
    z-index: 60;
}

@media (min-width: 950px) {
    
    #menu-bar, #overlay {
        display: none;
    }

    #logo {
        height: 75px;
        width: 109px;
    }

    #items {
        display: flex;
        height: auto;
        position: static;
        width: auto;
    }

    ul {
        align-items: center;
        display: flex;
        margin-left: 287px;
    }

    ul li {
        margin-right: 20%;
        margin-top: -30%;
    }

    ul li a {
        font-size: 1rem;
    }

    header {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 105px;
    }

    
    nav {
        display: inline;
        justify-content: space-between;
        width: 768px;
    }
}

@media (min-width: 1490px) {
    #menu-bar, #overlay {
        display: none;
    }

    #logo {
        height: 75px;
        width: 109px;
    }

    #items {
        display: flex;
        height: auto;
        position: static;
        width: auto;
    }

    ul {
        align-items: center;
        display: flex;
        margin-left: 287px;
    }

    ul li {
        margin-right: 20%;
        margin-top: -30%;
    }

    ul li a {
        font-size: 1rem;
    }

    header {
        align-items: center;
        display: flex;
        height: 105px;
        flex-direction: column;
    }

    nav {
        display: inline;
        justify-content: space-between;
        width: 768px;
    }
}

</style>