function range0dd(start_1 , end_1) {
   const re_2 = []
   for (let i_1 = start_1; i_1 <= end_1; i_1++) {
     if (i_1 % 2 == 1) {
        re_2.push(i_1)
     }
   }
   return(re_2)
} console.log(range0dd(15, 30))