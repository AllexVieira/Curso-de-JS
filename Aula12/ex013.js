var idade = 10
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota.')
}   else if (idade < 18 || idade > 64) {
        console.log('Voto Opcional')
    }   else {
        console.log('Voto Obrigatorio')
        }
