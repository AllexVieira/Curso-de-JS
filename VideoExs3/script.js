function verificar() {
    //alert('ok')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked){
            genero = 'Mulher'
          }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.` 
     }
}