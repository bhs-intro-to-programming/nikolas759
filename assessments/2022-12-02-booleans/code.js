const needHeavyCoat = (goingOut, cold) => {
  return goingOut && cold 
}
needSunscreen = (goBeach, goSki) => {
  return goBeach && goSki
}
const needMittens = (goOut, warm) => {
  return goOut && !warm
}
const okaySpeed = (speedLimit, carSpeed) => {
  return (speedLimit - 10) > carSpeed && carSpeed < (speedLimit + 10)
}
const twiceAsExpensive = (price1, price2) => {
  return price2 * 2 === price1
}
const winningRecord = (wins, loss, ties) => {
  return (wins + loss + ties) / 2 < wins
} 
const isMagicNumber = (x) => {
  let x= 42 || 17
}