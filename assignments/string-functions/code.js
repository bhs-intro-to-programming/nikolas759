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
  return s.substring(0,1).toUpperCase 
}
const capitalizeFirstThree = (s) => {
  return s.substring(1,3).toUpperCase
    }
const allButFirst = (s) => {
  return s.substring (1,s.length)
}
const secondHalf = (s) => {
 return s.substring(s.length/2)
}