
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

//Declare an empty array
let emptyArray =[];


//Declare an array with more than 5 number of elements
let arr = ["hello", 1, {name:'mustapha', age: 21}, [1,2,'hello'], true];


//Find the length of your array
let arr = [1, 2, 34, 5];
let arrayLength = arr.length;
console.log(arrayLength);


// Get the first item, the middle item and the last item of the array
let arr = [1,2,'middle',5,5];
console.log(arr[0]);//output :[1]
console.log(arr[arr.length-1]);// ouptut: [5]
// get the middle item 
let arrlenght = arr.length;
let middleItem = Math.ceil(arrlenght/2);
console.log(arr[middleItem-1]);//ouput: "moddle"


//Declare an array called mixedDataTypes, put different data types
//in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = ['1', 7, true, null, {name:'liujiliang', age:17}, [65, 'apple', {size: 'M'}], undefined];
console.log(mixedDataTypes.length);//ouput: [7]

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//print this arrau ising console.log
console.log(itCompanies);

//the number of the Companies 
console.log("the number of the companies are :"+itCompanies.length);

//print the first company
console.log(itCompanies[0])

let middleCompany = (arr) => arr[Math.floor(arr.length / 2)];

console.log(middleCompany(itCompanies)); // Output: "Apple"
console.log()

let searchCompany =(name)=>{
  for(let i=0; i<itCompanies.length; i++){
    if(itCompanies[i] == name){
      return "it's exist";
    }else{
      return "is not exist";
    }
  }
}
console.log(searchCompany('Microsoft'));

let searchCompany =(name)=>{
 return itCompanies.some(item=> item == name);
}
console.log(searchCompany('Microsoft'));

// // counting the number of leter in the each word in array
// let letterexist = ()=>{
//   itCompanies.split('');
  
// }
// console.log(letterexist());
let hello = 'mustaoha';
let thisme = hello.split('');
console.log(thisme);
