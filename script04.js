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
    res.innerHTML = ""
    res.innerHTML += dado.map( e =>"nome: " + e.name + "<br>" + "Idade: " + e.idade + "<br>")
}

u1.innerHTML = dado[0].name
u2.innerHTML = dado[1].name
u3.innerHTML = dado[2].name

function buscar(){
    dados.innerHTML = ""
    var opera = document.getElementById("operacao")
    var selec = opera.options[opera.selectedIndex].value

    if(selec === "u1"){
        dados.innerHTML += "Id: " + dado[0].id +"<br>"+ "Nome:" + dado[0].name +"<br>"+ "Idade:" + dado[0].idade +"<br>"+ "Criado em: " + dado[0].created_at + "<br>" 
    }
    if(selec === "u2"){
        dados.innerHTML += "Id: " + dado[1].id +"<br>"+ "Nome:" + dado[1].name +"<br>"+ "Idade:" + dado[1].idade +"<br>"+ "Criado em: " + dado[1].created_at + "<br>" 
    }
    if(selec === "u3"){
        dados.innerHTML += "Id: " + dado[2].id +"<br>"+ "Nome:" + dado[2].name +"<br>"+ "Idade:" + dado[2].idade +"<br>"+ "Criado em: " + dado[2].created_at + "<br>" 
    }
}
