## Single-Function Challenges (Use One Function)
- built function / native
1. **Challenge: Reverse an Array**
   - **Function**: `reverse()`
   - **Input**: `[1, 2, 3, 4]`
   - **Output**: `[4, 3, 2, 1]`
   ```js
    let arr = [1, 2, 3, 4];
    let reverse = (arr)=>{
        let result = [];
        for(let i = arr.length-1; i>= 0; i--){
            result.push(arr[i]);
        }
        return result
    }

    console.log(reverse(arr))
   

2. **Challenge: Check if a String Contains a Substring**
   - **Function**: `includes()`
   - **Input**: `"Hello World"`, `"World"`
   - **Output**: `true`
    ```js
    let check = (phrase, word)=>{
    if(phrase.toLowerCase().includes(word.toLowerCase())){
        return "the word --"+  word + "-- exist in the sentence";
       
    }else{
        return "not included";
    }
    
    }

    console.log(check("hello world", "HELLO"));


3. **Challenge: Get the Length of a String**
   - **Function**: `length`
   - **Input**: `"JavaScript"`
   - **Output**: `10`

   ```js
   let getLength =(word) =>{
   let removeSpace =  word.trim();
   let ThwE = removeSpace.split('');
    console.log(ThwE)
    let withoutSpace = ThwE.filter(letter => letter !== ' ').length;
    console.log(withoutSpace)
    }
    getLength('javascript')



4. **Challenge: Convert a String to Uppercase**
   - **Function**: `toUpperCase()`
   - **Input**: `"hello"`
   - **Output**: `"HELLO"`

   ```js
     let toUpperCase =(word)=>{
    return word.toUpperCase();
  }
  console.log(toUpperCase('hello'));

5. **Challenge: Get the First Index of a Substring**
   - **Function**: `indexOf()`
   - **Input**: `"JavaScript"`, `"Script"`
   - **Output**: `4`

   ```js
   let findindex = (phrase, letter) =>{
  return phrase.indexOf(letter);
    }
    console.log(findindex('hello', 'o'))



6. **Challenge: Remove Whitespace from the Start of a String**
   - **Function**: `trimStart()`
   - **Input**: `"  hello"`
   - **Output**: `"hello"`

   ```js
    let noWhiteSpace = (sentence) =>{
    let PhWS = sentence.trim();
    console.log(PhWS);
    }
    noWhiteSpace(' hello')


7. **Challenge: Convert an Array to a String**
   - **Function**: `join()`
   - **Input**: `["apple", "banana", "cherry"]`
   - **Output**: `"apple,banana,cherry"`

    ```js
    let arr = ['love', 'my', 'self'];
    let arrToString =(arr) =>{
    let result = arr.join(', ');
    console.log(result)
    }

    arrToString(arr);

8. **Challenge: Extract a Portion of a String**
   - **Function**: `slice()`
   - **Input**: `"JavaScript"`, `0, 4`
   - **Output**: `"Java"`

   ```js
   let makeSlice = (word)=>{
    return word.slice(0, 4);
    }
    console.log(makeSlice('javascript'));

9. **Challenge: Add Elements to the End of an Array**
   - **Function**: `push()`
   - **Input**: `[1, 2, 3]`, `4`
   - **Output**: `[1, 2, 3, 4]`

   ```js
   let addToArr =(arr, urName)=>{
   arr.push(urName);
   return arr;
    }
    array = [1, 2 ,3]
    console.log(addToArr(array, 4));


10. **Challenge: Get the Maximum Value in an Array**
    - **Function**: `Math.max()`
    - **Input**: `[1, 2, 3, 4]`
    - **Output**: `4`

    ```js
        let findMax =(arr)=>{
    return Math.max(...arr);// spread operator (...)
        
    }
    arr = [1, 2 ,3]
    console.log(findMax(arr));

    //another way
    let arr = [0,2,3,4,5,6,6,3,22];
  let findMax = (arr) =>{
        let max = arr[0];
        for(let i =0; i < arr.length; i++){
            if(max > arr[i]){
                max = arr[i];
            }
        }
        console.log(max);
}
findMax(arr);
    ```

11. **Challenge: Convert an Array to a Set**
    - **Function**: `new Set()`
    - **Input**: `[1, 2, 2, 3, 3]`
    - **Output**: `{1, 2, 3}`



12. **Challenge: Remove the First Element from an Array**
    - **Function**: `shift()`
    - **Input**: `[1, 2, 3]`
    - **Output**: `1`
    ```js
    let removeFirstElm = (arr) => {
        arr.shift();
        console.log(arr);
    }
    removeFirstElm(arr);
    ```

13. **Challenge: Create an Array with Values from a String**
    - **Function**: `split()`
    - **Input**: `"apple,banana,cherry"`, `","`
    - **Output**: `["apple", "banana", "cherry"]`

    ```js
    let createArr = (string) =>{
        let result = string.split("");
         console.log(result);
    }
