const needHeavyCoat = (goingOut, cold) => {
  return goingOut && cold 
}
needSunscreen = (goBeach, goSki) => {
  return goBeach && goSki
}
const needMittens = (goOut, warm) => {
  return goOut && !warm
}
const isVenomous = (snake)

const okaySpeed = (speedLimit, carSpeed) => {
  return (speedLimit - 10) > carSpeed && carSpeed < (speedLimit + 10)
}