//7
function ages(persons) {
  let r = {}; 
  for (let name in persons) { 
    let person = persons[name];
    r[name] = person.died - person.born; 
  }

  return r; 
} 
const persons  = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));