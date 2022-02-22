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
            if (idade >= 0 && idade < 16){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 22 ){
                //jovem
            } else if (idade < 60 ){
                //adulto
            } else {
                //idoso
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 16){
                //criança
            } else if (idade < 22 ){
                //jovem
            } else if (idade < 60 ){
                //adulto
            } else {
                //idoso
            }
          }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.` 
        res.appendChild(img)
     }
}