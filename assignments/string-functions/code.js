const firstAndLast = (s) => {
  return s[0]+s[s.length-1]
}
const swapFrontAndBack = (s) => {
  return s.substring(s.length/2)+ s.substring(0,s.length/2)
}
const simplePigLatin = (s,n) => {
  return s.substring(n)+s.substring(0,n)+'ay'
}
const firstHalf = (s) => {
  return s.substring(0,s.length/2)
}
const lastThree = (s) => {
  return s.substring(s.length-3)
  }
const capitalize = (s) => {
  return s.substring(0,1).toUpperCase()+s.substring(1,s.length).toLowerCase()
}
const capitalizeFirstThree = (s) => {
  return s.substring(0,3).toUpperCase()+s.substring(3,s.length).toLowerCase()
    }
const allButFirst = (s) => {
  return s.substring (1,s.length)
}
const secondHalf = (s) => {
 return s.substring(s.length/2)
}
const firstCharacter = (s) => {
  return s.substring(0,1)
}
const lastCharacter = (s) => {
  return s.substring(s.length-1)
}
const firstThree = (s) => {
  return s.substring(0,3)
}
const allButFirstAndList = (s) => {
  return s.substring(1,s.length-1)
}
const isAllUpperCase = (s) => {
  return s.toUpperCase() === s
}
const everyOther = (s) => {
  return s.substring(0,1)+s.substring(2,3)+s.substring(4,5)
}
const concatenate = (a,b) => {
  return a+b
}
