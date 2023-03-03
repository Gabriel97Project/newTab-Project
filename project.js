console.log("hello guys");
var dadosDoLocalStorageVazio = localStorage.getItem('dadosDoLocalStorage');//poderia ser passado qualquer valor noget item, passei mesmo nome da variavel atoa
if(dadosDoLocalStorageVazio != null){
    var dadosDoLocalStorage = JSON.parse('dadosDoLocalStorageVazio');
}else{
    var dadosDoLocalStorage = [];
};


function myFormValues(e){
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
    console.log(e);
    
    var seleçãoCompraOuVenda = document.getElementById('selectCampStyle').value;
    var nomeDaMercadoria = document.getElementById('inputMerchandiseNameStyle').value;
    var valorDaMercadoria = document.getElementById('inputMerchandiseValueStyle').value;
    console.log(nomeDaMercadoria,valorDaMercadoria);

    var divCreate =document.createElement('div')
    var trCreate = divCreate.appendChild(document.createElement('tr'));

    var tdCreateOne = trCreate.appendChild(document.createElement('td'));
    var tdCreateTwo = trCreate.appendChild(document.createElement('td'));
    var tdCreateThree = trCreate.appendChild(document.createElement('td'));

    tdCreateOne.innerHTML = seleçãoCompraOuVenda;
    tdCreateTwo.innerHTML = nomeDaMercadoria;
    tdCreateThree.innerHTML = valorDaMercadoria;

    //document.getElementById('extractTransitionTableStyle').appendChild(trCreate);
    document.getElementById('tableBodyStyle').appendChild(trCreate);
};

