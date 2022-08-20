function carregar(){
  let mensagem = window.document.getElementById('mensagem')
  let foto = window.document.getElementById('imagem')
  let data = new Date()
  let dia = data.getDate()
  let mes = data.getMonth()
  let ano = data.getFullYear()
  let hora = data.getHours()
  let min = data.getMinutes()
  let seg = data.getSeconds()
  // let hora = 15
  mensagem.innerHTML = `${dia}/${mes+1}/${ano} - ${hora}:${min}:${seg}`
  if(hora >= 25){
    foto.src = 'erro.jpg'
    mensagem.innerHTML = "ERRO"
    document.body.style.background = '#ce1010';
  }else if(hora >= 1 && hora < 5){
    foto.src = 'madrugada.jpg'
    document.body.style.background = '#515154';
  }else if(hora >= 5 && hora <= 12){
    foto.src = 'fotomanha.jpg'
    document.body.style.background = '#e2cd9f';
  }else if(hora > 12 && hora <= 18){
    foto.src = 'fototarde.jpg'
    document.body.style.background = '#b9846f';
  }else{
    foto.src = 'fotonoite.jpg'
    document.body.style.background = '#515154';
  }
}