<script>

export default {
    name: 'sobreMim',
}

</script>

<template>
    <div class="container">
        <h1>Seja bem-vindo!</h1>
        <p class="animate__animated animate__zoomInLeft animate__delay-3s">Ao meu espaço dedicado à
            exploração contínua do mundo da tecnologia. Aqui, trago minha jornada de aprendizado e interesse, destacando
            como o fascínio pelo universo digital me moldou.
        </p>
        <a><button>Saiba mais!</button></a>
    </div>
</template>

<style scoped>
@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';

button {
    background-color: var(--verde-claro);
    border: solid 2px var(--verde-escuro);
    border-radius: 5px;
    cursor: pointer;
    float: right;
    height: 24px;
    width: 115px;
}

button:hover {
    animation: jello 1s;
}

div {
    color: var(--branco);
    margin-top: 20%;
}

h1 {
    animation: keyboardBlink 500ms infinite normal steps(40), typingAnimation 3.5s steps(35) 1s normal both;
    border-right: 2px solid var(--branco);
    font-size: 1.5rem;
    margin: 0 18% 16px 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
}

p {
    margin-bottom: 64px;
}


@media (min-width: 950px) {
    .container {
        margin-left: 25%;
        margin-top: 15%;
        width: 50%;
    }
}

@media (min-width: 1920px) {
    .container {
        margin-left: 36%;
        margin-top: 15%;
        width: 28%;

    }
}
</style>
