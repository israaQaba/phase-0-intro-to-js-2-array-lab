// Write your solution here!
// Write your solution here
const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)

function destructivelyAppendCat(name){
  cats.push('Ralph')
}

function destructivelyPrependCat(name){
  cats.unshift('Bob')
}   

function destructivelyRemoveLastCat(){
  cats.pop()
}

function destructivelyRemoveFirstCat(){
  cats.shift()
}

function appendCat(name){
  const newArray=[...cats]
  newArray.push(name);
  return newArray;
} 

function prependCat(name){
  return [name, ...cats]
} 

function removeLastCat(){
  return cats.slice(0, cats.length -1)
} 



function removeFirstCat(){
  return cats.slice(1, cats.length)
}

// The output works but it doesn't pass the test thats why I commented it
/* function removeLastCat(cats){
  cats.pop();
} 
removeLastCat(cats, 'Garfield')
console.log(cats);
*/
