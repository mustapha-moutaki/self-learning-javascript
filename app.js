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
  
  // 1/first question
  let array = countries.length;
  console.log(array);
  //output:11
  
  
  2// second question
  
  
  
  // get the first element form an array
  // ===================================
  // first methode:------
  console.log(webTechs[0])
  // second methode:--------
  let shiftelement = webTechs.shift();
  console.log(shiftelement);
  //=====================================
  
  // there is shift ans inshifst and pop and push
  
  // get the last element form an array
  // ===================================
  let length = webTechs.length;
  let lastElement = webTechs[length-1];
  console.log(lastElement);
  
// get the middle element in array
  let middleElement =webTechs.length;
  console.log(webTechs[Math.floor(middleElement/2)]);


  let mixedDataTypes = [7, "hello", true, {name :'mohamed', age:14}, [1,3], function myfunc(){document,write("hello world")}];
  let mixedDataTypesSize = mixedDataTypes.length;
  console.log(mixedDataTypesSize)



  let itCompanies  = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
  console.log(itCompanies)
  

  let numberOfCompanies = itCompanies.length;
  console.log(numberOfCompanies);

  let arrlenght = itCompanies.length;
  let middleCompany = itCompanies[Math.floor(arrlenght/2)];
  console.log(middleCompany)
  
  
  
  
  
  
  
  
  
  
  
  