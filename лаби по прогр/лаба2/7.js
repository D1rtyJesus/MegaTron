const fn = () => {
  const obj3 = { name: 'Artem' };
  let obj2 = { name: 'Denys' };
  obj3.name = 'Sniper'; 
  obj2.name = 'Maksym';
  obj2 = { name: 'NotASniper' };
  //тут якщо писати для obj2 = { notname: "AbsoluteNOtASNiper"} - вийде тільки помилка. Бо в константному об'єкті, можна тільки змінити 'підтип', але не самі типи, або сам суб'єкт що оброблюються(наприклад на масив, бо в let це зробити можна). 
};