let lista = []

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value
    let listaAmigos = document.getElementById('lista-amigos')
    if (listaAmigos.textContent.includes(nomeAmigo)){
        alert('Nome já incluido no sorteio, por favor digite um nome diferente.')
        document.getElementById('nome-amigo').value = ''
        return
    } else if(nomeAmigo == ''){
        alert('Por favor digite um nome.')
        return
    }
    
    document.getElementById('nome-amigo').value = ''
    //Deixando nome em amigo incluidos mais bonito
    if (lista.length == 0){
        listaAmigos.textContent = nomeAmigo
    } else {
    listaAmigos.textContent += `, ${nomeAmigo}`   
    }
  
    return lista.push(nomeAmigo)
}

function sortear(){
    if(lista.length < 2){
        alert('Número de participantes insuficiente')
        return;
    }else{
        let Sorteio = document.getElementById('lista-sorteio')
        embaralha(lista)
        for(let i = 0; i < lista.length; i++){
            if(i == lista.length - 1){
                Sorteio.innerHTML += lista[i] + ' --> ' + lista[0] + '<br>'
            }else{
                Sorteio.innerHTML += lista[i] + ' --> ' + lista[i + 1] + '<br>'
            }
            
        }
    }
   

}

function reiniciar(){
    lista = []  
    document.getElementById('lista-amigos').textContent = ''
    document.getElementById('lista-sorteio').textContent = ''

}
function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}