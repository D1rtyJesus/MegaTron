function generateKey(length, characters){
    let res = '';
    if (typeof length == 'number') {
   for(let i = 0; i < length; i++ ) {
    const randomaither = Math.floor(Math.random() * characters.length);
    res += characters[randomaither];
   }
   return res ;
   } else {
    console.error(length +" is not a number");
   }
}
let key = generateKey(10, "MegaTibmerSaw4959");
console.log(key);


