 let phoneBook = [
{name: "MegaTron" , phone: "+3809544584"},
{name: "OptimusPrime" , phone: "+3807494895489"},
{name: "Critusus" , phone:"+380489489" },
] ; 
function findPhoneByName(L) {
  for (let i = 0; i < phoneBook.length; i++) {
    const snapchat = phoneBook[i];
    if (snapchat.name == L) {
      return snapchat.phone; 
    }
  }
  return 'НЕМА ТАКОГО';
}
let c = findPhoneByName("MegaTron")
console.log(c)