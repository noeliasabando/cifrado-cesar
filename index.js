function encodeButton(){
    const offset= parseInt(document.getElementById("caja").value);
    const message= document.getElementById("caja2").value;
    let mensajeFinal= window.cipher.encode(offset, message);
    document.getElementById("RespuestaCodificada").innerHTML= mensajeFinal;        
}



