const needHeavyCoat = (cold, outside) => {
  return cold && outside
}
const needSunscreen = (beach, skiing) => {
  return beach || skiing 
}
const needMittens = (goOut, warm) => {
  return goOut && !warm
}