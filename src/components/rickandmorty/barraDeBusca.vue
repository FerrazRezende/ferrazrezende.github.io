<script>
    export default {
        name: 'headerRN',
        props: {
            qtdPaginas: Number,
            pagina: Number,
            avancarPagina: {
                type: Function,
                required: true
            },
            voltarPagina: {
                type: Function,
                required: true
            }
        },
        data() {
            return {
                resultadoBusca: ""
            }
        },
        methods:{
            eventoBusca: function(e){
                this.$emit('eventoBusca', e.target.value)
            },
            limparInput: function() {
                document.querySelector("#input").value = "";
                this.resultadoBusca = "";
            }
        }
    }

</script>

<template>
    <div>
        <div>
            <input id="input" class="animate__animated animate__fadeInDown" @keyup="eventoBusca">
        </div>
        <div class="paginacao">
            <img src="../../../public/img/icons/avancar.svg" id="voltar" @click="voltarPagina">    
            <p>{{ pagina }} de {{ qtdPaginas }}</p>
            <img src="../../../public/img/icons/avancar.svg" id="avancar" @click="avancarPagina">
        </div>
    </div>
</template>

<style scoped>
@import '@/style/global.css';
@import 'animate.css';
@import '@/style/animations.css';

div {
    height: 100%;
    width: 100%;
}

input {
    background-color: var(--bege-bg);
    background-image: url('../../../public/img/icons/lupa.svg');
    background-position: 3% center;
    background-repeat: no-repeat;
    background-size: 10%;
    border-radius: 5px;
    border: none;
    color: var(--branco);
    font-size: 2rem;
    height: 25px;
    margin-left: 14px;
    margin-top: 5%;
    padding-left: 10%;
    width: 90%;
}

input:focus {
    outline: none;
}

#avancar {
    align-self: center;
    background-color: var(--bege-bg);
    border-radius: 5px;
    margin: 0 14px;
}

#voltar {
    align-self: center;
    background-color: var(--bege-bg);
    border-radius: 5px;
    transform: scaleX(-1);
    margin: 0 14px;
}

.paginacao {
    align-items: center;
    display: flex;
    justify-content: center;
}

.paginacao img {
    height: 15px;
    width: 25px;
}

.paginacao p {
    color: var(--branco);
    font-size: 0.8rem;
    text-align: center;
}

.header {
    display: flex;
}


@media(min-width: 950px) {

    input {
        background-size: 5%;
        height: 50px;
        margin-bottom: 5%;
    }

    .paginacao img {
        height: 30px;
        width: 50px;
    }
}

@media(min-width: 1490px) {

    input {
        border-radius: 15px;
        font-size: 2rem;
        height: 52px;
        margin-right: 14px;
        padding-left: 10%;
        width: 90%;
    }

    input:focus {
        outline: none;
    }

    #avancar {
        align-self: center;
        background-color: var(--bege-bg);
        border-radius: 5px;
        height: 29px;
        margin: 0 14px;
        width: 35px;
    }

    #voltar{
        align-self: center;
        background-color: var(--bege-bg);
        border-radius: 5px;
        height: 29px;
        margin: 0 14px;
        transform: scaleX(-1);
        width: 35px;
    }   
    
    .paginacao {
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 0;
    }

    .paginacao p {
        font-size: 1rem;
    }
}

</style>