createArr("apple,banana,cherry")
    ```

14. **Challenge: Check if an Array Includes a Specific Value**
    - **Function**: `includes()`
    - **Input**: `[1, 2, 3]`, `2`
    - **Output**: `true`
    ```js
    let arr = [1,2,3,4,5,5]
    let check = (arr, value)=>{
        arr.includes(value) ? "true" : "false"
    }
    console.log(check(arr, 2));
   
    ```
15. **Challenge: Check if an Array Contains at Least One Element That Meets a Condition**
    - **Function**: `some()`
    - **Input**: `[1, 2, 3]`, `num => num % 2 === 0`
    - **Output**: `true`
    ```js
    let isEven;
    for(let i = 0; i < arr.length; i++){
    
    if((arr[i] % 2) == 0){
        isEven = 'true';
    }else{
        isEven ="false"
    }console.log(isEven)
    }
    ```

16. **Challenge: Check if All Elements of an Array Meet a Condition**
    - **Function**: `every()`
    - **Input**: `[2, 4, 6]`, `num => num % 2 === 0`
    - **Output**: `true`

    ```js
    let arr = [2, 4, 6];
    let check = (arr) =>{
       let result =  arr.every(elm => elm %2 == 0)
        console.log(result);
    }
    check(arr)//true(4);
    ```

17. **Challenge: Find the First Element That Meets a Condition**
    - **Function**: `find()`
    - **Input**: `[1, 2, 3]`, `num => num > 1`
    - **Output**: `2`
    ```js
    
        let findFirstElm = (myArr) =>{
       let result  =  myArr.find(num => num > 1);
        console.log(result);
    }
    findFirstElm(myArr);

    ```

18. **Challenge: Join Array Elements with a Custom Separator**
    - **Function**: `join()`
    - **Input**: `["apple", "banana", "cherry"]`, `"-"`
    - **Output**: `"apple-banana-cherry"`

    ```js
    let joinElm = (arr) =>{
        let result = arr.join("-");
        console.log(result);
    }
    joinElm(arr);
    ```

19. **Challenge: Remove the Last Element from an Array**
    - **Function**: `pop()/slice/for loop`
    - **Input**: `[1, 2, 3]`
    - **Output**: `3`

    ```js

    // without builr function  let removeLastElm = (arr) =>{
   let result = [];
      for(let i = 0; i < arr.length-1; i++){
     
         result.push(arr[i]);
      }
      console.log(result)
    }
    removeLastElm(arr);
    //------------
    let removeLastElm = (arr) =>{
        let result  = arr.pop()
        console.log(arr);
    }
    removeLastElm(arr);
    // with slice 

    let arr = [1, 2, 3]
    let result = arr.slice(0,-1)
    console.log(result);

    ```

20. **Challenge: Sort an Array in Ascending Order**
    - **Function**: `sort()`
    - **Input**: `[3, 1, 4, 2]`
    - **Output**: `[1, 2, 3, 4]`
    ```js
    //using insertion sort algo
    let arr = [1, 3,5,2,8,0,9];
    for(let i = 0; i < arr.length; i++){
    let tmp = arr[i];
    let j = i-1;
    
    while(tmp < arr[j] && j>=0){
        arr[j+1] = arr[j]
        j--;
    }
    arr[j+1] =tmp;
    }

    console.log(arr)

    //using built function sort ->one line
    console.log(arr.sort((x, y)=> x-y));
    ```
---

## Multi-Function Challenges (Use Multiple Functions)

1. **Challenge: Remove Duplicate Values from an Array**
   - **Functions**: `new Set()`, `Array.from()`
   - **Input**: `[1, 2, 3, 2, 1]`
   - **Output**: `[1, 2, 3]`

   ```js
   //quick simple 
   let newArr= []
    for(let i = 0; i < arr.length; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }
    }
    console.log(newArr)

    // using forloop
    let removeDuplicateNum = (arr) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false; 
   
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                isDuplicate = true;
                break; 
            }
        }

        if (!isDuplicate) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);
    };
    removeDuplicateNum(arr)
   ```

2. **Challenge: Combine Two Arrays and Remove Duplicates**
   - **Functions**: `concat()`
   - **Input**: `[1, 2, 3]`, `[2, 3, 4]`
   - **Output**: `[1, 2, 3, 4]`

   ```js
   let concatremovedup = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
      let isdup = false;
      
      for(let j = 1; j<arr1.length; j++){
        if(arr1[i] == arr2[j]){
          isdup = true;
          break;
        }
      }
      if(!isdup){
        arr1.push(arr2[i]);
      }
        
    }

    console.log(arr1);
    };
    concatremovedup(arr1, arr2);

    //using built function concat 
    let result = arr1.concat(arr2)
    console.log(result);

    //
   ```

3. **Challenge: Reverse a String and Convert It to Uppercase**
   - **Functions**: `split()`, `reverse()`, `join()`, `toUpperCase()`
   - **Input**: `"hello"`
   - **Output**: `"OLLEH"`

   ```js
   let reverse = (phrase) =>{
    let reversed = phrase.split('').reverse().join(',').
   }
   ```

4. **Challenge: Get the Unique Characters in a String**
   - **Functions**: `split()`, `new Set()`, `Array.from()`
   - **Input**: `"aabcc"`
   - **Output**: `["a", "b", "c"]`

   ```js
   let unique = (string) =>{
    let splited = string.split('');
    let newArr = [];
        for(let i = 0 ; i < splited.length; i++){
         
              if(!newArr.includes(splited[i])){
                newArr.push(splited[i]);
              }

        }
        console.log(newArr);
  }
    unique(string);
           
   ```

5. **Challenge: Check if an Array Contains a Specific Value and Get Its Index**
   - **Functions**: `includes()`, `indexOf()`
   - **Input**: `[1, 2, 3, 4]`, `3`
   - **Output**: `true`, `2`

   ```js
    let check = (arr, num) =>{
  let theindex = null;
   for(let i = 0; i < arr.length; i++){
     if(arr[i] == num){
       theindex = arr.indexOf(arr[i])
     }
   }

   if(theindex != null){
      console.log('true',theindex)
   }else{
     console.log('false')
   }
  
  }
    check(arr1, 2);
   ```

6. **Challenge: Filter Out All Odd Numbers and Sort the Result**
   - **Functions**: `filter()`, `sort()`
   - **Input**: `[1, 2, 3, 4, 5]`
   - **Output**: `[2, 4]`

   ```js
   let checkodd =(arr)=>{
     let result = [];
      arr.forEach(elm =>{
      if(elm %2 == 0){
        result.push(elm)
      }
    });
    console.log(result)
   } 
   
    checkodd(arr1);

    // methode 2

    console.log(arr.filter(elm => elm %2 == 0))
   ```

7. **Challenge: Find the Maximum and Minimum Value in an Array**
   - **Functions**: `Math.max()`, `Math.min()`
   - **Input**: `[1, 2, 3, 4, 5]`
   - **Output**: `5`, `1`

   ```js
   let finMaxMin =(arr)=>{
  
    let max = arr[0];
   let min = arr[0];
  for(let i = 0 ; i <arr.length; i++){
     
        if(arr[i] > max){
        max = arr[i];
        }
        else if(min > arr[i]){
        min = arr[i]
    }
    }
    
    console.log(max, min)
    }
    finMaxMin(arr1)

    // suing math.max and math.min built function
        let finMaxMin =(arr)=>{
    
        let max = Math.max(...arr);
        let min  =  Math.min(...arr);
    
    console.log(max, min)
    }
    finMaxMin(arr1)
   ```

8. **Challenge: Concatenate Strings with Custom Separator**
   - **Functions**: `split()`, `join()`
   - **Input**: `"apple banana cherry"`, `" "`, `"-"`
   - **Output**: `"apple-banana-cherry"`

   ```js
   
   ```

9. **Challenge: Check if an Array Contains Only Even Numbers**
   - **Functions**: `every()`, `num => num % 2 === 0`
   - **Input**: `[2, 4, 6]`
   - **Output**: `true`

10. **Challenge: Convert a String to an Array of Words**
    - **Functions**: `split()`, `filter()`
    - **Input**: `"The quick brown fox"`
    - **Output**: `["The", "quick", "brown", "fox"]`

11. **Challenge: Find the Sum of All Numbers in an Array**
    - **Functions**: `reduce()`
    - **Input**: `[1, 2, 3, 4]`
    - **Output**: `10`

12. **Challenge: Capitalize the First Letter of Each Word in a String**
    - **Functions**: `split()`, `map()`, `join()`
    - **Input**: `"hello world"`
    - **Output**: `"Hello World"`

13. **Challenge: Convert a String to a Number and Add Two**
    - **Functions**: `parseInt()`, `+`
    - **Input**: `"5"`
    - **Output**: `7`

14. **Challenge: Sort an Array of Strings by Length**
    - **Functions**: `sort()`
    - **Input**: `["apple", "banana", "kiwi"]`
    - **Output**: `["kiwi", "apple", "banana"]`

15. **Challenge: Filter Out All Falsey Values from an Array**
    - **Functions**: `filter()`
    - **Input**: `[0, 1, false, "", NaN, 2]`
    - **Output**: `[1, 2]`

16. **Challenge: Get the Index of a Substring and Remove It**
    - **Functions**: `indexOf()`, `slice()`
    - **Input**: `"Hello World"`, `"World"`
    - **Output**: `"Hello "`

17. **Challenge: Create a New Array with All Elements Squared**
    - **Functions**: `map()`
    - **Input**: `[1, 2, 3, 4]`
    - **Output**: `[1, 4, 9, 16]`

18. **Challenge: Remove the First and Last Element from an Array**
    - **Functions**: `shift()`, `pop()`
    - **Input**: `[1, 2, 3, 4]`
    - **Output**: `[2, 3]`

19. **Challenge: Capitalize the First Letter of a String**
    - **Functions**: `charAt()`, `toUpperCase()`, `slice()`
    - **Input**: `"hello"`
    - **Output**: `"Hello"`

20. **Challenge: Filter Array and Count Occurrences**
    - **Functions**: `filter()`, `length`
    - **Input**: `[1, 2, 3, 1, 4, 1]`, `1`
    - **Output**: `3`


##object manipulation
```js
const employees = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    age: 32,
    department: "Développement",
    position: "Développeur Fullstack",
    salary: 55000,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    joinDate: "2019-05-15",
    email: "jean.dupont@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 2,
    firstName: "Marie",
    lastName: "Martin",
    age: 28,
    department: "Design",
    position: "UI/UX Designer",
    salary: 48000,
    skills: ["Figma", "Adobe XD", "Photoshop", "User Research"],
    joinDate: "2020-02-10",
    email: "marie.martin@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "Spanish"]
  },
  {
    id: 3,
    firstName: "Pierre",
    lastName: "Bernard",
    age: 45,
    department: "Management",
    position: "Chef de projet",
    salary: 65000,
    skills: ["Agile", "Scrum", "JIRA", "Project Planning"],
    joinDate: "2017-11-22",
    email: "pierre.bernard@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "German"]
  },
  {
    id: 4,
    firstName: "Thomas",
    lastName: "Petit",
    age: 29,
    department: "Développement",
    position: "Développeur Frontend",
    salary: 52000,
    skills: ["React", "TypeScript", "CSS", "Jest"],
    joinDate: "2020-08-14",
    email: "thomas.petit@company.com",
    projects: ["Project Gamma", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 5,
    firstName: "Camille",
    lastName: "Leroux",
    age: 35,
    department: "Marketing",
    position: "Chef de produit",
    salary: 58000,
    skills: ["Market Research", "Product Strategy", "Roadmapping"],
    joinDate: "2018-06-03",
    email: "camille.leroux@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: false,
    languages: ["French", "English", "Spanish"]
  },
  {
    id: 6,
    firstName: "Antoine",
    lastName: "Moreau",
    age: 27,
    department: "Développement",
    position: "Développeur Backend",
    salary: 53000,
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    joinDate: "2021-03-18",
    email: "antoine.moreau@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 7,
    firstName: "Élodie",
    lastName: "Simon",
    age: 31,
    department: "Design",
    position: "Graphiste",
    salary: 45000,
    skills: ["Illustrator", "InDesign", "Branding"],
    joinDate: "2019-09-22",
    email: "elodie.simon@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French"]
  },
  {
    id: 8,
    firstName: "Nicolas",
    lastName: "Laurent",
    age: 40,
    department: "Management",
    position: "Directeur Technique",
    salary: 75000,
    skills: ["Architecture", "Team Leadership", "Cloud Computing"],
    joinDate: "2016-04-05",
    email: "nicolas.laurent@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Gamma", "Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 9,
    firstName: "Laura",
    lastName: "Michel",
    age: 26,
    department: "Marketing",
    position: "Chargée de communication",
    salary: 42000,
    skills: ["Social Media", "Content Writing", "Community Management"],
    joinDate: "2021-07-30",
    email: "laura.michel@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "German"]
  },
  {
    id: 10,
    firstName: "Alexandre",
    lastName: "Dubois",
    age: 33,
    department: "Développement",
    position: "DevOps Engineer",
    salary: 60000,
    skills: ["AWS", "Terraform", "CI/CD", "Kubernetes"],
    joinDate: "2018-11-12",
    email: "alexandre.dubois@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 11,
    firstName: "Sarah",
    lastName: "Lefevre",
    age: 29,
    department: "Design",
    position: "UX Researcher",
    salary: 49000,
    skills: ["User Testing", "Data Analysis", "Prototyping"],
    joinDate: "2020-05-19",
    email: "sarah.lefevre@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 12,
    firstName: "Maxime",
    lastName: "Roux",
    age: 38,
    department: "Management",
    position: "Responsable RH",
    salary: 58000,
    skills: ["Recrutement", "Gestion de carrière", "Formation"],
    joinDate: "2017-02-28",
    email: "maxime.roux@company.com",
    projects: [],
    isActive: false,
    languages: ["French", "English", "Spanish"]
  },
  {
    id: 13,
    firstName: "Julie",
    lastName: "Fournier",
    age: 24,
    department: "Développement",
    position: "Développeuse Junior",
    salary: 38000,
    skills: ["JavaScript", "HTML/CSS", "Git"],
    joinDate: "2022-01-10",
    email: "julie.fournier@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 14,
    firstName: "David",
    lastName: "Girard",
    age: 42,
    department: "Développement",
    position: "Architecte Logiciel",
    salary: 72000,
    skills: ["Microservices", "Design Patterns", "Java"],
    joinDate: "2015-08-15",
    email: "david.girard@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "Portuguese"]
  },
  {
    id: 15,
    firstName: "Chloé",
    lastName: "Blanc",
    age: 30,
    department: "Marketing",
    position: "Responsable SEO",
    salary: 51000,
    skills: ["SEO", "Google Ads", "Analytics"],
    joinDate: "2019-04-03",
    email: "chloe.blanc@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 16,
    firstName: "Kevin",
    lastName: "Lemoine",
    age: 25,
    department: "Design",
    position: "Motion Designer",
    salary: 43000,
    skills: ["After Effects", "Cinema 4D", "Animation"],
    joinDate: "2021-09-27",
    email: "kevin.lemoine@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French"]
  },
  {
    id: 17,
    firstName: "Amandine",
    lastName: "Perrot",
    age: 36,
    department: "Management",
    position: "Directrice Marketing",
    salary: 68000,
    skills: ["Brand Strategy", "Digital Marketing", "Team Management"],
    joinDate: "2016-07-11",
    email: "amandine.perrot@company.com",
    projects: ["Project Alpha", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Italian"]
  },
  {
    id: 18,
    firstName: "Romain",
    lastName: "Chevalier",
    age: 27,
    department: "Développement",
    position: "Développeur Mobile",
    salary: 50000,
    skills: ["React Native", "Swift", "Firebase"],
    joinDate: "2020-10-05",
    email: "romain.chevalier@company.com",
    projects: ["Project Beta"],
    isActive: false,
    languages: ["French", "English"]
  },
  {
    id: 19,
    firstName: "Céline",
    lastName: "Barbier",
    age: 33,
    department: "Design",
    position: "Directrice Artistique",
    salary: 62000,
    skills: ["Art Direction", "Creative Strategy", "Brand Identity"],
    joinDate: "2018-03-14",
    email: "celine.barbier@company.com",
    projects: ["Project Alpha", "Project Gamma", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Spanish"]
  },
  {
    id: 20,
    firstName: "Julien",
    lastName: "Arnaud",
    age: 29,
    department: "Développement",
    position: "Ingénieur QA",
    salary: 48000,
    skills: ["Testing", "Automation", "Selenium"],
    joinDate: "2020-06-22",
    email: "julien.arnaud@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 21,
    firstName: "Manon",
    lastName: "Royer",
    age: 31,
    department: "Marketing",
    position: "Chargée de projet événementiel",
    salary: 45000,
    skills: ["Event Planning", "Logistics", "Partnerships"],
    joinDate: "2019-08-19",
    email: "manon.royer@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 22,
    firstName: "Fabien",
    lastName: "Colin",
    age: 34,
    department: "Développement",
    position: "Data Engineer",
    salary: 59000,
    skills: ["Python", "SQL", "ETL", "Big Data"],
    joinDate: "2017-12-01",
    email: "fabien.colin@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 23,
    firstName: "Elise",
    lastName: "Mercier",
    age: 26,
    department: "Design",
    position: "UI Designer",
    salary: 44000,
    skills: ["Sketch", "Prototyping", "Design Systems"],
    joinDate: "2021-04-15",
    email: "elise.mercier@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 24,
    firstName: "Hugo",
    lastName: "Bourgeois",
    age: 41,
    department: "Management",
    position: "Directeur Financier",
    salary: 80000,
    skills: ["Financial Planning", "Budgeting", "Forecasting"],
    joinDate: "2015-05-09",
    email: "hugo.bourgeois@company.com",
    projects: [],
    isActive: true,
    languages: ["French", "English", "German"]
  },
  {
    id: 25,
    firstName: "Clara",
    lastName: "Henry",
    age: 28,
    department: "Développement",
    position: "Développeuse Fullstack",
    salary: 54000,
    skills: ["Vue.js", "Laravel", "MySQL"],
    joinDate: "2020-01-27",
    email: "clara.henry@company.com",
    projects: ["Project Alpha", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 26,
    firstName: "Mathieu",
    lastName: "Da silva",
    age: 30,
    department: "Marketing",
    position: "Growth Hacker",
    salary: 52000,
    skills: ["A/B Testing", "Conversion Optimization", "Digital Analytics"],
    joinDate: "2019-11-08",
    email: "mathieu.dasilva@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Portuguese"]
  },
  {
    id: 27,
    firstName: "Océane",
    lastName: "Leroy",
    age: 27,
    department: "Design",
    position: "UX Designer",
    salary: 47000,
    skills: ["User Flows", "Wireframing", "Usability Testing"],
    joinDate: "2021-02-14",
    email: "oceane.leroy@company.com",
    projects: ["Project Alpha"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 28,
    firstName: "Quentin",
    lastName: "Sanchez",
    age: 35,
    department: "Développement",
    position: "Tech Lead",
    salary: 67000,
    skills: ["Code Review", "Mentoring", "System Design"],
    joinDate: "2017-06-30",
    email: "quentin.sanchez@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 29,
    firstName: "Léa",
    lastName: "Nguyen",
    age: 24,
    department: "Marketing",
    position: "Assistante Marketing",
    salary: 35000,
    skills: ["Office Suite", "Market Research", "Reporting"],
    joinDate: "2022-03-01",
    email: "lea.nguyen@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Vietnamese"]
  },
  {
    id: 30,
    firstName: "Baptiste",
    lastName: "Meyer",
    age: 37,
    department: "Management",
    position: "Directeur des Opérations",
    salary: 78000,
    skills: ["Process Optimization", "Supply Chain", "Vendor Management"],
    joinDate: "2016-09-18",
    email: "baptiste.meyer@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "German"]
  },
  {
    id: 31,
    firstName: "Zoé",
    lastName: "Dumont",
    age: 29,
    department: "Développement",
    position: "Développeuse Backend",
    salary: 56000,
    skills: ["Ruby on Rails", "PostgreSQL", "Redis"],
    joinDate: "2019-07-22",
    email: "zoe.dumont@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 32,
    firstName: "Théo",
    lastName: "Noël",
    age: 26,
    department: "Design",
    position: "Product Designer",
    salary: 49000,
    skills: ["Product Thinking", "User Journey Mapping", "UI Design"],
    joinDate: "2020-12-03",
    email: "theo.noel@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 33,
    firstName: "Anaïs",
    lastName: "Bertrand",
    age: 32,
    department: "Marketing",
    position: "Responsable Relations Publiques",
    salary: 53000,
    skills: ["Media Relations", "Crisis Communication", "Press Releases"],
    joinDate: "2018-10-17",
    email: "anais.bertrand@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Spanish"]
  },
  {
    id: 34,
    firstName: "Paul",
    lastName: "Leclercq",
    age: 40,
    department: "Développement",
    position: "CTO",
    salary: 95000,
    skills: ["Technical Strategy", "Innovation", "Team Building"],
    joinDate: "2014-02-05",
    email: "paul.leclercq@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Gamma", "Project Delta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Dutch"]
  },
  {
    id: 35,
    firstName: "Inès",
    lastName: "Rivière",
    age: 28,
    department: "Design",
    position: "Illustratrice",
    salary: 42000,
    skills: ["Procreate", "Digital Painting", "Character Design"],
    joinDate: "2021-05-29",
    email: "ines.riviere@company.com",
    projects: ["Project Gamma"],
    isActive: false,
    languages: ["French", "English"]
  },
  {
    id: 36,
    firstName: "Alexis",
    lastName: "Philippe",
    age: 33,
    department: "Développement",
    position: "Ingénieur Blockchain",
    salary: 71000,
    skills: ["Solidity", "Smart Contracts", "Ethereum"],
    joinDate: "2017-04-12",
    email: "alexis.philippe@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 37,
    firstName: "Louise",
    lastName: "Fontaine",
    age: 30,
    department: "Marketing",
    position: "Responsable Contenu",
    salary: 50000,
    skills: ["Content Strategy", "Copywriting", "Editing"],
    joinDate: "2019-02-25",
    email: "louise.fontaine@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Chinese"]
  },
  {
    id: 38,
    firstName: "Benjamin",
    lastName: "Caron",
    age: 27,
    department: "Design",
    position: "UX Researcher",
    salary: 48000,
    skills: ["Qualitative Research", "Survey Design", "Persona Development"],
    joinDate: "2020-09-14",
    email: "benjamin.caron@company.com",
    projects: ["Project Alpha"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 39,
    firstName: "Emma",
    lastName: "Perrin",
    age: 31,
    department: "Développement",
    position: "Développeuse Frontend",
    salary: 57000,
    skills: ["Angular", "TypeScript", "RxJS"],
    joinDate: "2018-07-08",
    email: "emma.perrin@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 40,
    firstName: "Nathan",
    lastName: "Giraud",
    age: 36,
    department: "Management",
    position: "Directeur Commercial",
    salary: 82000,
    skills: ["Sales Strategy", "Account Management", "Negotiation"],
    joinDate: "2016-01-20",
    email: "nathan.giraud@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Spanish"]
  },
  {
    id: 41,
    firstName: "Léna",
    lastName: "Boyer",
    age: 25,
    department: "Marketing",
    position: "Chargée de référencement",
    salary: 41000,
    skills: ["SEO", "Keyword Research", "Link Building"],
    joinDate: "2021-08-11",
    email: "lena.boyer@company.com",
    projects: ["Project Beta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 42,
    firstName: "Arthur",
    lastName: "Andre",
    age: 34,
    department: "Développement",
    position: "Ingénieur Machine Learning",
    salary: 69000,
    skills: ["Python", "TensorFlow", "Data Science"],
    joinDate: "2017-10-23",
    email: "arthur.andre@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 43,
    firstName: "Julia",
    lastName: "Clement",
    age: 29,
    department: "Design",
    position: "Directrice UX",
    salary: 63000,
    skills: ["UX Strategy", "User Centered Design", "Accessibility"],
    joinDate: "2019-06-17",
    email: "julia.clement@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Italian"]
  },
  {
    id: 44,
    firstName: "Tom",
    lastName: "Fernandes",
    age: 26,
    department: "Développement",
    position: "Développeur Fullstack",
    salary: 51000,
    skills: ["PHP", "Symfony", "Vue.js"],
    joinDate: "2020-11-09",
    email: "tom.fernandes@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Portuguese"]
  },
  {
    id: 45,
    firstName: "Lina",
    lastName: "Lopez",
    age: 32,
    department: "Marketing",
    position: "Responsable Partenariats",
    salary: 55000,
    skills: ["Partnership Development", "Sponsorship", "Networking"],
    joinDate: "2018-05-30",
    email: "lina.lopez@company.com",
    projects: ["Project Alpha", "Project Beta"],
    isActive: true,
    languages: ["French", "English", "Spanish"]
  },
  {
    id: 46,
    firstName: "Enzo",
    lastName: "Robin",
    age: 28,
    department: "Design",
    position: "Graphiste Print",
    salary: 43000,
    skills: ["InDesign", "Typography", "Print Production"],
    joinDate: "2020-04-12",
    email: "enzo.robin@company.com",
    projects: ["Project Gamma"],
    isActive: false,
    languages: ["French"]
  },
  {
    id: 47,
    firstName: "Maëlys",
    lastName: "Gauthier",
    age: 30,
    department: "Développement",
    position: "Ingénieure QA Automatisation",
    salary: 58000,
    skills: ["Cypress", "Test Automation", "CI/CD"],
    joinDate: "2019-01-15",
    email: "maelys.gauthier@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 48,
    firstName: "Hugo",
    lastName: "Martinez",
    age: 38,
    department: "Management",
    position: "Directeur de Projet",
    salary: 74000,
    skills: ["Risk Management", "Stakeholder Management", "Agile Coaching"],
    joinDate: "2016-08-22",
    email: "hugo.martinez@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Spanish"]
  },
  {
    id: 49,
    firstName: "Léonie",
    lastName: "Dufour",
    age: 27,
    department: "Marketing",
    position: "Community Manager",
    salary: 40000,
    skills: ["Social Media", "Influencer Marketing", "Brand Voice"],
    joinDate: "2021-02-28",
    email: "leonie.dufour@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"]
  },
  {
    id: 50,
    firstName: "Sophie",
    lastName: "Leroy",
    age: 31,
    department: "Marketing",
    position: "Responsable marketing digital",
    salary: 52000,
    skills: ["SEO", "Google Analytics", "Content Marketing", "Social Media"],
    joinDate: "2021-01-05",
    email: "sophie.leroy@company.com",
    projects: ["Project Epsilon"],
    isActive: false,
    languages: ["French", "English", "Italian"]
  }
];
```

1. **Challenge: Get the First Name of the First Employee**
    - **Functions**: `getFirstEmployeeFirstName`
    - **Input**: `employees`
    - **Output**: `"Jean"`
    - **Solution**: 
    ```javascript
    function getFirstEmployeeFirstName(employees) {
        return employees[0].firstName;
    }
    ```

2. **Challenge: Get the Last Name of the Last Employee**
    - **Functions**: `getLastEmployeeLastName`
    - **Input**: `employees`
    - **Output**: `"Leroy"`
    - **Solution**: 
    ```javascript
    function getLastEmployeeLastName(employees) {
        return employees[employees.length - 1].lastName;
    }
    ```

3. **Challenge: Get the Department of Employee with ID 5**
    - **Functions**: `getEmployeeDepartmentById`
    - **Input**: `employees, 5`
    - **Output**: `"Marketing"`
    - **Solution**: 
    ```javascript
    let getEmployeeDepartmentById =(arr, id) =>{
  for(let i = 0; i < arr.length; i++){
    if(arr[i].id == id){
      console.log(arr[i].department);
    }
    }
    }
    getEmployeeDepartmentById(employees,1);
    ```

4. **Challenge: Count How Many Employees Are in the Array**
    - **Functions**: `countEmployees`
    - **Input**: `employees`
    - **Output**: `50`
    - **Solution**: 
    ```javascript
    let getEmployeeDepartmentById =(arr, id) =>{
  arr.forEach(elm =>{
    if(elm.id == id){
      console.log(elm.department)
    }
  
        })
        }
        getEmployeeDepartmentById(employees,1)
        
    ```

5. **Challenge: Check if Any Employee Is Inactive (`isActive: false`)**
    - **Functions**: `hasInactiveEmployees`
    - **Input**: `employees`
    - **Output**: `true`
    - **Solution**: 
    ```javascript
   
        let hasInactiveEmployees = (arr) =>{
        let reponse = false;
        for(let i =0; i < arr.length; i++){
            
            if(arr[i].isActive == false){
                reponse = true;
            }
        }
        console.log(reponse)
        }

        hasInactiveEmployees(employees);
    ```

6. **Challenge: Calculate the Average Age of All Employees**
    - **Functions**: `calculateAverageAge`
    - **Input**: `employees`
    - **Output**: `31.2`
    - **Solution**: 
    ```javascript
    let calculateAverageAge = (arr) =>{
    let avg = 0;
    for(let i = 0; i < arr.length; i++){
        avg +=arr[i].age;
    }
    console.log(avg/(arr.length))
    }
    calculateAverageAge(employees)


    let getHighestPaidEmployee = (arr) =>{
    let hightsalary = arr[0].salary;
    let index = 0;
    for(let i =0; i <arr.length; i++){
        if(arr[i].salary > hightsalary){
        hightsalary = arr[i].salary
        index = arr.indexOf(arr[i]);
        }
    }
    console.log(arr[index])
    
    }

    getHighestPaidEmployee(employees)
    ```

7. **Challenge: Find the Employee with the Highest Salary**
    - **Functions**: `getHighestPaidEmployee`
    - **Input**: `employees`
    - **Output**: `{ id: 34, firstName: "Paul", lastName: "Leclercq", ... }`
    - **Solution**: 
    ```javascript
    function getHighestPaidEmployee(employees) {
        return employees.reduce((max, emp) => emp.salary > max.salary ? emp : max, employees[0]);
    }
    ```

8. **Challenge: Count How Many Employees Are in the "Développement" Department**
    - **Functions**: `countEmployeesInDepartment`
    - **Input**: `employees, "Développement"`
    - **Output**: `15`
    - **Solution**: 
    ```javascript
    let countEmployeesInDepartment = (arr) =>{
  let count = 0;
  for(let i =0; i <arr.length; i++){
    if(arr[i].department === "Développement"){
      count++;
    }
  }
  console.log("employees in department Development: " +count)
    }
    countEmployeesInDepartment(employees)



    let getUniqueDepartments =(arr)=>{
    let newarr = [];
    for(let i =0; i < arr.length; i++){
        if(!newarr.includes(arr[i].department)){
        newarr.push(arr[i].department);
        }
    }
    console.log(newarr)
    
    }

    getUniqueDepartments(employees)
    ```

9. **Challenge: List All Unique Department Names**
    - **Functions**: `getUniqueDepartments`
    - **Input**: `employees`
    - **Output**: `["Développement", "Design", "Management", "Marketing"]`
    - **Solution**: 
    ```javascript
    function getUniqueDepartments(employees) {
        let departments = employees.map(emp => emp.department);
        return [...new Set(departments)];
    }
    ```

10. **Challenge: Check if Any Employee Has No Projects Assigned**
    - **Functions**: `hasEmployeesWithoutProjects`
    - **Input**: `employees`
    - **Output**: `true`
    - **Solution**: 
    ```javascript
            let hasEmployeesWithoutProjects = (arr) =>{
  let reponse = false;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].projects[0] == null){
      reponse = true;
    }
  }
  console.log(reponse)
    }
    hasEmployeesWithoutProjects(employees)
    ```

11. **Challenge: Count How Many Employees Speak English**
    - **Functions**: `countEnglishSpeakingEmployees`
    - **Input**: `employees`
    - **Output**: `45`
    - **Solution**: 
    ```javascript
       let countEnglishSpeakingEmployees = (arr) =>{
  let count = 0;
  for(let i = 0; i <arr.length; i++){
  if(arr[i].languages.includes("English")){
    count++;
  }
    }
    console.log(count)
    }
    countEnglishSpeakingEmployees(employees)
    ```

12. **Challenge: Find All Employees Who Work on "Project Gamma"**
    - **Functions**: `getEmployeesByProject`
    - **Input**: `employees, "Project Gamma"`
    - **Output**: `[ { id: 1, firstName: "Jean", ... }, { id: 2, firstName: "Marie", ... }, ... ]`
    - **Solution**: 
    ```javascript
        let getEmployeesByProject = (arr, projectName) =>{
  for(let i = 0; i <arr.length; i++){
  
    if(arr[i].projects.includes(projectName)){
      return arr[i];
    }
    }
    }
    console.log(getEmployeesByProject(employees, "Project Gamma"))
    ```

13. **Challenge: Find Employees Whose Last Name Starts with 'L'**
    - **Functions**: `getEmployeesByLastNameInitial`
    - **Input**: `employees, 'L'`
    - **Output**: `[ { id: 5, lastName: "Leroux", ... }, { id: 8, lastName: "Laurent", ... }, ... ]`
    - **Solution**: 
    ```javascript
        let getEmployeesByLastNameInitial = (arr, startwith) =>{
  for(let i =0; i < arr.length; i++){
  let splitted = arr[i].firstName.split('');

    if(splitted[0] == startwith){
      console.log(arr[i])
        }
    }
    }
    getEmployeesByLastNameInitial(employees, 'L')
    ```

14. **Challenge: Calculate the Average Salary per Department**
    - **Functions**: `calculateAverageSalaryByDepartment`
    - **Input**: `employees`
    - **Output**: `{ "Développement": 60000, "Design": 50000, ... }`
    - **Solution**: 
    ```javascript
    let calculateAverageSalaryByDepartment =(arr) =>{
    let count = 0;
    let depa = {};
    let departements = [];
    for(let i =0; i < arr.length; i++){
    if(!departements.includes(arr[i].department)){
        departements.push(arr[i].department)
        count ++;
    }
    }
    
    for(let j =0; j < arr.length; j++){
        if (depa[arr[j].department]) {
            count++;
        depa[arr[j].department] += arr[j].salary;
        } else {
        depa[arr[j].department] = arr[j].salary;
        }
        
    }
    // console.log(depa)
    }

    calculateAverageSalaryByDepartment(employees)
    ```

15. **Challenge: Find Employees Who Joined After 2020**
    - **Functions**: `getEmployeesJoinedAfterYear`
    - **Input**: `employees, 2020`
    - **Output**: `[ { id: 13, firstName: "Julie", ... }, { id: 18, firstName: "Romain", ... }, ... ]`
    - **Solution**: 
    ```javascript
    let getEmployeesJoinedAfterYear = (arr, year) =>{ 
  let newarr = [];
        for(let i = 0; i< arr.length; i++){
        
        if(arr[i].joinDate >= year+"-01-01"){
            newarr.push(arr[i]);
        }
        }
        // console.log(newarr)
        }
        getEmployeesJoinedAfterYear(employees, 2020)
    ```

16. **Challenge: List Employees Who Speak More Than 2 Languages**
    - **Functions**: `getMultilingualEmployees`
    - **Input**: `employees`
    - **Output**: `[ { id: 3, firstName: "Pierre", ... }, { id: 5, firstName: "Camille", ... }, ... ]`
    - **Solution**: 
    ```javascript
        let getMultilingualEmployees = (arr) =>{
        let newarr = [];
        for(let i =0; i < arr.length; i++){
            if(arr[i].languages.length >= 2){
            newarr.push(arr[i]);
            }
        }
        // console.log(newarr)
        }
        getMultilingualEmployees(employees)
    ```

17. **Challenge: Find the Most Common Skill Among All Employees**
    - **Functions**: `getMostCommonSkill`
    - **Input**: `employees`
    - **Output**: `"python"`
    - **Solution**: 
    ```javascript
            
        let getMostCommonSkill =(arr) =>{
        let skills =[];
        let count = 0;
        for(let i  =0; i < arr.length; i++){
        let indexarr = arr[i];
        for(let j =0; j <indexarr.skills.length; j++){
            skills.push(indexarr.skills[j])
        }
        } 

        // here i got all skills in array
        let obj = {};

        for(let x = 0; x < skills.length; x++){
            if(obj[skills[x]]){
            obj[skills[x]]++;
            }else{
            obj[skills[x]]=1;
            }
            
        }

        //here i made a obj that contains skill and how many times duplicated

        let max = 0;
        let mustskills = '';
        for (let key in obj){
        let value = obj[key]
        if(max < value){
        max = value;
        mustskills = key
        
        }
        }
        // here i get the value and key of the must skills common

        console.log(mustskills)

        }
        getMostCommonSkill(employees)
    ```

