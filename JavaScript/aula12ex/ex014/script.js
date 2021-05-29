function load() {
    var mensagem = window.document.getElementById('mensage')
    var image = window.document.getElementById('image')
    var data = new Date()
    //var hora = data.getHours()
    hora = 22
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        image.src = 'morning2.png'
        document.body.style.background = '#c2c2c0'
    } else if (hora <= 18){
        // boa tarde
        image.src = 'afternoon2.png'
        document.body.style.background = '#1b3576'
    }else{
        // boa noite
        image.src = 'night2.png'
        document.body.style.background = '#0f0f11'
    }
}
