const needHeavyCoat = (goingOut, cold) => {
  return goingOut && cold 
}
needSunscreen = (goBeach, goSki) => {
  return goBeach && goSki
}
const needMittens = (goOut, warm) => {
  return goOut && !warm
}