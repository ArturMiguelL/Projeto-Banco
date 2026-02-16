let adicionar = document.getElementById("adicionar");
let sacar = document.getElementById("sacar");
let mostrar = document.getElementById("Mostrar");
let historico = document.getElementById("historico");

let saldo = 0;

function adicionarSaldo(){
    let valor = Number(adicionar.value);

    if(valor > 0 && !isNaN(valor)){
        saldo += valor;
        mostrar.innerHTML = "Seu saldo atual é: R$"+ saldo;
        adicionar.value = "";

       historico.innerHTML += `<p>Você adicionou na sua conta: R$ ${valor}</p>`;

    }else{
        alert("Coloque um valor valido")
    }

    adicionar.value ="";
    adicionar.focus();
}

function sacarSaldo(){
    let retirar = Number(sacar.value);

    if(retirar > 0 && !isNaN(retirar) && retirar <= saldo){
        saldo -= retirar;
        mostrar.innerHTML = "Seu saldo atual é: R$"+saldo;
        sacar.value = "";

     historico.innerHTML += `<p>Você sacou da sua conta: R$ ${retirar}</p>`;

    }else{
        alert("Saldo insuficiente ou valor inválido")
    }

    sacar.value = "";
    sacar.focus();
    
}

adicionar.addEventListener("keyup", function(event){
    if(event.keyCode ===13){
        event.preventDefault();
        btn_add.click();
    }
})

sacar.addEventListener("keyup", function(event){
    if(event.keyCode ===13){
        event.preventDefault();
        btn_sacar.click();
    }
})

btn_add.addEventListener('click', adicionarSaldo);
btn_sacar.addEventListener('click', sacarSaldo);


