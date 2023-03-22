
function loadScreenGetStorage() {
    let loadGetStorage = document.getElementById('tableBodyStyle');
    myInputValues.map((inputValuesUnit) => {
        var trCreate = document.createElement('tr');
        trCreate.className = 'trCreateDinamicStyle'
        trCreate.innerHTML = `
            <td class = "tdCreateOneStyle">${inputValuesUnit.selecaoCompraOuVenda}</td>
            <td class = "tdCreateTwoStyle">${inputValuesUnit.nomeDaMercadoria}</td>
            <td class= "tdCreateThreeStyle"> R$ ${inputValuesUnit.valorDaMercadoria}</td>
        ` 
        loadGetStorage.appendChild(trCreate)
        
        /* let createTableStorageLoadOne = trCreate.appendChild(document.createElement('td'))
        createTableStorageLoadOne.className = "tdCreateOneStyle"
        let createTableStorageLoadTwo = trCreate.appendChild(document.createElement('td'))
        createTableStorageLoadTwo.className = "tdCreateTwoStyle"
        let createTableStorageLoadThree = trCreate.appendChild(document.createElement('td'))
        createTableStorageLoadThree.className = "tdCreateThreeStyle"
 */
/* 
       
        createTableStorageLoadOne.innerHTML = 
        createTableStorageLoadTwo.innerHTML = 
        createTableStorageLoadThree.innerHTML =
        console.log(inputValuesUnit.valorDaMercadoria, "inpuuuuuuts") */
        
    document.getElementById('dynamicTotalStyle').innerHTML = formatter.format(result);
    })
   /*  let positiveValue = "[LUCRO]";
    let negativeValue = "[PREJUIZO]";
    let valueUndefined = ""; */


    let positiveAndNegativeId = document.getElementById("positiveAndNegativeResultsId");
    if (!positiveAndNegativeId) {
        let = createPositiveOrNegativeResult = document.createElement('p');
        document.getElementById('dynamicTotalStyle').appendChild(createPositiveOrNegativeResult);
        createPositiveOrNegativeResult.setAttribute("id", "positiveAndNegativeResultsId");

    }  

    
   if (result == 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "";

    }
    if (result > 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "[LUCRO]";

    }
    if (result < 0) {
        document.getElementById('positiveAndNegativeResultsId').innerHTML = "[PREJUÍZO]";

    } 
    let clearText = document.getElementById('clearStorageTextStyle')
    let tableBodyId = document.getElementById('tableBodyStyle')
    {result ? clearText.remove():tableBodyId.innerHTML =`<tr id = 'clearStorageTextStyle'> <td>ADICIONE ALGUMA TRANSAÇÃO</td> </tr>`}


}
function deleteAllStorageData(){
    localStorage.clear();
    let tableBodyId = document.getElementById('tableBodyStyle')
    tableBodyId.innerHTML =`<tr id = 'clearStorageTextStyle'> <td>ADICIONE ALGUMA TRANSAÇÃO</td> </tr>`
    document.getElementById('dynamicTotalStyle').innerHTML = "NENHUM VALOR";
    document.getElementById('positiveAndNegativeResultsId').innerHTML = "";
}