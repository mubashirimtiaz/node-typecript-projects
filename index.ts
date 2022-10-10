const name1: string = `Mu  
              bas  hir`;

const name2: string = '  Mubashir Ali   ';

console.log('name1:', name1);
console.log('name2:', name2);

const trimmedName1: string = name1.replace(/\s*/g, '');
const trimmedName2: string = name2.trim();

console.log('trimmedName1:', trimmedName1);
console.log('trimmedName2:', trimmedName2);
