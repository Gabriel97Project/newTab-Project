
function loadScreenGetStorage() {
    let loadGetStorage = document.getElementById('tableBodyStyle');
    myInputValues.map((inputValuesUnit) => {
        var trCreate = document.createElement('tr');
        trCreate.className = 'trCreateDinamicStyle'
        trCreate.innerHTML = `
            <td class = "tdCreateOneStyle">${inputValuesUnit.selecaoCompraOuVenda}</td>
            <td class = "tdCreateTwoStyle">${inputValuesUnit.nomeDaMercadoria}</td>
            <td class= "tdCreateThreeStyle">${inputValuesUnit.valorDaMercadoria}</td>
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
    })
   /*  let positiveValue = "[LUCRO]";
    let negativeValue = "[PREJUIZO]";
    let valueUndefined = ""; */

    document.getElementById('dynamicTotalStyle').innerHTML = formatter.format(result);

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


}
function deleteAllStorageData(){
    localStorage.clear()
}