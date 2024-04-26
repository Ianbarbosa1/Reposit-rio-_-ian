let nome = prompt("Digite seu nome: ");

let frase = [ 
    `Olá ${nome}, seja bem vindo ao meu humilde portifólio`,
    'Olá, seja bem vindo ao meu humilde portifólio'
];


if (nome === "" || nome === null) {
    document.querySelector('.frase').innerHTML = frase [1]
    }  
    else{
        document.querySelector('.frase').innerHTML = frase[0]
}


/*ABERTURA DOS MODAIS */
function abrir_curriculo(){
    const modal = document.getElementById('curriculo');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'curriculo'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
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

function abrir_sobreprojetos(){
    const modal = document.getElementById('sobre-p');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'sobre-p'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}
document.querySelector('.descricao-sobre-m').innerHTML = `Olá, eu sou Ian da Costa Barbosa, tenho 19 anos de idade atualmente e tenho o desejo e a vontade de me tornar um programador. No momento meus estudos, praticas e aprendizados estão focados nas linguagens voltadas para área frontend, são elas: <b> <br> HTML, CSS e JavaScript. </b>`
