const totalEggs = (hardBoil, softBoil) => {
  return hardBoil + softBoil 
}
const chocolatesPerPerson = (chocolates, person) => {
  return Math.floor(chocolates / person)
}
const extraChocolates = (chocolates, person) => {
  return (chocolates % person)
}
const leftOut = (chocolates, person) => {
  return -(chocolates - person) > 0
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
const biggestNumber = (digit) => {
  return digit * 9 
}
const futureHour = (current, future) => {
  return Math.max(0,24) - (-current + -future)
}