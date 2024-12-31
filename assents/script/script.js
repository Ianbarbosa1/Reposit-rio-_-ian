let nome = prompt("Digite seu nome: ")
let hrs = new Date().getHours()


let frase = [ 
    `Bom dia ${nome}, seja bem vindo ao meu portfólio`,
    'Bom dia, seja bem vindo ao meu portfólio',

    `Boa tarde ${nome}, seja bem vindo ao meu portfólio`,
    'Boa tarde, seja bem vindo ao meu portfólio',

    `Boa noite ${nome}, seja bem vindo ao meu portfólio`,
    'Boa noite, seja bem vindo ao meu portfólio',
];


if (nome === "" || nome === null) {
    if (hrs >= 5 && hrs <= 12){
        document.querySelector('.frase').innerHTML = frase[1]
    }
    else if(hrs >= 13 && hrs <= 18 ){
        document.querySelector('.frase').innerHTML = frase[3]
    }
    else if(hrs >= 19 && hrs <= 23){
        document.querySelector('.frase').innerHTML = frase[5]
    }
    else if(hrs >= 1 && hrs <= 4){
        document.querySelector('.frase').innerHTML = frase[5]
    }
} 
    else{
        if (hrs >= 5 && hrs <= 12){
            document.querySelector('.frase').innerHTML = frase[0]
        }
        else if(hrs >= 13 && hrs <= 18 ){
            document.querySelector('.frase').innerHTML = frase[2]
        }
        else if(hrs >= 19 && hrs <= 23){
            document.querySelector('.frase').innerHTML = frase[4]
        }
        else if(hrs >= 1 && hrs <= 4){
            document.querySelector('.frase').innerHTML = frase[4]
        }
}


function abrir_sobremim(){
    const modal = document.getElementById('sobre-m');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'sobre-m'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}
