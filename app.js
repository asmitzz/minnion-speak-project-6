var btntranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var serverUrl = "https://api.funtranslations.com/translate/minion.json?text=";

function translatedtext(text){
     return serverUrl + text
}

function translateHandler(){
    var inputText = txtInput.value;
    fetch(translatedtext(inputText)).then( res => res.json() )
    .then( json => outputDiv.innerText = json.contents.translated )
}

btntranslate.addEventListener('click',translateHandler);
