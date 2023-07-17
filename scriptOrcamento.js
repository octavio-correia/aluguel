const form = document.querySelector("#form")
const nome = document.querySelector("#inputNome")
const profissao = document.querySelector("#inputProfissao")
const contato = document.querySelector("#inputTelefone")
const email = document.querySelector("#inputEmail")
const nave = document.querySelector("#selectNave")


function show(){
    alert(`Olá ${nome.value}, ${profissao.value}. A nave selcionada foi ${nave.value}. Seja feliz com ela. Entrarei em contato no número ${contato.value} ou através do ${email.value}`)
}