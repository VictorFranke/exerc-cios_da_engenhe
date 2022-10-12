function calcular(){
    var valor_1 = document.getElementById("txt1")
    var valor_2 = document.getElementById("txt2")
    var opera = document.getElementById("operacao")
    var res = document.getElementById("res")

    if(valor_1.value.length == 0 || valor_2.value.length == 0){
        window.alert("[ERROR] Faltam dados")
    }
    else{
        res.innerHTML = "Resultado da sua operação vale: <br>" 
        var i = Number(valor_1.value)
        var f = Number(valor_2.value)
        var selec = opera.options[opera.selectedIndex].value
        if(selec === "soma"){
            var r = i+f
            res.innerHTML += i + "+" + f + "=" + r
        }
        if(selec === "subtracao"){
            var r = i-f
            res.innerHTML += i + "-" + f + "=" + r
        }
        if(selec === "multipicacao"){
            var r = i*f
            res.innerHTML += i + "*" + f + "=" + r
        }
        if(selec === "divisao"){
            var r = i/f
            res.innerHTML += i + "/" + f + "=" + r
        }
    }
}