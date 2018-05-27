function encodeButton(){
    const offset= parseInt(document.getElementById("caja").value);
    const message= document.getElementById("caja2").value;
    let mensajeFinal= window.cipher.encode(offset, message);
    document.getElementById("RespuestaCodificada").innerHTML= mensajeFinal;       
}

function decodeButton(){
    const offset= parseInt(document.getElementById("caja").value);
    const message= document.getElementById("caja2").value;
    let mensajeFinal= window.cipher.decode(offset, message);
    document.getElementById("RespuestaDecodificada").innerHTML= mensajeFinal;
}



