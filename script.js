function conta () {
    
    
    var text = document.getElementById('result')
    var num = document.getElementById('numero')
    var number = Number(num.value)
    
    if (number <= 0) {
        window.alert("[ERRO] Digite um número maior que 0!" )
    } else {
        var m = 1
        while (m <= 10) {
        var resultado = m*number
        text.innerHTML += `${m}x${number}=${resultado}ㅤ`
        m++
        }
        
    }
}

function clean () {
    var text = document.getElementById('result')
    text.innerHTML = ""
    
}

