## Single-Function Challenges (Use One Function)

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
    

11. **Challenge: Convert an Array to a Set**
    - **Function**: `new Set()`
    - **Input**: `[1, 2, 2, 3, 3]`
    - **Output**: `{1, 2, 3}`

12. **Challenge: Remove the First Element from an Array**
    - **Function**: `shift()`
    - **Input**: `[1, 2, 3]`
    - **Output**: `1`

13. **Challenge: Create an Array with Values from a String**
    - **Function**: `split()`
    - **Input**: `"apple,banana,cherry"`, `","`
    - **Output**: `["apple", "banana", "cherry"]`

14. **Challenge: Check if an Array Includes a Specific Value**
    - **Function**: `includes()`
    - **Input**: `[1, 2, 3]`, `2`
    - **Output**: `true`

15. **Challenge: Check if an Array Contains at Least One Element That Meets a Condition**
    - **Function**: `some()`
    - **Input**: `[1, 2, 3]`, `num => num % 2 === 0`
    - **Output**: `true`

16. **Challenge: Check if All Elements of an Array Meet a Condition**
    - **Function**: `every()`
    - **Input**: `[2, 4, 6]`, `num => num % 2 === 0`
    - **Output**: `true`

17. **Challenge: Find the First Element That Meets a Condition**
    - **Function**: `find()`
    - **Input**: `[1, 2, 3]`, `num => num > 1`
    - **Output**: `2`

18. **Challenge: Join Array Elements with a Custom Separator**
    - **Function**: `join()`
    - **Input**: `["apple", "banana", "cherry"]`, `"-"`
    - **Output**: `"apple-banana-cherry"`

19. **Challenge: Remove the Last Element from an Array**
    - **Function**: `pop()`
    - **Input**: `[1, 2, 3]`
    - **Output**: `3`

20. **Challenge: Sort an Array in Ascending Order**
    - **Function**: `sort()`
    - **Input**: `[3, 1, 4, 2]`
    - **Output**: `[1, 2, 3, 4]`

---

## Multi-Function Challenges (Use Multiple Functions)

1. **Challenge: Remove Duplicate Values from an Array**
   - **Functions**: `new Set()`, `Array.from()`
   - **Input**: `[1, 2, 3, 2, 1]`
   - **Output**: `[1, 2, 3]`

2. **Challenge: Combine Two Arrays and Remove Duplicates**
   - **Functions**: `concat()`, `new Set()`, `Array.from()`
   - **Input**: `[1, 2, 3]`, `[2, 3, 4]`
   - **Output**: `[1, 2, 3, 4]`

3. **Challenge: Reverse a String and Convert It to Uppercase**
   - **Functions**: `split()`, `reverse()`, `join()`, `toUpperCase()`
   - **Input**: `"hello"`
   - **Output**: `"OLLEH"`

4. **Challenge: Get the Unique Characters in a String**
   - **Functions**: `split()`, `new Set()`, `Array.from()`
   - **Input**: `"aabcc"`
   - **Output**: `["a", "b", "c"]`

5. **Challenge: Check if an Array Contains a Specific Value and Get Its Index**
   - **Functions**: `includes()`, `indexOf()`
   - **Input**: `[1, 2, 3, 4]`, `3`
   - **Output**: `true`, `2`

6. **Challenge: Filter Out All Odd Numbers and Sort the Result**
   - **Functions**: `filter()`, `sort()`
   - **Input**: `[1, 2, 3, 4, 5]`
   - **Output**: `[2, 4]`

7. **Challenge: Find the Maximum and Minimum Value in an Array**
   - **Functions**: `Math.max()`, `Math.min()`
   - **Input**: `[1, 2, 3, 4, 5]`
   - **Output**: `5`, `1`

8. **Challenge: Concatenate Strings with Custom Separator**
   - **Functions**: `split()`, `join()`
   - **Input**: `"apple banana cherry"`, `" "`, `"-"`
   - **Output**: `"apple-banana-cherry"`

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
