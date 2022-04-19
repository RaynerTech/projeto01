 //Modifiquei o meu projeto pois perdi algumas aulas e não tinha prestado realmente anteção
 //no verdadeiro objetivo do projeto antes usei numeros inteiros para responder no prompt
 //acredito que agora estou seguindo o caminho correto do projeto....


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

  

    let result = 0;

    pag1 = "O Heroi conseguiu tira a espada da pedra ? Sim ou Não: "
    pag2 = "O heroi esta com a espada magica ? Sim ou Não: "
    pag3 = "O Heroi encontrou o dragão que vem aterrorizando SKYRIM? Sim ou Não: "
    pag4 = "O heroi conseguiu disferir a espada magica no Dragão ? Sim ou Não: "
    pag5 = "O Heroi usou o poder magico para aprisionar o Dragão? Sim ou Não: "
    let list = [pag1, pag2, pag3, pag4, pag5];
    let lista = [];
    

    console.log('LOADING...')
    await sleep(4000);
    console.log(pag1)
    console.log('-------------------------------------')
    await sleep(3000);
    console.log(pag2)
    console.log('-------------------------------------')
    await sleep(3000);
    console.log(pag3)
    console.log('-------------------------------------')
    await sleep(3000);
    console.log(pag4)
    console.log('-------------------------------------')
    await sleep(3000);
    console.log(pag5)
    console.log('-------------------------------------')
    await sleep(3000);

    for (let i = 0; i <= 4; i++) {
        console.log([i]);
        console.log();
        let lista = prompt("Digite sua resposta: ").toUpperCase();
        
        
        console.log();
       
        if (lista == "SIM") {
          result += 1;
          console.log();
          
        } else if (lista == "NAO") {
          result = result;
          console.log();
         
        } else {
          console.log("Resposta inválida, por favor digite novamente: ");
          console.log();
          i -= 1;
        }
      }
      
      if (result == 5) {
        console.log(
          "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
        );
      } else if (result == 4) {
        console.log(
          "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
        );
      } else if (result == 3) {
        console.log(
          "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
        );
      } else if (result == 2 || result == 1) {
        console.log("Você falha, mas ainda consegue fugir da situação.");
      } else {
        console.log("Você falha miseravelmente.");
      }
    
}

main();
