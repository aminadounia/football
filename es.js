


//template literals  /*afficher un text */
const nom='nom';
const prenom="pernom";
console.log("nom:"+nom+ "prenom"+prenom);
console.log(`nom: ${nom},prenom:${prenom}`);
//arrow functions
const sum=function(x,y){
    var sum=x+y;
    return sum;

const sum=(x,y)=>x+y;
console.log(sum(2,3));
}
//spread operators
const array=[1,2,3,4,5,6,7,8];
let array2=[...array,9,10,11];
//destructuring
const object={
    nom:"Nom",
    prenom:"Prenom",
};
console.log("nom:" +object.nom)
//Sets
const set =new Set ([1,2,3,4,5,5,5]);
console.log(set)
//Default parameters

const sum=(x,y,z=12)=>x+y+z;
//For of loop 
const array=[1,2,3];
for(let element of array)
{
    console.log(element)

} 
