const totalEggs = (hardBoil, softBoil) => {
  return hardBoil + softBoil 
}
const chocolatesPerPerson = (chocolates, person) => {
  return Math.floor(chocolates / person)
}
const extraChocolates = (chocolates, person) => {
  return Math.max(chocolates / person) 
}
const leftOut = (chocolates, person) => {
  return chocolates - person
}
const presentsBudget = (friends, presents) => {
  return friends * presents
}
const perPresent = (budget, numberOfP) => {
  return budget / numberOfP
}
const wrapingCombos = (nWrappingPaper, nRibbions, nDecorativeBows) => {
  return nWrappingPaper * nRibbions * nDecorativeBows
}
const biggestNumber = (digit)