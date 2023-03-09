async function carregarImagem(){
  
        var imgNasa = await fetch('https://api.nasa.gov/planetary/apod?api_key=Us9V4qF23cCiIx08S6XESjjkN1VZtNWkFLydrFA4')
        var imgConvertida = await imgNasa.json();
        let imgUrl = imgConvertida.hdurl;
        var autor = imgConvertida.copyright
        var data = imgConvertida.date
        html = `
        <div id="slideup">
        <img src="${imgUrl}" class="" id="img-nasa" width="380px">
        <div class="tabs is-centered is-medium card div-img">
        <div class="card-content">
          <div class="content">
            <p id="autor">Créditos: ${autor}</p>
            <p id="data">Data: ${data}</p>
          </div>
        </div>
      </div>
      </div>
      `
}

function abrirImagem(){
  if ($("#slideup").length){
    alert("Imagem já adicionada")
  }
  else {
    $("#img-div" ).append(html);
    window.scrollBy(800, 1300);
  }
}
function fecharImagem(){
    $("#slideup").remove();
}


carregarImagem()
abrirImagem()
fecharImagem()