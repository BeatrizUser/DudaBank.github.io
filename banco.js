var cliente = {
    nome: 'Beatriz Machado',
    login: 'bia123',
    senha: '123',
    conta: '0001-1',
    agencia: '001',
    saldo: 123.22
}

var sacar_valor = (valor)=>{
    cliente.saldo = cliente.saldo - valor
}
var depositar_valor = (valor)=>{
    cliente.saldo = cliente.saldo + valor
}
var transferir_valor = ()=>{}
var consultar_saldo = ()=>{
    console.log('Saldo: ' + cliente.saldo)
}
var consultar_cliente = ()=>{
    console.log('-----Dados Pessoais-----')
    console.log('Cliente: ' + cliente.nome)
    console.log('Conta: ' + cliente.conta)
    console.log('Agência: ' + cliente.agencia)
    console.log('-----Dados de Acesso-----')
    console.log('Login: ' + cliente.login)
    console.log('Senha: ' + cliente.senha)
    console.log('----------Saldo----------')
    console.log('Total: R$' + cliente.saldo)
}