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



// 4.İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və
// onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.
// Birdən ona qədər rəqəmin daxil edilməsi zamanı  bir söz göstərilir.(bir ,iki, üç və.s)
// Hər hansı digər iki rəqəmli rəqəmi daxil edilməsi zamanı, boşluqla ayrılmış iki söz göstərilir,
// məsələn, "iyirmi bir".


function numberToText(num) {
    if (num.length === 1) {
        return singleDigjit(num)
    }else if(num.length === 2 && num[1]=== "0"){
        return doubleDigjit(num[0]) 
    }else if(num.length === 2 && num[1] !== "0"){
        return doubleDigjit(num[0]) + " " + singleDigjit(num[1])
}
}

console.log(numberToText("84"));


function singleDigjit(num) {
    switch (num) {
        case "1":
            return "bir";
        case "2":
            return "iki";
        case "3":
            return "üç";
        case "4":
            return "dörd";
        case "5":
            return "beş";
        case "6":
            return "altı";
        case "7":
            return "yeddi";
        case "8":
            return "səkkiz";
        case "9":
            return "doqquz";
    }
}

function doubleDigjit(num) {
    switch (num) {
        case "1":
            return "on";
        case "2":
            return "iyirmi";
        case "3":
            return "otuz";
        case "4":
            return "qırx";
        case "5":
            return "əlli";
        case "6":
            return "altmış";
        case "7":
            return "yetmiş";
        case "8":
            return "səksən";
        case "9":
            return "doxsan";
    }
}


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


function isEven(numb) {
    if (numb % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(40));

// 10.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +7123456789

function isvalidnumber(telnumber) {
    const onlyNumber = telnumber.slice(1);  
   if (onlyNumber.length ===11 && telnumber.startsWith("+7")) {
    return true
   } else {
    return "Yanlış daxil edilmişdir"
   }
}


console.log(isvalidnumber("+7123456789"));


// 11.Mətni parametr kimi qəbul edən və bu mətndəki hərflərin sayını qaytaran numCounter funksiyasını yazın.
// "15263538479359486()-="';:!@#$%^&*()"
// REGEX()


function numCounter(text) {
    let result =text.match(/[a-zA-Z]+/g).join("")
    console.log(result.length);
    
}

numCounter("hello world12345?.,!@#$%^&*()")






// 12.Verilmiş ədədin sadə olub-olmadığını yoxlayan `isPrime()` funksiyasını yazın.
// Məsələn, `isPrime(7)` çağırıldıqda `true`, `isPrime(8)` çağırıldıqda `false` qaytarmalıdır.

function isPrime(Number) {
    let j = Number
    let cnt = 0
    while (j > 0) {
        if (Number % j === 0) {
            cnt++
           
            
        }
        j--
    }
    if (cnt === 2) {
        return true
    } else {
        return false
    }
}

console.log(isPrime(7));

// 13.Verilmiş ədədin rəqəmlərinin cəmini qaytaran `sumOfDigits()` funksiyasını yazın.
// Məsələn, `sumOfDigits(1234)` çağırıldıqda `10` qaytarmalıdır (1 + 2 + 3 + 4 = 10).

function sumOfDigits(digits) {
    let str = digits.toString().split("")
   let sum =Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3])
     return sum
    
}


console.log(sumOfDigits(1234));


// 14.Verilmiş mətnin palindrom olub-olmadığını yoxlayan `isPalindrome()` funksiyasını yazın.
// Məsələn, `isPalindrome("level")` çağırıldıqda `true`, `isPalindrome("hello")` çağırıldıqda `false` qaytarmalıdır.



function isPalindrome(text) {
    let reversText = text.split("").reverse("").join("")
    
    if (reversText === text) {
        return true
    } else {
        return false
    }
    
}
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));





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


// 16.Daxil edilən iki tarix arasındakı günlərin sayını qaytaran `daysBetweenDates()` funksiyasını yazın.
// Məsələn, `daysBetweenDates("2025-04-01", "2025-04-10")` çağırıldıqda `9` qaytarmalıdır.


function daysBetweenDates(date1,date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d1 -d2)
   
    const Days =diffTime / (1000 * 60 * 60 *24)
    
    return Days;
    
}

console.log(daysBetweenDates("2025-04-01", "2025-04-10"));



// 17.Verilmiş stringi tərsinə çevirən `reverseArray()` funksiyasını yazın.
// Məsələn, `reverseArray("1, 2, 3, 4, 5")` çağırıldıqda `"5, 4, 3, 2, 1"` qaytarmalıdır.

function reverseArray(numbers) {
    let str = numbers.split(", ")
    let array = str.reverse().join(",")
    return `"${array}"`
    
}

console.log(reverseArray("1, 2, 3, 4, 5"));


// 18.İstifadəçi adı və yaş parametr kimi qəbul edən və `"[Ad] is [Yaş] years old"` mesajını qaytaran `userInfo()` funksiyasını yazın.
// Məsələn, `userInfo("Murad", 25)` çağırıldıqda `"Murad is 25 years old"` qaytarmalıdır.

function userInfo(Name,years) {
    console.log(`${Name} is ${years} years old`);
    
}
userInfo("Cümşüd",21)

// 19.Daxil edilən mətnin hər bir simvolunun ASCII dəyərini qaytaran `charCodes()` funksiyasını yazın.
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



// 20.Verilmiş ədədin faktorialını qaytaran bir `factorial()` funksiyası yazın.
// Məsələn, `factorial(5)` çağırıldıqda `120` qaytarmalıdır.

function factorial(number) { 
    let result = 1
    for (let i = 2; i <= number; i++) {
        
        result *=i
    }
    return result
}

console.log(factorial(5));








