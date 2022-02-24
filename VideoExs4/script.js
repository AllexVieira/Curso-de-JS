function contar() {
    //alert('teste fun ok!')
    var inicio = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpas') 
    //alert(`${inicio.value},${fim.value},${passo.value}`)
    var res = document.querySelector('div#res')
    //alert(`${res.innerHTML}  teste div res`)
    var numatu = inicio.value
    res.innerHTML = (`${numatu},`)

    //for(inicio.value ;inicio.value <= fim.value; inicio.value + passo.value){
     //   numatu = inicio.value + passo.value
      //  res.innerHTML = (`${numatu},`)

  //  }

}