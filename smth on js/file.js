//Підготуйте дві реалізації функції `inc`:
//- З сигнатурою `inc(n: number): number`,
// приклад виклику: `const a = 5; const b = inc(a); console.dir({a, b});`

function inc(n) {
 return(n += 1) ; 
}
 const d_1 = 10 ; 
 const d_2 = inc(d_1) ;
 console.dir({d_1 , d_2}) ;

 



//- З сигнатурою `inc(num: Num)`, де `Num` є об'єктом з полем `n`,
//щоб функція змінила поле вихідного об'єкта, переданого за посиланням,
//приклад виклику `const obj = { n: 5 }; inc(obj); console.dir(obj);`


function inc(num) {
    num.h += 3 ; 
} 

const obj = {h: 5};
inc(obj);
console.dir(obj);









/*  ## Типи даних

Підрахунок елементів різних типів у масиві.

- Створіть вихідний масив, що містить значення різних типів, як
елементів, наприклад: `[true, 'hello', 5, 12, -200, false, false, 'word']`
але бажано більш довгий та різноманітний.
- Створіть об'єкт-колекцію (хеш) з іменами типів у вигляді ключів та `0` як
значення, наприклад: `{ number: 0, string: 0, boolean: 0 }`
- Пройдіться по масиву циклом `for..of` і для кожного елемента масиву,
збільшуйте відповідне значення в об'єкті-колекції. */


var M_1 = [false, 6, 7, "word", "script", 4, true , "sigmamoment", 3]
var H_1 = {number: 0, string: 0, boolean: 0}
for ( var  i of M_1) {
    const type = typeof i ;
    H_1[type] += 1 ;

} 
console.log(H_1)

/* - Змініть приклад: видаліть усі ключі з початкової колекції та додайте їх
динамічно у циклі. */

var M_2 = [false, 6, 7, "word", "script", 4, true , "sigmamoment", 3]
var H_2 = {}
for (var i_1 of M_2 ) { 
     const type = typeof i_1;
     if (H_2[type] == undefined ) {
        H_2[type] = 1 ;

     } else {
       H_2[type] += 1 ;
     }
}

console.log(H_2)
