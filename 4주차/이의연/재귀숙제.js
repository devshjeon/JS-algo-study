10. power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent){
    if(exponent === 0){
        return 1;
    }
    return base * power(base, exponent-1);
}

11. factorial
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(number){
    if(number === 0) {
        return 1;
    }
   return number * factorial(number - 1);
}


12. productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
    
    // arr의 길이가 0이면 1을 반환함
    if(arr.length === 0){
        return 1;
    }
    
    // 배열의 첫번째만 담는 newArr 만듦
    let newArr = []; // 한번 돌 때마다 리셋
    newArr.push(arr[0]); 
    
    return newArr[0] * productOfArray(arr.slice(1));
}

13. recursiveRange
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(number){
    
    // 종료점 : number이 0일 때 0 반환
    if(number === 0){
        return 0;
    }
    
    return number + recursiveRange(number - 1);
}


14. fib
못 품

15. reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
    
    // 새 문자열 변수 지정
    let newStr = '';

    
    // 문자열 길이 담을 변수 지정
    let strNum = str.length - 1;
    
    // 종료점
    if(strNum < 0){
        return newStr;
    }
    
    newStr += str.charAt(strNum);
    
    newStr = newStr + reverse(str.substring(0, strNum));
    
    return newStr;
    
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
