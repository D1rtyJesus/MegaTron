// INFINITE NUMBER GENERATOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*function* RANDOM() {
      while(true) {
       yield Math.floor(Math.random() * Math.pow(10 , 8) );
      }
   }
const a = RANDOM() 
console.log(a.next().value)
*/

//Ex 2 , Timeout iterator function
let numb = 0
function* RANDOM() {
    while (true) {
        yield Math.floor(Math.random() * Math.pow(10, 8));
    }
}
const a = RANDOM()


function RTS(idk, timeS) {
    let sum = 0
    let numb = 0
    const start = Date.now()
    const timeout = timeS * 1000
    while (Date.now() < start + timeout) {
        sum += idk.next().value
        numb += 1
        let avrg = sum / numb
        console.log("середнє значення:" + avrg , ",к-сть оперіцій:" + numb, ",Заг. сума:" + sum) 
    }
} let b = RTS(a, 2)
console.log(b)
