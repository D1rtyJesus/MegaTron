// 1.
function sum1(...args) {
  let b = 0;
  for (let i = 0; i < args.length; i++) {
    b += args[i];
  }
  return b;
}

// 2. 
function sum2(...args) {
  let b = 0;
  for (let num of args) {
    b += num;
  }
  return b;
}

// 3. 
function sum3(...args) {
  let bt = 0;
  let i = 0;
  while (i < args.length) {
    b += args[i];
    i++;
  }
  return b;
}

// 4. 
function sum4(...args) {
  if (args.length === 0) return 0; 
  let b = 0;
  let i = 0;
  do {
    b += args[i];
    i++;
  } while (i < args.length);
  return b;
}

// 5. 
function sum5(...args) {
  return args.reduce((a, b) => a + b, 0);
}