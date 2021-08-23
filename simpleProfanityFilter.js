const badWords = ["Fuck","Ass","Shit", "Faggot", "Bhenchod"];

const description = "Jana Bhenchod."
let isInclude = false;
badWords.forEach(word=>{
  if(description.includes(word)){
  isInclude = true
  }
})

console.log(`Is include`,isInclude)