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
        //criando a imagem
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('style', 'width:100%; height:400px;')
        //para ajustar as configuraçoes da imagem o comando acima com style pode mudar tudo de uma vez ou pode ser feito individualmente como nos comandos abaixo.
        //img.setAttribute('width', '50%')
        //img.setAttribute('height', '400px')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 16){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 22 ){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60 ){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 16){
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            } else if (idade < 22 ){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 60 ){
                //adulto
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
          }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos que você é ${genero} com ${idade} anos.` 
        res.appendChild(img)
     }
}