const calcular = document.getElementById ('calcular');


function imc () {
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');

    if (nome !== '' && altura !== '' && peso !== '' ) {

        const valueIMC = (peso / (altura*altura) ).toFixed(2)
    

        let classificacao = ''

        if (valueIMC < 18.5) {
            classificacao = 'abaixo do peso'
        }

        else if (valueIMC < 25) {
            classificacao = 'no peso IDEAL'
        }

        else if (valueIMC < 30) {
            classificacao = 'levemente acima do peso'
        }

        else {
            classificacao = 'obeso'
        }

        resultado.textContent = `${nome} seu IMC é ${valueIMC} e você está ${classificacao}`


    }

    // toFixed arredonanda as casas
    // acento grave permite colocar variavel no meio da oração

    else {
        alert('Preencha todos os campos')
    }

}

calcular.addEventListener ('click', imc)
