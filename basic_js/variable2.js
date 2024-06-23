//alert(3+3) //we are using nodejs not browser
//Datatypes 
//number,bigint,string,boolean,null(it is object type ),undefined(it is undefined),symbol,OBJECT

let names="archit"
let age=23
console.log(typeof names)
console.log(typeof null)
console.log(typeof undefined)

//Datatype Conversion 

let score ="33abc"
console.log(typeof score)
console.log(typeof(score))
let score_num=Number(score)
console.log(typeof score_num)
console.log(score_num)

console.log("For 0")
let emp =null
console.log(typeof emp)
console.log(typeof(emp))
let emp_null=Number(emp)
console.log(typeof emp_null)


//Concat the string
console.log("1"+2)//answer is 12 string type
console.log("1"+2+2)//answer is 122 string type
console.log("Null compare")
console.log(null>0);
console.log(null>=0);
console.log(null==0);//== work diffrentlt from >=

console.log("stricct compare")
console.log("2"===2)