var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar (){
    var texto = textInput.value;
    var textoLowerCase = texto.toLowerCase();
    var resultCripto = textoLowerCase

    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");

    resultCripto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    document.getElementById('output').innerHTML = 
    '<textarea readonly id="texto-output">' + resultCripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">copiar</button>';
}

function descriptografar(){
    var texto = textInput.value;
    var textoLowerCase = texto.toLowerCase();
    var resultDescripto = textoLowerCase

    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");

    resultDescripto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    document.getElementById('output').innerHTML = 
    '<textarea readonly id="texto-output">' + resultDescripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('texto-output')

    textoCop.select();
    document.execCommand('copy')
    alert("Texto Copiado.")
}