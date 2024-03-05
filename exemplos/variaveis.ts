//Errado
const novaData = new Date().toString()

//Correto
const dataAtual = new Date().toString()

//----------------------------------------------//
//Errado
setTimeout(() => {}, 1000);

//Correto
const VERIFICAR_USUARIO_SEGUNDOS = 1000;

setTimeout(() => {}, VERIFICAR_USUARIO_SEGUNDOS);

//----------------------------------------------//
function saveCityZipCode(city: string | null, zipCode: string | null) {};

//Errado
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;

saveCityZipCode(address.match(cityZipCodeRegex)![1], address.match(cityZipCodeRegex)![2]);

//Correto
const address2 = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex2 = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex2) || [];
saveCityZipCode(city, zipCode);

//----------------------------------------------//
const locations = ['Austin', 'New York', 'San Francisco'];
function dispatch(location: string) {}

//Errado
locations.forEach((l) => {
  dispatch(l);
});

//Correto
locations.forEach((location) => {
  dispatch(location);
});

//----------------------------------------------//
//Errado
const Car = {
  carMake: 'Honda',
  carModel: 'Accord',
  carColor: 'Blue'
};

function paintCar(car, color) {
  car.carColor = color;
}

//Correto
const Car2 = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue'
};

function paintCar2(car, color) {
  car.color = color;
}
