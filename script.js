let textarea = document.getElementById("textarea_input");
let textarea_output = document.getElementById("textarea_output");
let output_result_none = document.querySelector(".output__result__none");
let output_result = document.querySelector(".output__result");

let shift = 3;

function isValidText(text) {
  const regex = /^[a-z]+$/;
  return regex.test(text);
}

function caesarEncrypt(text) {
  return text
    .split("")
    .map((char) => {
      let newCharCode = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
      return String.fromCharCode(newCharCode);
    })
    .join("");
}

function caesarDecrypt(text) {
  return text
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        let newCharCode = ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97;
        return String.fromCharCode(newCharCode);
      }
      return char;
    })
    .join("");
}

function encrypt() {
  if (!isValidText(textarea.value)) {
    alert("No se admiten numeros, mayusculas, ni caracteres especiales");
    output_result_none.style.display = "flex";
    output_result.style.display = "none";
  } else {
    //encriptar
    let encrypt_text = caesarEncrypt(textarea.value);
    output_result.style.display = "flex";
    output_result_none.style.display = "none";
    textarea_output.value = encrypt_text;
  }
}

function decrypt() {
  if (!isValidText(textarea.value)) {
    alert("No se admiten numeros, mayusculas, ni caracteres especiales");
    output_result_none.style.display = "flex";
    output_result.style.display = "none";
  } else {
    //desencriptar
    let decrypt_text = caesarDecrypt(textarea.value);
    output_result.style.display = "flex";
    output_result_none.style.display = "none";
    textarea_output.value = decrypt_text;
  }
}
function copy() {
  navigator.clipboard
    .writeText(textarea_output.value)
    .then(() => {})
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
