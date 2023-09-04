<script>

export default {
    name:'finalFooter',

}
</script>

<template>
    <div id="footer">
        <section>
            <a id="soundcloud" href="https://linktr.ee/cognizantrance" target="_blank"><img src="../../public/img/icons/footer/soundcloud.svg"></a>
            <a id="github" href="https://github.com/FerrazRezende" target="_blank"><img src="../../public/img/icons/footer/github.svg"></a>
            <div id="barra-vertical">
            </div>
            <div id="documentacoes">
                <a class="footer-buttons" href="https://igorhalfeld.teachable.com/p/treinamento-completo-e-gratuito-de-vue-js-3-do-iniciante-ao-avancado?utm_source=landing_page" target="_blank"><img src="../../public/img/icons/footer/vuejs.svg">Melhor curso de Vue JS</a>
                <a class="footer-buttons" href="https://api.nasa.gov/" target="_blank"><img src="../../public/img/icons/footer/nasa.svg">API NASA</a>
                <a class="footer-buttons" href="https://rickandmortyapi.com/" target="_blank"><img src="../../public/img/icons/footer/rickandmorty.svg">Rick e Morty API</a>
            </div>
        </section>
    </div>
</template>

<style>

section {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
}

#barra-vertical {
    background-color: var(--branco);
    height: 80%;
    margin: 10%;
    width: 2px;
}

#documentacoes {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#footer {
    background-color: var(--verde-escuro);
    height: 205px;
    margin-top: 5%;
    width: 102.5%;
}

#github img{
    height: 30px;
    margin: 50%;
    width: 39px;
}

#soundcloud img {
    height: 30px;
    width: 39px;
}

.footer-buttons {
    align-items: center;
    color: var(--branco);
    display: flex;
    font-size: 0.8rem;
    justify-content: center;
    margin-bottom: 10%;
    white-space: nowrap;
}

.footer-buttons img {
    height: 20px;
    margin-right: 5%;
    width: 25px;
}

@media (min-width: 950px) {
    #footer {
        width: 103.5%;
    }
}

@media (min-width: 1490px) {
    #footer {
        width: 102.5%;
    }
}

</style>
