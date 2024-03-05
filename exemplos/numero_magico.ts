//Errado
setTimeout(() => {

}, 2592000000)

setTimeout(() => {

}, 1000 * 60 * 60 * 24 * 30) // 30 days

//Correto
const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30
setTimeout(() => {

}, INTERVAL_30_DAYS)

//Errado
function calculateDiscount(price, discountAmount) {
    // retorna desconto
}

//Correto
function calculateDiscount2(priceInCents, discountAmountInPercentage) {
    // retorna desconto
}