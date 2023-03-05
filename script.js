async function carregarImagem(){
    try {
        var imgNasa = await fetch('https://api.nasa.gov/planetary/apod?api_key=Us9V4qF23cCiIx08S6XESjjkN1VZtNWkFLydrFA4')
        var imgConvertida = await imgNasa.json();
        let imgUrl = imgConvertida.hdurl;
        var autorFoto = document.getElementById('autor')
        var dataFoto = document.getElementById('data')
        var copyright = imgConvertida.copyright
        var data = imgConvertida.date
        var btn = document.getElementById('nasa-btn');
        btn.addEventListener("click", () => {
        document.getElementById('img-nasa').setAttribute("src", imgUrl),
        document.getElementById('nasa-btn').setAttribute("id", "fechar-imagem"),
        autorFoto.innerHTML = "Autor: "+ copyright
        dataFoto.innerHTML = "Data: " + data
        window.scrollBy(800, 1300),
        btn.textContent = "Fechar imagem",
        console.log(imgConvertida)
        }
        )

        if(imgConvertida.erro) {
            throw Error("A Imagem não carregou!");
        }
    } catch (erro){
        console.log(erro)
    }
}





carregarImagem()

