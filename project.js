
let valueArray = JSON.parse(localStorage.getItem('arraySalvo')) || []
let myInputValues = JSON.parse(localStorage.getItem('valorDosInputs')) || [];
let result = JSON.parse(localStorage.getItem('resultados')) || 0;
let createPositiveOrNegativeResult;
console.log(valueArray)
console.log(result)
let valueCampMask = document.getElementById('merchandiseValue');
function valueInputRestrict(eventoDown) {
    if (
        '0123456789'.indexOf(eventoDown.key) == -1 &&
        eventoDown.key != 'Backspace' &&
        eventoDown.key != 'Alt' &&
        eventoDown.key != 'Ctrl'
    ) {
        eventoDown.preventDefault();
    }
    console.log(eventoDown)

}


function valueMask(eventoUp) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",

    });
    let valueMask = eventoUp.target.value;
    valueMask = valueMask.replaceAll('.', '').replace(',', '').replaceAll('R$', '');
    valueMask = valueMask.replace(/([0-9]{2})$/gi, '.$1');
    valueMask = parseFloat(valueMask);
    eventoUp.target.value = formatter.format(valueMask).replaceAll('R$', '');
}

const formatter = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL",

});

function myFormValues(e) {
    e.preventDefault();
    let selecaoCompraOuVenda = document.getElementById('selectCampStyle').value;
    let nomeDaMercadoria = document.getElementById('inputMerchandiseNameStyle').value;
    let valorDaMercadoria = document.getElementById('inputMerchandiseValueStyle').value;

    valueArray.push(valorDaMercadoria);
    localStorage.setItem('arraySalvo', JSON.stringify(valueArray))

    myInputValues.push({ selecaoCompraOuVenda, nomeDaMercadoria, valorDaMercadoria });
    localStorage.setItem('valorDosInputs', JSON.stringify(myInputValues));

    let trCreate = document.createElement('tr');
    trCreate.className = 'trCreateDinamicStyle'
    let tdCreateOne = trCreate.appendChild(document.createElement('td'));
    tdCreateOne.className = 'tdCreateOneStyle'
    let tdCreateTwo = trCreate.appendChild(document.createElement('td'));
    tdCreateTwo.className = 'tdCreateTwoStyle'
    let tdCreateThree = trCreate.appendChild(document.createElement('td'));
    tdCreateThree.className = 'tdCreateThreeStyle'
    tdCreateOne.innerHTML = selecaoCompraOuVenda;
    tdCreateTwo.innerHTML = nomeDaMercadoria;
    tdCreateThree.innerHTML = `R$ ${valorDaMercadoria}`;
    document.getElementById('tableBodyStyle').appendChild(trCreate);

    let valueArrayLastNumber = valueArray[valueArray.length - 1];
    if (selecaoCompraOuVenda == "+") {
        result = result + parseFloat(valueArrayLastNumber.replaceAll('.', '').replace(',', '.'));

        localStorage.setItem('resultados', (result));
    };
    if (selecaoCompraOuVenda == "-") {
        result = result - parseFloat(valueArrayLastNumber.replaceAll('.', '').replace(',', '.'));

        localStorage.setItem('resultados', (result));
    };
    document.getElementById('dynamicTotalStyle').innerHTML = formatter.format(result);

    let positiveAndNegativeId = document.getElementById("positiveAndNegativeResultsId");
    if (!positiveAndNegativeId) {
        createPositiveOrNegativeResult = document.createElement('p');
        document.getElementById('tableRowTotalResultStyle').appendChild(createPositiveOrNegativeResult);
        createPositiveOrNegativeResult.setAttribute("id", "positiveAndNegativeResultsId");
        /* acima criei uma condição que serve pra criar um elemento html, porem esse elemento
        so vai ser criado uma vez, independente de quantas vezes a função rodar (ele so vai ser criado
        uma vez porque depois que ele for criado ele vai ter um id, e quando nosso id estiver
        criado nosso if vai detect-lo, dessa forma ele nao vai mais criar o elemento... caso
        isso nao fosse feito, toda vez que a função rodasse o elemento html seria criado novamente.*/
    };
    if (result == 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "";
    };
    if (result > 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "[LUCRO]";
    };
    if (result < 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "[PREJUIZO]";
    };
    let clearText = document.getElementById('clearStorageTextStyle')
    let tableBodyId = document.getElementById('tableBodyStyle')
    { result ? clearText.remove() : tableBodyId.innerHTML = `<tr id = 'clearStorageTextStyle'> <td>ADICIONE ALGUMA TRANSAÇÃO</td> </tr>` }
};
