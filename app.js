var translateBtn = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');


var url = "https://api.funtranslations.com/translate/pig-latin.json";

function serverUrl(text) {
    return url + "?" + "text=" +text
}

function translate() {
      var textInput = txtInput.value;
      fetch(serverUrl(textInput))
}

translateBtn.addEventListener('click',translate);