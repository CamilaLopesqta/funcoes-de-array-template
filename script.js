function multiplicarPor3(arrayDeNumeros) {
  let novoArray = []
  for(let i=0; i<arrayDeNumeros.length; i++){
    novoArray.push(arrayDeNumeros[i] * 3)
  }
  return novoArray
}
const arrayNumerico = [1, 3, 5, 6, 10]
//console.log(multiplicarPor3([arrayNumerico]))

const retornarPares = (arrayDeNumeros) => {
  let novoArray = []
  for(let i=0; i<arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] % 2 === 0){
      novoArray.push(arrayDeNumeros[i])
    }
  }
  return novoArray
}

console.log(retornarPares(arrayNumerico));

// callback
function fazerOperacoes(array, callback){
  const novoArray = callback(array)
  return novoArray
}
console.log("callback multiplicando por 3", fazerOperacoes(arrayNumerico, multiplicarPor3));
console.log("pegar pares em callback", fazerOperacoes(arrayNumerico, retornarPares))

//map() retorna um novo array
// elemento: item que vai mudar a cada iteração do map - OBRIGATÓRIO
//INDICE: indica o indice atual a cada iteração do array - OPCIONAL
// array: representa o próprio array - opcional

const triplicarValor = arrayNumerico.map((numero, indice, array)=> {
  return numero*3
})
console.log("map", triplicarValor);

//filter()
//callback separada
const retornarPares1 = (numero)=>{
  return numero%2 === 0
}
const filtrarPares = arrayNumerico.filter(retornarPares1)
console.log("filter", filtrarPares);

//callback direto no filter

const pegarPares = arrayNumerico.filter((numero)=>{
  return numero%2 === 0
})
console.log("filter2", pegarPares)

//pra guardar na cabeça 

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const novoPoke1 = (poke)=>{
  const novaVida = {poke,
  vida: 100
  }
  return novaVida
}
console.log(novoPoke1);

const novoPoke = pokemons.map ((poke)=>{
nome: poke.nome;
vida: poke.vida = 100;
return poke
});
console.log(novoPoke)

const pokemonsDeFogo = pokemons.filter((poke)=>{
  return poke.tipo === "fogo"
})
console.log(pokemonsDeFogo)