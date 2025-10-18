function dox_swat_ip(ip = '127.0.0.1') {
  const numb = ip.split('.').map(part => parseInt(part));
  
  let res = 0;

  for (let i = 0; i < numb.length; i++) {
    res += numb[i] << (8 * (3 - i));
  }

  return res; 
}

console.log(dox_swat_ip('10.0.0.1')); 
console.log(dox_swat_ip('127.0.0.1')); 