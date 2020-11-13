function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F600} `
            }
        } else {
            // Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F600} `
            }
        }
        res.innerHTML += `\u{1F919} `
    }
}