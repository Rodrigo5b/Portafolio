(()=> {
    const entradaTexto = document.getElementById("entradaTexto");
    const btnEncriptar = document.getElementById("btn__encriptar");
    const btnDesencriptar = document.getElementById("btn__desencriptar");
    const mensajeFinal = document.getElementById("mensajeFinal");
    const btnCopiar = document.getElementsByClassName("btn__copiar")[0];
    const muneco = document.getElementById ("muneco");
    const info = document.getElementById ("info");
    const ajuste = document.getElementsByClassName("texto__encriptado")[0];
    let reemplazar = [
        ["e", "enter"],
        ["o", "ober"],
        ["i", "imes"],
        ["a", "ai"],
        ["u", "ufat"],
        ["y","lo"],
    ];
    const cambios = (nvalue) =>{
        mensajeFinal.innerHTML = nvalue;
        muneco.classList.add("desaparecer");
        info.style.display = "none";
        btnCopiar.classList.remove("ocultar");
        entradaTexto.value = "";
        entradaTexto.placeholder = "contratenme"
        mensajeFinal.classList.add("ajustar");
        ajuste.classList.add("ajuste")
    }

    const reset = () =>{
        mensajeFinal.textContent = "";
        muneco.classList.remove("desaparecer");
        info.style.display = "block";
        btnCopiar.classList.add("ocultar");
        entradaTexto.focus();
        mensajeFinal.classList.remove("ajustar");
        ajuste.classList.remove("ajuste")

    }

    btnEncriptar.addEventListener('click', () => {
        const texto = entradaTexto.value.toLowerCase();
        if (texto != "")/*Diferente a (Vacio)*/{
            function encriptar(newtext){
                for (let i = 0; i < reemplazar.length; i++){
                    if(newtext.includes(reemplazar[i][0])){
                        newtext = newtext.replaceAll(reemplazar[i][0],reemplazar[i][1])
                    };
                };
                return newtext
            };
            
            // cambios(encriptar(texto))no funciona
            const timer = encriptar(texto)
            cambios(timer)

            } else{
                alert("Ingresa texto a encriptar")
                reset();
            }
        })

            btnDesencriptar.addEventListener('click', ()=>{
                const texto = entradaTexto.value.toLowerCase();
                if (texto !=""){
                    function desencriptar(ntext){
                        for(let i = 0;i < reemplazar.length;i++){
                            if(ntext.includes(reemplazar[i][1])){
                            ntext = ntext.replaceAll(reemplazar[i][1], reemplazar[i][0])
                        };
                    }
                    return ntext;
            };
            cambios(desencriptar(texto));
        } else{
            alert("ingrese texto a desencriptar");
            reset();
        };
    })

    btnCopiar.addEventListener('click',()=>{
        let texto = mensajeFinal.textContent;
        navigator.clipboard.writeText(texto);
        reset();
    });
})()