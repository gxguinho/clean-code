// Boleanos

// O código em que que você vai praticar esses 
// conceitos contém uma lógica que representa uma ida do 
// Diego à um parque de diversões, o Rocket Park, para andar no seu brinquedo preferido.

// Para entrar no parque, existem algumas regras:

// - Você precisa ter um bilhete
// - O parque está aberto entre as 9h e 18h

// Já para andar em seu brinquedo preferido, o Diego precisa apenas ser maior que 130cm de altura.
//Exemplo: booleanos.ts


const user = {
  name: 'Diego',
  height: 190,
  hasTicket: true,
}

const necessaryHeight = 130

const currentHour = new Date().getHours()

const isParkOpen = currentHour > 9 && currentHour < 18

if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

const userHasTicket = user.hasTicket;

if (!userHasTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const userCanEnterToy = user.height > necessaryHeight

if (!userCanEnterToy) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')