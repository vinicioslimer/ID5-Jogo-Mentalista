//gera o número secreto e multiplica por 11 para ficar inteiro de 0 a 10
var numScr = parseInt(Math.random() * 11);
var t = 1;

function Chutar() {
  var res = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute > 10 || chute < 0) {
    res.innerHTML = "Digite um número <br> de 0 a 10";
  } else if (chute == numScr) {
    res.innerHTML = `<span style="color: green">Você acertou!</span> <br> Em ${t} tentativas!`;
  } else if (chute > numScr) {
    res.innerHTML = `<span style="color: red">Você errou! </span> <br> O número secreto é menor que ${chute}`;
    t++;
  } else if (chute < numScr) {
    res.innerHTML = `<span style="color: red">Você errou! </span> <br> O número secreto é maior que ${chute}`;
    t++;
  }
}
