window.cipher = {
  encode: (offset, message) => {
    let codificado= "";
    for(let i=0; i<message.length; i++){
      let code= message.charCodeAt(i);
      code=(code-32+ offset)% 97 +32;
      codificado+= String.fromCharCode(code);      
    }
    return codificado;
  },
  decode: (offset, message) => {
    let decodificado= "";
    for(let i=0; i<message.length; i++){
      let code= message.charCodeAt(i);
      code=(code-32- offset)%97 +32;
      decodificado+= String.fromCharCode(code);
    }
    return decodificado;
  }
}