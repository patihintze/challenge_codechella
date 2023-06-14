export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade (dataNascimento);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('Apenas maiores de 18 anos podem acessar o evento')
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}