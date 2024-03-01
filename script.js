// Referencias a elementos del DOM
const inputText = document.querySelector("#inputText"); // Área para el texto a encriptar/desencriptar
const outputText = document.querySelector("#outputText"); // Área para mostrar el resultado
const encryptBtn = document.querySelector("#encryptBtn"); // Botón de encriptar
const decryptBtn = document.querySelector("#decryptBtn"); // Botón de desencriptar

// Matriz de cifrado para reemplazar caracteres
const cipherMatrix = [
    ["e", "enter"], 
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

// Función para encriptar el texto
function encrypt(text) {
    // Reemplaza cada vocal por su equivalente en la matriz de cifrado
    return cipherMatrix.reduce((acc, [original, cipher]) => acc.replaceAll(original, cipher), text);
}

// Función para desencriptar el texto
function decrypt(text) {
    // Reemplaza cada cifrado por su vocal original
    return cipherMatrix.reduce((acc, [original, cipher]) => acc.replaceAll(cipher, original), text);
}

// Evento para encriptar el texto cuando se presiona el botón de encriptar
encryptBtn.addEventListener("click", () => {
    outputText.value = encrypt(inputText.value);
});

// Evento para desencriptar el texto cuando se presiona el botón de desencriptar
decryptBtn.addEventListener("click", () => {
    outputText.value = decrypt(inputText.value);
});