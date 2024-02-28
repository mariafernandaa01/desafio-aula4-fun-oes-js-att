
function paridade () {
        var num = parseInt(document.getElementById("num").value);
        var mult = parseInt(document.getElementById("mult").value);
 
        if (num%mult == 0){
        alert(num+" é múltiplo de "+mult)
     } 
        else{
        alert(num+" não é múltiplo de "+mult)
        } 

    }

    function multiplicacao () { 
        var multiplicacao1 = parseInt(document.getElementById("multiplicacao1").value);
        var multiplicacao2 = parseInt(document.getElementById("multiplicacao2").value);

        if(multiplicacao1 <= 0 || multiplicacao2<= 0) {
         return alert('Somente numeros positivos')
        }
        
        alert(multiplicacao1 * multiplicacao2)
        
    }

    function adicao () {
        var soma1 = parseInt(document.getElementById("soma1").value);
        var soma2 = parseInt(document.getElementById("soma2").value);
        
        
        alert(soma1 + soma2)
    }