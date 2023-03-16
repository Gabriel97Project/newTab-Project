console.log("hello guys");


var valueArray = JSON.parse(localStorage.getItem('arraySalvo')) || [];

let myInputValues = JSON.parse(localStorage.getItem('valorDosInputs')) || [];
/* console.log(myInputValues); */
/* let locais; */
/* let myArrayLocalStorage = JSON.stringify(valueArray); */

/* let valueArrayLastNumber = valueArray.splice(-1) */

let result = JSON.parse(localStorage.getItem('resultados')) || 0;

/* 
    tbodyDivSepare.appendChild(tdCreateOne);
    tbodyDivSepare.appendChild(tdCreateTwo);


function loadScreenGetStorage() {

    if (localStorage.getItem('valorDosInputs')) {
       
        var myInputValues = localStorage.getItem('valorDosInputs');//poderia ser passado qualquer valor noget item, passei mesmo nome da variavel atoa
        if (myInputValues != null) {
            loadGetStorage.innerHTML = myInputValues = JSON.parse(myInputValues)
        } else {
            var myInputValues = [];
        };
        console.log(myInputValues);
    }
}

//*****************************************
/* a ARRAY DEVE ESTAR FORA DA FUNÇÃO PARA ARMAZENAR OS DADOS TODA VEZ QUE
A FUNÇÃO FOR CHAMADA, SE COLOCAR O ARRAY DENTRO DA FUNÇÃO, OS VALORES NÃO SERÃO
SALVOS, ELES SERÃO ATUALIZADOS AO INVES DE SALVAR */
/* var dadosDoLocalStorageVazio = localStorage.getItem('valorDosInputs');//poderia ser passado qualquer valor noget item, passei mesmo nome da variavel atoa
if (dadosDoLocalStorageVazio != null) {
    let myInputValues = JSON.parse(localStorage.getItem('valorDosInputs'))
} else {
    var m = [];
}; */


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
    console.log('valor adicionado na valueArray', valueArray);
    localStorage.setItem('arraySalvo', JSON.stringify(valueArray))

    myInputValues.push({ seleção: seleçãoCompraOuVenda, nomeDaMercadoria, valorDaMercadoria });
    localStorage.setItem('valorDosInputs', JSON.stringify(myInputValues));

    console.log(e.target.elements["transationType"].value, "zzzzzzzzzzzzzzzz")

    console.log("array dos inputs", myInputValues)
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



    /* else{
        return function getingStorageData(){
            localStorage.setItem("salvandoValores",JSON.stringify(myInputValues));
            localStorage.getItem("salvandoValores");
            window.localStorage.parse(localStorage.getItem("salvandoValores"))
            console.log("meu loooocal")
        }
    } */
    /*  var localStorageHTML = JSON.parse(localStorage.getItem("arraySalvo")) */

    /*     localStorage.setItem("createTableTd", tdCreateThree);
        document.getElementsByClassName("tableBodyStyle").innerHTML = localStorageHTML; */
    //document.getElementById('extractTransitionTableStyle').appendChild(trCreate);
    document.getElementById('tableBodyStyle').appendChild(trCreate);
    /*  console.log(seleçãoCompraOuVenda); */

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
    let realSignal = "R$";
    if (!getingResultId) {
        finalResultCreate = document.createElement('p');
        /*  var totalValueCreat = finalResult.appendChild(document.createElement('p'));  */
        document.getElementById('tableRowTotalStyle').appendChild(finalResultCreate);
        finalResultCreate.className = "finalResultClass";
        finalResultIdCreate = document.getElementsByClassName("finalResultClass")[0].setAttribute("id", "finalResult");
        document.getElementById('finalResult').insertAdjacentText("afterbegin", realSignal)
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
    let valueUndefined = "";

    let createPositiveOrNegativeResult;
    let positiveAndNegativeId = document.getElementById("positiveAndNegativeResultsId");
    /* result > 0 ? document.getElementById('finalResult').insertAdjacentText("afterend", positiveValue): document.getElementById('finalResult').insertAdjacentText("afterend", negativeValue)
    */
    /*  locais = localStorage.getItem("resultados"); */
    /* console.log(locais); */
    /* var parseLocais = JSON.parse(locais) */
    if (seleçãoCompraOuVenda == "+") {


        result = result + parseInt(valueArrayLastNumber);
        document.getElementById('finalResult').innerHTML = result;
        /* console.log(total) */
        localStorage.setItem('resultados', (result));
    }
    if (seleçãoCompraOuVenda == "-") {
        /*  console.log('valor subtraido', seleçãoCompraOuVenda) */
        /*  console.log(subtraçãoDeValores) */
        result = result - parseInt(valueArrayLastNumber);
        /* document.getElementById('finalResult').innerHTML = result; */
        /*     localStorage.setItem("resultados", (result)); */
        /*   var locais = localStorage.getItem("resultados");
          console.log(locais);
          var parseLocais = localStorage.parse(locais) */
        document.getElementById('finalResult').innerHTML = result;
        localStorage.setItem('resultados', (result));

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
    /*  if(result){
            document.getElementById("dynamicTotalStyle").remove();
        } */
    let deleteElementText = document.getElementById("dynamicTotalStyle");
    { deleteElementText ? document.getElementById("dynamicTotalStyle").remove() : console.log("deletado") }
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
/* if (localStorage) {
    // LocalStorage is supported!
    console.log(" tem local storage")
  } else {
    // No support. Use a fallback such as browser cookies or store on the server.
    console.log(" nao tem local storage")
  }
 */
let loadGetStorage = document.getElementById('tableBodyStyle')

function loadScreenGetStorage() {
    myInputValues.map((inputValuesUnit)=>{
        var trCreate = document.createElement('tr');
        trCreate.className = 'trCreateDinamicStyle'
        let createTableStorageLoadOne = trCreate.appendChild(document.createElement('td'))
        createTableStorageLoadOne.className = "tdCreateOneStyle" 
        let createTableStorageLoadTwo = trCreate.appendChild(document.createElement('td')) 
        createTableStorageLoadTwo.className = "tdCreateTwoStyle" 
        let createTableStorageLoadThree = trCreate.appendChild(document.createElement('td'))    
        createTableStorageLoadThree.className = "tdCreateThreeStyle"  


        loadGetStorage.appendChild(trCreate)
        createTableStorageLoadOne.innerHTML = inputValuesUnit.seleção;
        createTableStorageLoadTwo.innerHTML = inputValuesUnit.nomeDaMercadoria;
        createTableStorageLoadThree.innerHTML = inputValuesUnit.valorDaMercadoria;
        console.log(inputValuesUnit.valorDaMercadoria,"inpuuuuuuts")
    })
}

  

