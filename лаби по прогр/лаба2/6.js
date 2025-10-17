const m2 = (x) => x * x;
const m3 = (x) => x * x * x;
const halfm = (a, b) => (a + b) / 2;

function d_256() {
  const res = []; 

  for (let i_2 = 0; i_2 <= 9; i_2++) {
    const sq = m2(i_2);
    const cb = m3(i_2);
    const avg = halfm(sq, cb);
    res.push(avg);
  }
  return res;
}

console.log(d_256());