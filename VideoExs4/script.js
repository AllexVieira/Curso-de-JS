function contar() {
    var inicio = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpas') 
    //alert(`${inicio.value},${fim.value},${passo.value}`)
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar !'
        //alert('[ERRO] Faltam dados !')

    } else {
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1f449} `
            }
        } else {
            //contagem decrescente
            for(var c = i; c >= f; c-= p)
            res.innerHTML += ` ${c} \u{1f449} `
          } 
        res.innerHTML += '\u{1f3c1}'
     }

}