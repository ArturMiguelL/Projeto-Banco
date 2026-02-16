let adicionar = document.getElementById("adicionar");
let sacar = document.getElementById("sacar");
let mostrar = document.getElementById("Mostrar");
let historico = document.getElementById("historico");

let saldo = JSON.parse(localStorage.getItem("saldo")) || 0;

let historicoLista = JSON.parse(localStorage.getItem("historico")) || [];
mostrar.innerHTML = "Seu saldo atual é: R$ " + saldo;


historicoLista.forEach(item => {
    historico.innerHTML += `<p>${item}</p>`;
});

function adicionarSaldo(){
    let valor = Number(adicionar.value);

    if(valor > 0 && !isNaN(valor)){
        saldo += valor;
        mostrar.innerHTML = "Seu saldo atual é: R$"+ saldo;
        adicionar.value = "";

       let mensagem = `Você adicionou na sua conta: R$ ${valor}`;
        historicoLista.push(mensagem);
        historico.innerHTML += `<p>${mensagem}</p>`;
    
       localStorage.setItem("saldo", JSON.stringify(saldo));
        localStorage.setItem("historico", JSON.stringify(historicoLista));
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

     let mensagem = `Você sacou da sua conta: R$ ${retirar}`;
        historicoLista.push(mensagem);
        historico.innerHTML += `<p>${mensagem}</p>`;

      localStorage.setItem("saldo", JSON.stringify(saldo));
      localStorage.setItem("historico", JSON.stringify(historicoLista));
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


