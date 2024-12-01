let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesB = names.filter(name => name.charAt(0) === 'B');
console.log(namesB);
let namesmap = names.map(name => name.length);
console.log(namesmap);
let namesreduce = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(namesreduce)