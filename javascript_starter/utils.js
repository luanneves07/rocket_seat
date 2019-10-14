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
    resultado = ""
    for (target = x; target <= y; target++) {
        //console.log(String.format("testando o numero -> {0}", target))
        if (target % 2 == 0) {
            resultado += (String.format("Numero par encontrado: {0}\n", target))
            pares++
        }
    }
    resultado += (String.format("\n\n\nForam encontrados {0} numeros pares", pares))
    return resultado
}

temHabilidade = function(skills) {
    return skills.includes("Javascript")
}

experiencia = function(anos) {
    experiencia = "";
    if (1 >= anos) {
        experiencia = "iniciante";
    } else if (3 >= anos) {
        experiencia = "Intermediário";
    } else if (6 >= anos) {
        experiencia = "Avançado";
    } else if (7 <= anos ) {
        experiencia = "Jedi Master";
    } else {
        experiencia = "Indefinido";
    }
    return experiencia;
}