// sort an arry using for loop 
// const numbers=[54,87,01,54,2,1,128,2,48,2488,177,]
// const ar=[]
// let temp
// for(let i=0;i<numbers.length;i++){
//    for(let j=i;j<numbers.length;j++){
//         if(numbers[i]>numbers[j]){
//            temp=numbers[i]
//            numbers[i]=numbers[j]
//            numbers[j]=temp
//         }
//    }
// }

// console.log(numbers);


//  fibonachchi serise 
// const fibo=[0,1];
// for(let i=2;i<10;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2]
// }
// console.log(fibo);

//  fibonachchi serise 
//  function fibonachchi(number){
//     if(typeof number !='number'){
//         return 'Give a valid number'
//     }
//     if(number<2){
//         return 'give a number grater than 2'
//     }

//      const fibo =[0,1];
//      for(let i=2;i<number;i++){
//          fibo[i]=fibo[i-1]+fibo[i-2];
//      };
//     return fibo
//  }

//  console.log(fibonachchi(10));


//  find max and min number in an arrya using for loop 
// const a=[54,1,80,20,3];

// function largestNumber (number){
//     let max =number[0];

//     for(let i=0; i < number.length; i++){
//         // const element =number[i];
//         if (number[i]>max){
//             // max=element;
//             max=number[i];
//         }
//     }
//     return max
// }

// console.log(largestNumber(a));



// find even number from an array 
const a=[54,1,80,20,,4,54,87,24,34,31,3];

function evenNumber (number){
    let even =number[0];
    let arr =[]
    for(let i=0; i < number.length; i++){
        if (number[i]%2 ==0){
            arr.push(number[i])
        }
    }
    return arr
}

console.log(evenNumber(a));



// remove duplicate value from an array 

    const age =[45,25,45,32,25,78,45,30,37,38,23,32];
    const nam = ['nizam','kamal','aman','jamal','aman','nizam'];

    function removeDuplictaeValue (arr){
    const newArr =[];

    for(const element of arr){
        if(newArr.indexOf(element) == -1){
            newArr.push(element)
        }
    }
    return newArr
    }

    console.log( removeDuplictaeValue(nam));
    console.log( removeDuplictaeValue(age));


    // reverse a string 

    const myString = 'I Love Bangladesh';

    function reverse(text){
        let newString=''
        for(const element  of text){
            newString= element + newString;
        }

        return newString;
    }

    console.log(reverse(myString));

    