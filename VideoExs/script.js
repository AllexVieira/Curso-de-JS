function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    //msg.innerHTML = `A hora agora é <strong>${hora}:${min}:${sec}</strong></p>`

    if (hora >= 6 && hora <= 11) {
        msg.innerHTML = `BOM DIA !!!<p>A hora agora é <strong>${hora}:${min}:${sec}</strong>`
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <=17) {
        msg.innerHTML = `BOA TARDE !!!<p>A hora agora é <strong>${hora}:${min}:${sec}</strong>`
        img.src ='fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `BOA NOITE !!!<p>A hora agora é <strong>${hora}:${min}:${sec}</strong>`
        img.src ='fotonoite.png'
        document.body.style.background = '#515154'
    }
}