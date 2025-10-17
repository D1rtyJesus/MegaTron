const  phoneBookMap = {  'MegaTron': '+3809544584', 
 'OptimusPrime': '+3807494895489', 
 'Critusus': '+380489489', } 

function findPhoneByName(name) {
  return phoneBookMap[name] || 'Контакт не знайдено';
}


console.log(findPhoneByName('OptimusPrime')); 
console.log(findPhoneByName('Bumblebee'));

let Goida = peromoga