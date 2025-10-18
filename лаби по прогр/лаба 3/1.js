

function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
    const d = Math.floor(Math.random() * (max - min + 1)) + min;
    return d
  } else {
    if (min >= max) {
      console.error("УВАГА ПРОСЛІДУЙТЕ У ШКОЛУ")
    } else {
      const c = Math.floor(Math.random() * (max - min + 1)) + min;
      return c;
    }
  }
};


let a = random(5, 6);
console.log(a);