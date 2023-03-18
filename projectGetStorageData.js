function loadScreenGetStorage() {
    myInputValues.map((inputValuesUnit) => {
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
        console.log(inputValuesUnit.valorDaMercadoria, "inpuuuuuuts")
    })
   /*  let positiveValue = "[LUCRO]";
    let negativeValue = "[PREJUIZO]";
    let valueUndefined = ""; */

    document.getElementById('dynamicTotalStyle').innerHTML = `R$ ${result}`;
/* 
    let positiveAndNegativeId = document.getElementById("positiveAndNegativeResultsId");
    if (!positiveAndNegativeId) {
        let = createPositiveOrNegativeResult = document.createElement('p');
        document.getElementById('dynamicTotalStyle').appendChild(createPositiveOrNegativeResult);
        createPositiveOrNegativeResult.setAttribute("id", "positiveAndNegativeResultsId");

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

    /*   if (result > 0) {
          document.getElementById('positiveAndNegativeResultsId').innerHTML = positiveValue;
  
      }
      if(result < 0){
          document.getElementById('positiveAndNegativeResultsId').innerHTML = negativeValue;
      }
  */

}