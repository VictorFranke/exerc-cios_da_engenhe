const dado = [
    {
    id:"1",
    name:"Bartolomeu Santos",
    idade:36,
    created_at:"2022_03_1"
    },
    {
    id:"2",
    name:"Maria Mesote",
    idade:45,
    created_at:"2022_02_1"
    },
    {
    id:"1",
    name:"Juliana Silva",
    idade:36,
    created_at:"2018_03_1"
    }
]

function buscad(){
    res.innerHTML += dado.map( e =>"nome: " + e.name + "<br>" + "Idade: " + e.idade + "<br>")
}

function calcular(){
    var opera = document.getElementById("operacao")
    var selec = opera.options[opera.selectedIndex].value
    if(selec === "qtd"){
        dados.innerHTML += "A Quantidade de Usuários Cadastrados são: " + dado.length + "<br>"
    }
    if(selec === "media"){
        var s = 0
        for (i=0 ; i<dado.length ; i++){
            var s =s + dado[i].idade
        }
        
        dados.innerHTML += "A média da Idade dos usuários cadastrados é: " + (s/dado.length) + "<br>"
    }
}