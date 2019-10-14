/**
 * Método criado para que seja possível montar a String de análise de enreço baseado
 * no objeto endereço recebido como parâmetro.
 * Retorna uma String contendo a saída formatada com a análise do endereço.
 */
recuperaDadosDe = function(endereco) {
    return String.format('O usuário mora em {0} / {1}, no bairro {2}, na rua "{3}" com nº {4}.', 
    endereco.cidade, endereco.uf, endereco.bairro, endereco.rua, endereco.numero);
}

/**
 * Este método existe para que seja possível recuperar todos os números pares 
 * dentro do intervalo passado.
 * Retorna uma String contendo os números encontrados e a quantidade de números
 * encontrados no intervalo.
 */
analisaNumerosParesEntre = function(x, y) {
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

/**
 * Método criado para verificar se dentro da skill existe a habilidade de Javascript
 */
temHabilidade = function(skills) {
    return skills.includes("Javascript")
}

/**
 * Verifica experiência do usuário baseada nos anos passados. OS retornos possíveis
 * são:
 * 
 *  De 0-1 ano: Iniciante
 *  De 1-3 anos: Intermediário
 *  De 3-6 anos: Avançado
 *  De 7 acima: Jedi Master
 */
recuperaExperienciaBaseadaEm = function(anos) {
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

/**
 * Analisa habilidade dos usuários dentro do array e retorna uma String contendo
 * todas as análises.
 */
analisaHabilidadesDe = function(usuarios) {
    analise = "";
    usuarios.forEach(usuario => {
        analise += String.format("O {0} possui as habilidades: {1}\n", usuario.nome, 
        usuario.habilidades.join(', '));
    });
    return analise;
}