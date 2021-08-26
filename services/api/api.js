function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            document.getElementById('endereco').value="...";

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);
        }
        else {
            limpa_formulario_cep();
            alert("Formato de Cep inválido");
        }
    }
    else {
        limpa_formulario_cep();
    }
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('endereco').value=(conteudo.logradouro + conteudo.cep + conteudo.bairro + conteudo.localidade + conteudo.uf)
    }
}

function limpa_formulario_cep() {
    document.getElementById('endereco').value=("")
}