const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3: (x, y, z) => {
    return [x, y, z];
  },
  m4: 'not a function',
};

const s_1 = (obj) => {
  const res = []; 

  for (const k1 in obj) { 
    const v2 = obj[k1];
    if (typeof v2 == 'function') { 
      const item = [k1, v2.length];
      res.push(item);
    }
  }
  return res;
};

console.log(s_1(iface));