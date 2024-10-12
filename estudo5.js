//colocar função como parâmetro funciona também no JavaScript, assim como no Python Também
function exibirmensagem(func){
    return func()
}

function message(){
    console.log('Olá ! Estou exibindo esta mensagem diretamente da function message ')
}

exibirmensagem(message) //coloquei a função message como argumento no qual dentro da função exibir mensagem vai ativar ela.