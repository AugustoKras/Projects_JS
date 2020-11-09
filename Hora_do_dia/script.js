function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA !
        Img.src = 'fotomanha.png'
        document.body.style.background = '#ffdead'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE !
        Img.src = 'fototarde.png'
        document.body.style.background = '#f4a460'
    } else {
        // BOA NOITE !
        Img.src = 'fotonoite.png'
        document.body.style.background = '#4682b4'
    }
}



