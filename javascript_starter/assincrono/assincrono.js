function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            18 <= idade ? resolve() : reject();
        }, 2000);
    });
}

checaIdade(12)
    .then(function(response) {
        console.log("Maior que 18");
    })
    .catch(function(error) {
        console.log("Menor que 18");
    });