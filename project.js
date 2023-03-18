
let valueArray = JSON.parse(localStorage.getItem('arraySalvo')) || []
let myInputValues = JSON.parse(localStorage.getItem('valorDosInputs')) || [];
let result = JSON.parse(localStorage.getItem('resultados')) || 0;
let createPositiveOrNegativeResult;

function myFormValues(e) {
    e.preventDefault();
    let numbersVerify = /[^0-9]+/g
    let stringsVerify = /[^a-zA-Z]+/g
    if (stringsVerify.test(e.target.elements["inputMerchandiseNameStyle"].value)) {
        console.log("peguei o erro string")
        alert("Somente letras são aceitas no campo de mercadoria!")
        return false
    }
    if (numbersVerify.test(e.target.elements["inputMerchandiseValueStyle"].value)) {
        console.log("peguei o erro")
        alert("Somente números são aceitos no campo de valor!")
        return false
    }

    let seleçãoCompraOuVenda = document.getElementById('selectCampStyle').value;
    let nomeDaMercadoria = document.getElementById('inputMerchandiseNameStyle').value;
    let valorDaMercadoria = document.getElementById('inputMerchandiseValueStyle').value;

    valueArray.push(valorDaMercadoria);
    localStorage.setItem('arraySalvo', JSON.stringify(valueArray))

    myInputValues.push({ seleção: seleçãoCompraOuVenda, nomeDaMercadoria, valorDaMercadoria });
    localStorage.setItem('valorDosInputs', JSON.stringify(myInputValues));

    let trCreate = document.createElement('tr');
    trCreate.className = 'trCreateDinamicStyle'
    let tdCreateOne = trCreate.appendChild(document.createElement('td'));
    tdCreateOne.className = 'tdCreateOneStyle'
    let tdCreateTwo = trCreate.appendChild(document.createElement('td'));
    tdCreateTwo.className = 'tdCreateTwoStyle'
    let tdCreateThree = trCreate.appendChild(document.createElement('td'));
    tdCreateThree.className = 'tdCreateThreeStyle'
    tdCreateOne.innerHTML = seleçãoCompraOuVenda;
    tdCreateTwo.innerHTML = nomeDaMercadoria;
    tdCreateThree.innerHTML = valorDaMercadoria;
    document.getElementById('tableBodyStyle').appendChild(trCreate);

    let valueArrayLastNumber = valueArray[valueArray.length - 1];
    if(seleçãoCompraOuVenda == "+") {
        result = result + parseInt(valueArrayLastNumber);
        document.getElementById('dynamicTotalStyle').innerHTML = `R$ ${result}`;
        localStorage.setItem('resultados', (result));
    };
    if(seleçãoCompraOuVenda == "-") {
        result = result - parseInt(valueArrayLastNumber);
        document.getElementById('dynamicTotalStyle').innerHTML = `R$ ${result}`;
        localStorage.setItem('resultados', (result));
    };

    let positiveAndNegativeId = document.getElementById("positiveAndNegativeResultsId");
    if(!positiveAndNegativeId){
        createPositiveOrNegativeResult = document.createElement('p');
        document.getElementById('tableRowTotalResultStyle').appendChild(createPositiveOrNegativeResult);
        createPositiveOrNegativeResult.setAttribute("id", "positiveAndNegativeResultsId");
        /* acima criei uma condição que serve pra criar um elemento html, porem esse elemento
        so vai ser criado uma vez, independente de quantas vezes a função rodar (ele so vai ser criado
        uma vez porque depois que ele for criado ele vai ter um id, e quando nosso id estiver
        criado nosso if vai detect-lo, dessa forma ele nao vai mais criar o elemento... caso
        isso nao fosse feito, toda vez que a função rodasse o elemento html seria criado novamente.*/
    };
    if(result == 0){
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "";
    };
    if(result > 0){
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "[LUCRO]";
    };
    if(result < 0){
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "[PREJUIZO]";
    };
};