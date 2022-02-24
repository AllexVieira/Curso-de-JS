function contar() {
    //alert('teste fun ok!')
    var inicio = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpas') 
    //alert(`${inicio.value},${fim.value},${passo.value}`)
    var res = document.querySelector('div#res')
    res.innerHTML = ""
    //alert(`${res.innerHTML}  teste div res`)
    //var numatu = inicio.value
    //res.innerHTML = (`${numatu},`)
    //res.innerHTML = (`${inicio.value}, ${fim.value}, ${passo.value}`)

    for(numatu = inicio.value ;numatu <= fim.value; numatu + passo.value){
        res.innerHTML = (`${res.innerHTML}` + `,${numatu}, `)
        numatu = (inicio.value + passo.value)
        
    }
    res.innerHTML = (res.innerHTML + ` FIM !!!`)
}