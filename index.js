

function verificaMultiplos (num, mult) { 
     if(num%mult == 0){
        alert(num+" é múltiplo de "+mult)
    } else {
        alert(num+" não é múltiplo de "+mult)
    }
} 
function verificaPositivos (num, mult) {
    if(num<=0 || mult<=0) {
     return alert('Somente números positivos')
} 
verificaMultiplos(num, mult)
}

        function resultado() {
            var num = parseInt(document.getElementById("num").value);
            var mult = parseInt(document.getElementById("mult").value);

            verificaPositivos(num, mult)

   }

     
    







