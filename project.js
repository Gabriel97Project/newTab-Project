console.log("hello guys");
var dadosDoLocalStorageVazio = localStorage.getItem('dadosDoLocalStorage');//poderia ser passado qualquer valor noget item, passei mesmo nome da variavel atoa
if (dadosDoLocalStorageVazio != null) {
    var dadosDoLocalStorage = JSON.parse('dadosDoLocalStorageVazio');
} else {
    var dadosDoLocalStorage = [];
};

var valueArray = [];
/* let valueArrayLastNumber = valueArray.splice(-1) */

let result = 0;


//*****************************************
/* a ARRAY DEVE ESTAR FORA DA FUNÇÃO PARA ARMAZENAR OS DADOS TODA VEZ QUE
A FUNÇÃO FOR CHAMADA, SE COLOCAR O ARRAY DENTRO DA FUNÇÃO, OS VALORES NÃO SERÃO
SALVOS, ELES SERÃO ATUALIZADOS AO INVES DE SALVAR */
function myFormValues(e) {
    e.preventDefault();
    /*    let dadosDoUsuario = [{
           seleçãoCompraOuVenda: seleçãoCompraOuVenda.value,
           nomeDaMercadoria: nomeDaMercadoria.value,
           valorDaMercadoria: valorDaMercadoria.value
   
       }];
       console.log(dadosDoUsuario); */

    /* prevent default é uma função padrao que pode ser passada para um event
    que previne que a ação prossiga, ou seja, por exemplo, impede que nosso 
    formulario termine de realizar um submit */
    /* console.log(e); */

    var seleçãoCompraOuVenda = document.getElementById('selectCampStyle').value;
    var nomeDaMercadoria = document.getElementById('inputMerchandiseNameStyle').value;
    var valorDaMercadoria = document.getElementById('inputMerchandiseValueStyle').value;
    /*    var tbodyDivSepare = document.getElementById('tableBodyDivStyle'); */

    /*    console.log(nomeDaMercadoria,valorDaMercadoria); */

    /*    var valueArray = []; */
    /*   var arrayDosValores = valorDaMercadoria;//essa variavel vai rece */
    valueArray.push(valorDaMercadoria);
    console.log(valueArray);

    /* var divCreate =document.createElement('div') */
    var trCreate = document.createElement('tr');
    trCreate.className = 'trCreateDinamicStyle'


    var tdCreateOne = trCreate.appendChild(document.createElement('td'));
    tdCreateOne.className = 'tdCreateOneStyle'
    var tdCreateTwo = trCreate.appendChild(document.createElement('td'));
    tdCreateTwo.className = 'tdCreateTwoStyle'
    var tdCreateThree = trCreate.appendChild(document.createElement('td'));
    tdCreateThree.className = 'tdCreateThreeStyle'
    /* 
        tbodyDivSepare.appendChild(tdCreateOne);
        tbodyDivSepare.appendChild(tdCreateTwo);
     */
    tdCreateOne.innerHTML = seleçãoCompraOuVenda;
    tdCreateTwo.innerHTML = nomeDaMercadoria;
    tdCreateThree.innerHTML = valorDaMercadoria;

    //document.getElementById('extractTransitionTableStyle').appendChild(trCreate);
    document.getElementById('tableBodyStyle').appendChild(trCreate);
    console.log(seleçãoCompraOuVenda);

    /*  var resultDataRefresh = result; */
    /*  function ResultElementCreate () { */
    // var finalResultCreate = document.createElement('p');
    // /*  var totalValueCreat = finalResult.appendChild(document.createElement('p'));  */
    // finalResultCreate.innerHTML = result;

    // document.getElementById('tableRowTotalStyle').appendChild(finalResultCreate);
    // finalResultCreate.className = "finalResult";
    let finalResultCreate; //variavel vazio vai ser preenchida qndo for criado o novo elemento
    var getingResultId = document.getElementById('finalResult');
    // }/* 

    /* const currentResult = result */

    /* if (result) {
       return [resultRefresh.length -1]; */

    if (!getingResultId) {
        finalResultCreate = document.createElement('p');
        /*  var totalValueCreat = finalResult.appendChild(document.createElement('p'));  */
        document.getElementById('tableRowTotalStyle').appendChild(finalResultCreate);
        finalResultCreate.className = "finalResult";
        finalResultIdCreate = document.getElementsByClassName("finalResult")[0].setAttribute("id", "finalResult");

        // }/* 
    }

    let valueArrayLastNumber = valueArray[valueArray.length - 1];
    /* if(valueArrayLastNumber.length < 0){
        document.getElementById('finalResult').innerHTML = valueArrayLastNumber;
    }if(seleçãoCompraOuVenda == "+"){
        document.getElementById('finalResult').innerHTML = result + parseInt(valueArrayLastNumber);
    }
    if(seleçãoCompraOuVenda == "-"){
        document.getElementById('finalResult').innerHTML = result - parseInt(valueArrayLastNumber);
    } */
    /* let result = 0; */

    /* resultNegative = valorDaMercadoria - parseInt(valueArray[i]); */
    /* os valores que estao sendo armazenados na nossa array sao armazenados como
    string, precisamos passar o parseInt para converter nossos dados da array em numeros
    ou seja, parseInt vai transformar nossos numeros que estao em formato de string
    em numeros, dessa forma, vamos conseguir fazer a soma e subtração dos valores
    que estão dentro da array */
    /* l et resultPositive = 0; */
    /*  console.log('valor foi somado', seleçãoCompraOuVenda) */
    /*  console.log(somaDeValores) */

    /*  for (let i = 0; i < valueArray.length; i++) { */
    //let valueArrayLastNumber = valueArray[valueArray.length - 1]; 
    let positiveValue = "[LUCRO]";
    let negativeValue = "[PREJUIZO]";
    let valueUndefined = "[SEM VALOR DEFINIDO]";

    let createPositiveOrNegativeResult;
    let positiveAndNegativeId = document.getElementById("positiveAndNegativeResultsId");
    /* result > 0 ? document.getElementById('finalResult').insertAdjacentText("afterend", positiveValue): document.getElementById('finalResult').insertAdjacentText("afterend", negativeValue)
    */
    if (seleçãoCompraOuVenda == "+") {


        result = result + parseInt(valueArrayLastNumber);
        document.getElementById('finalResult').innerHTML = result;
        /* console.log(total) */
    }
    if (seleçãoCompraOuVenda == "-") {
        /*  console.log('valor subtraido', seleçãoCompraOuVenda) */
        /*  console.log(subtraçãoDeValores) */
        result = result - parseInt(valueArrayLastNumber);
        document.getElementById('finalResult').innerHTML = result;
    }
    if (!positiveAndNegativeId) {
        createPositiveOrNegativeResult = document.createElement('p');
        document.getElementById('tableRowTotalStyle').appendChild(createPositiveOrNegativeResult);
        createPositiveOrNegativeResult.className = "positiveAndNegativeResults";
        document.getElementsByClassName("positiveAndNegativeResults")[0].setAttribute("id", "positiveAndNegativeResultsId");
            /* acima criei uma condição que serve pra criar um elemento html, porem esse elemento
            so vai ser criado uma vez, independente de quantas vezes a função rodar (ele so vai ser criado
            uma vez porque depois que ele for criado ele vai ter um id, e quando nosso id estiver
            criado nosso if vai detect-lo, dessa forma ele nao vai mais criar o elemento... caso
            isso nao fosse feito, toda vez que a função rodasse o elemento html seria criado novamente.*/
    }
    if (result == 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = valueUndefined;
    }
    if (result > 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = positiveValue;
    }
    if (result < 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = negativeValue;
    }
    console.log("result", result);

    /*   console.log("result", resultNegative);
      console.log("valor final",totalResulValue) */
    /*   console.log(total) */
    /* } */

};

