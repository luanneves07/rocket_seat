String.format = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {       
        var reg = new RegExp("\\{" + i + "\\}", "gm");             
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}

pares = function(x, y) {
    pares = 0
    for (target = x; target <= y; target++) {
        //console.log(String.format("testando o numero -> {0}", target))
        if (target % 2 == 0) {
            console.log(String.format("Numero par encontrado: {0}", target))
            pares++
        }
    }
    console.log(String.format("Foram encontrados {0} numeros pares", pares))
}