const textArea = document.querySelector(".texto_a_encriptar");
const mensaje = document.querySelector(".texto_resultado");

function forzar_minusculas(strInput) {
    strInput.value = strInput.value.toLowerCase();
}

function forzar_letras(stringAlpha) {
    stringAlpha.value = stringAlpha.value.replace(/[^a-z]/g, '')
    console.log(stringAlpha);
}

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"], ["u","ufat"]];
    stringDesencriptada  = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copy() {
    let textarea = document.getElementById("text_Area");
    textarea.select();
    document.execCommand("copy");
  }

/*function convertidor_de_texto(texto) {   
    texto = texto.replace(/a/i,"ai");
    texto = texto.replace(/e/i,"enter");
    texto = texto.replace(/i/i,"imes");
    texto = texto.replace(/o/i,"ober");
    texto = texto.replace(/u/i,"ufat");
    return texto;
}

function obtener_texto() {
    let texto = document.getElementById("texto_a_encriptar").value;
    texto = convertidor_de_texto(texto);
    console.log(texto);
    texto.value = "";
}


function desencriptar_texto(texto_1) {
    texto_1 = texto_1.replace(/ai/i,"a");
    texto_1 = texto_1.replace(/enter/i,"e");
    texto_1 = texto_1.replace(/imes/i,"i");
    texto_1 = texto_1.replace(/ober/i,"o");
    texto_1 = texto_1.replace(/ufat/i,"u");
    return texto_1;
}

function obtener_texto_encriptado() {
    let texto_1 = document.getElementById("texto_a_encriptar").value;
    texto_1 = desencriptar_texto(texto_1);
    console.log(texto_1);
}*/