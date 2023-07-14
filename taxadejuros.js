var capital = 60_000, montante = 90_000, tempo = 24;

let resultado = (montante / capital) ** (1 / tempo) - 1;

let juros = resultado * 100;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${juros} % , pois após ${tempo} meses você tece que pagar ${montante} reais`)
