// 1.İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.


function EnterName(name) {
    console.log(`${name} is active now`);
    
}
EnterName("Cümşüd")
EnterName("Rəsul")
EnterName("Xəlil")

// 2.Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın.

function getNumber(num1,num2,num3) {
    let max;
    if (num1>num2 && num1>num3) {
        max = num1
        
    }else if(num2>num1 && num2>num3){
          max = num2
          
    } 
    else {
       max = num3
        
    }
    console.log(max);
    
}
getNumber(5,20,15)


// 3.Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.


function getBook(rubl,dollar) {
    let result = rubl + (dollar * 75)
    console.log(`Bütün depozitlər üzrə məbləğ: ${result} rubl.`);
    
}

getBook(1200,20)


// 5.Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.

function enterNumber(a,b) {
    switch (true) {
        case (a > b ):
            
           return b
        case (a < b ):
            
           return a
    
        default:
            return "Bu ədədlər bərabərdir"
    }
    
    
}

console.log(enterNumber(34,12));

// 6.Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');  //  10 qaytaracaq


function calc(a , b ,c) {
    switch (c) {
        case "+":
            
           return a+b
        case "-":
            
           return a-b
        case "*":
            
           return a*b
        case "/":
            
           return a/b
    
        default:
          return
    }
}


console.log(calc(15,10,"+"));
console.log(calc(15,10,"-"));
console.log(calc(15,10,"*"));
console.log(calc(15,10,"/"));


// 7.Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq

function isLucky(number) {
    if (number < 100000 || number > 999999) {
        return false
    }
    const str = number.toString().split("")
    const sum1 = parseInt(str[0]) +  parseInt(str[1]) +  parseInt(str[2])
    const sum2 = parseInt(str[3]) +  parseInt(str[4]) +  parseInt(str[5])
  
    return sum1 === sum2
 
}

console.log(isLucky(234801));


// 8.Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
// Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
// Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq.



function capitalWords(text) {
    let list =text.split(" ")
    let result = ""
   
    for (let i = 0; i < list.length; i++) {
       if (list[i].length > 0) {
        result += list[i][0].toUpperCase() + list[i].slice(1)
       }
         if(i < list.length - 1) {
            result += " ";
    }
        
    }
    return result
}

console.log(capitalWords("Hello my name is Harry"));

// 9.Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven() funksiyasını yazın.


function isEven(number) {
    if (number % 2 ===0) {
        return true
    } else {
        return false
    }
}
console.log(isEven(30));

// 10.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +7123456789

// function isvalidnumber(telnumber) {
//    const str =telnumber.toString()
//     const onlyNumber = str.slice(2);  
//    return onlyNumber.length ===9 && str.startsWith("+7")
// }


// console.log(isvalidnumber("+712345678"));


// 15.Verilmiş cümlədəki ən uzun sözü qaytaran `longestWord()` funksiyasını yazın.
// Məsələn, `longestWord("Javascript is a powerful language")` çağırıldıqda `"powerful"` qaytarmalıdır.

function longestWord(text) {
    let list =  text.split(" ")
    let longest = "";
    for (let word of list) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest
    
}

console.log(longestWord("Javascript is a powerful language"));



// 18.Verilmiş stringi tərsinə çevirən `reverseArray()` funksiyasını yazın.
// Məsələn, `reverseArray("1, 2, 3, 4, 5")` çağırıldıqda `"5, 4, 3, 2, 1"` qaytarmalıdır.

function reverseArray(numbers) {
    let str = numbers.split(", ")
    let array = str.reverse().join(",")
    return `"${array}"`
    
}

console.log(reverseArray("1, 2, 3, 4, 5"));


// 19.İstifadəçi adı və yaş parametr kimi qəbul edən və `"[Ad] is [Yaş] years old"` mesajını qaytaran `userInfo()` funksiyasını yazın.
// Məsələn, `userInfo("Murad", 25)` çağırıldıqda `"Murad is 25 years old"` qaytarmalıdır.

function userInfo(Name,years) {
    console.log(`${Name} is ${years} years old`);
    
}
userInfo("Cümşüd",21)

// 20.Daxil edilən mətnin hər bir simvolunun ASCII dəyərini qaytaran `charCodes()` funksiyasını yazın.
// Məsələn, `charCodes("ABC")` çağırıldıqda '65, 66, 67' qaytarmalıdır.

function charCodes(letters) {
    let result =""
    for (let i = 0; i < letters.length; i++) {
        result +=letters.charCodeAt(i)
        if (i < letters.length - 1) {
            result +=","
        }
        
    }
    return result
}

console.log(charCodes("ABC"));



// 21.Verilmiş ədədin faktorialını qaytaran bir `factorial()` funksiyası yazın.
// Məsələn, `factorial(5)` çağırıldıqda `120` qaytarmalıdır.

function factorial(number) {
    if(number < 0) return undefined
    let result = 1
    for (let i = 2; i <= number; i++) {
        
        result *=i
    }
    return result
}

console.log(factorial(5));

