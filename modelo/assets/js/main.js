function getter() {
    const container = document.querySelector('.container');
    const resultado = document.querySelector('.resultado');

    function recebeEventoContainer(evento) {
        evento.preventDefault();
        let peso = container.querySelector('.peso');
        let altura = container.querySelector('.altura');

        peso = Number(peso.value);
        altura = Number(altura.value);

        if (isNaN(peso) && isNaN(altura)) {
            resultado.innerHTML = `<p class="erro"> Altura e Peso Invalidos </p>`
        }
        else if (isNaN(peso)) {
            resultado.innerHTML = `<p class="erro"> Peso Invalido </p>`
        }
        else if (isNaN(altura)) {
            resultado.innerHTML = `<p class="erro"> Altura Invalida </p>`
        }
        else if (peso === 0 || altura === 0) {
            resultado.innerHTML = `<p class="erro"> Altura ou Peso estão vazios </p>`
        }
        else {
        calculo = (peso / (altura * altura)).toFixed(2)
        
            function resposta(calculo) {
                if (calculo < 18.5) {
                    return `Seu IMC é ${calculo}(Abaixo do peso)`
                }
                else if (calculo >= 18.5 && calculo <= 24.9) {
                    return `Seu IMC é ${calculo}(Peso Ideal)`
                }
                else if (calculo >= 25 && calculo <= 29.9) {
                    return `Seu IMC é ${calculo}(Acima do peso)`
                }
                else if (calculo >= 30 && calculo <= 34.9) {
                    return `Seu IMC é ${calculo}(Obesidade 1)`
                }
                else if (calculo >= 35 && calculo <= 39.9) {
                    return `Seu IMC é ${calculo}(Obesidade 2)`
                }
                else if (calculo >= 40) {
                    return `Seu IMC é ${calculo}(Obesidade 3)`
                }
            }
            resultado.innerHTML = `<p class="acerto"> ${resposta(calculo)} </p>`
    }
    }

    container.addEventListener('submit', recebeEventoContainer)
}

getter()
