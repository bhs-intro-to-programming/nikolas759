const firstAndLast = (s) => {
  return s[0]+s[s.length-1]
}
const swapFrontAndBack = (s) => {
  return s.substring(s.length/2)+ s.substring(0,s.length/2)
}