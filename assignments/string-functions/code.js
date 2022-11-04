const firstAndLast = (s) => {
  return s[0]+s[s.length-1]
}
const swapFrontAndBack = (s) => {
  return s.substring(s.length/2)+ s.substring(0,s.length/2)
}
const simplePigLatin = (s,n) => {
  return s.substring(n)+s.substring(0,n)+'ay'
}