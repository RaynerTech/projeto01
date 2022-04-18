 
let  prompt = require('prompt-sync')();
console.log('=== As Cronicas da espada de Fogo ===')
let enter = []



function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
    console.log('LOADING....');
    await sleep(5000);
    let enter = prompt('QUER CONTIMUAR [SIM] OU [NÃO] : ').toLowerCase();
    if(enter == 'sim'){ 
        console.log('Agora vc conhecerá uma grande Historia baseda em fatos reias')
        console.log('Que a força estaja com você............')
        await sleep(6000);
    }else if(enter == 'nao'){
        return main()
    }

    pag1 = parseInt(prompt("O Heroi conseguiu tira a espada da pedra ? 1/Sim ou 0/Não: "))
    pag2 = parseInt(prompt("O heroi esta com a espada magica ? 1/Sim ou 0/Não: "))
    pag3 = parseInt(prompt("O Heroi encontrou o dragão que vem aterrorizando SKYRIM? 1/Sim ou 0/Não: "))
    pag4 = parseInt(prompt("O heroi conseguiu disferir a espada magica no Dragão ? 1/Sim ou 0/Não: "))
    pag5 = parseInt(prompt("O Heroi usou o poder pagico para aprisionar o Dragão? 1/Sim ou 0/Não: "))
    console.log('LOADING...')
    await sleep(4000);
    soma_respostas = pag1 + pag2 + pag3 + pag4 + pag5
    if ( soma_respostas  == 5){
        console.log()
        console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.")
    }
        
    else 
        if (soma_respostas == 4){
        console.log()
        console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.")
    }
        
    else 
        if (3 <= soma_respostas == 3){
            console.log()
            console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.")
    }
        
    else 
        if (soma_respostas <= 2 && soma_respostas >= 1){
            console.log()
            console.log("você falha, mas ainda consegue fugir da situação.")
    }
    else{
        console.log()
        console.log('Você falha miseravelmente.')
    }
        

    
    
}

main();
