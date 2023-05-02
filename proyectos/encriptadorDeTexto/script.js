const entrada = document.getElementById('entrada');
const salida = document.getElementById('salida');
const boton__encriptar = document.getElementById('boton__encriptar');
const boton__desencriptar = document.getElementById('boton__desencriptar');
const boton__copiar = document.getElementById('copy');

let reemplazo = [

    ["a", "01100001 "],
    ["á", "11100001 "],
    ["b", "01100010 "],
    ["c", "01100011 "],
    ["d", "01100100 "],
    ["e", "01100101 "],
    ["é", "11101001 "],
    ["f", "01100110 "],
    ["g", "01100111 "],
    ["h", "01101000 "],
    ["i", "01101001 "],
    ["í", "11101101 "],
    ["j", "01101010 "],
    ["k", "01101011 "],
    ["l", "01101100 "],
    ["m", "01101101 "],
    ["n", "01101110 "],
    ["ñ", "11110001 "],
    ["o", "01101111 "],
    ["ó", "11110011 "],
    ["p", "01110000 "],
    ["q", "01110001 "],
    ["r", "01110010 "],
    ["s", "01110011 "],
    ["t", "01110100 "],
    ["u", "01110101 "],
    ["ú", "11111010 "],
    ["ü", "10000001 "],
    ["v", "01110110 "],
    ["w", "01110111 "],
    ["x", "01111000 "],
    ["y", "01111001 "],
    ["z", "01111010 "],
]



boton__encriptar.addEventListener("click",() => {
    const texto = entrada.value.toLowerCase();
    function encriptar(textoEncriptado){
        for (let i = 0; i < reemplazo.length; i++){
            if (textoEncriptado.includes(reemplazo[i][0])){
                textoEncriptado = textoEncriptado.replaceAll(reemplazo[i][0], reemplazo[i][1]);
            };
        };
        return textoEncriptado
        } 
    const mensajeEncriptado = encriptar(texto)
    salida.value = mensajeEncriptado
})
boton__desencriptar.addEventListener('click', ()=>{
    const texto = entrada.value.toLowerCase();
    
    function desencriptar(newText){
        for (let i = 0;i<reemplazo.length; i++){
            if (newText.includes(reemplazo[i][1])){
                newText = newText.replaceAll(reemplazo[i][1],reemplazo[i][0])
            };
        };
        
        return newText;
    };
    const textDesencriptado = desencriptar(texto);
    salida.value = textDesencriptado;

})

boton__copiar.addEventListener("click",()=>{
    let texto = salida.value;
    navigator.clipboard.writeText(texto);
})