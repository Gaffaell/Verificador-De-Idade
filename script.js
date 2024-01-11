function verificar() {
    var nascimento = window.document.getElementById("nascimento").value
    var foto = window.document.getElementById("foto")
    var mensagem = window.document.getElementById("mensagem")
    var sexo = window.document.getElementsByName("radsex")
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - nascimento
    if (nascimento.lenght == 0 || nascimento > ano) {
        mensagem.innerHTML = `Algo deu errado, por favor revise as informações dadas.`
        foto.innerHTML = ``
    } else {
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade <= 12 && idade >= 0){
                mensagem.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
                foto.innerHTML = `<img src='homemCrianca.png'>`
            } else if (idade > 12 && idade <= 18){
                mensagem.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
                foto.innerHTML = `<img src="homemJovem.png">`
            } else if (idade > 18 && idade <= 49){
                mensagem.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
                foto.innerHTML = `<img src="homemAdulto.png">`
            } else if (idade >= 50) {
                mensagem.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
                foto.innerHTML = `<img src="homemIdoso.png">`
            }
        } else if (sexo[1].checked){
            genero = "Mulher"
            if (idade <= 12 && idade >= 0){
                mensagem.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
                foto.innerHTML = `<img src="mulherCrianca.png">`
            } else if (idade > 12 && idade <= 18){
                mensagem.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
                foto.innerHTML = `<img src="mulherJovem.png">`
            } else if (idade > 18 && idade <= 49){
                mensagem.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
                foto.innerHTML = `<img src="mulherAdulta.png">`
            } else if (idade >= 50 ){
                mensagem.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
                foto.innerHTML = `<img src="mulherIdosa.png"">`
            }
        } 
    }
}
