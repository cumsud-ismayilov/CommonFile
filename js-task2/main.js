1;
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
// Son dəyəri konsola çıxarın.

// let number = +prompt("İkirəqəmli ədəd daxil edin")
// while ( number<100) {
//       console.log(number);
//     number+=7

// }

2;
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

// let N = prompt("Bir ədəd daxil edin")
// let count =0
// while (count < N) {
//     console.log("I know how to use cycles");
//     count++

// }

// 3.Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

let b = 100;

while (b <= 999) {
  if (b % 10 === 0) {
    console.log(b);
  }
  b++;
}

4;
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

let a = 10;
let result = 0;

while (a <= 99) {
  if (a % 2 !== 0) {
    result += a;
  }
  a++;
}
console.log(result);

// 5.İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.

// let c = prompt("Bir eded daxil edin");
// let B = 100;
// let nəticə = 0;

// while (B <= 999) {
//   if (B % c === 0) {
//     nəticə += B;
//   }
//   B++
// }
// console.log(nəticə);




7.
// 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
// Alınan dəyəri konsola çıxarın.

let hasil = 1

for (let i = 1 ; i <= 10 ; i++) {
  hasil *= i
    
}
console.log(hasil);


// 8.İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// let text = prompt("Mətn daxil edin")
// for (let i = text.length-1; i >= 0; i--) {
//    console.log(text[i]);
   
    
// }

// 9.Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

let txt ="Hello.World."

let index="";
for( let i = 0 ; i < txt.length ; i++ ){
       if(txt[i] === "."){
          index = i
          
       }
        
}

console.log(index);

10.
// Mətndə rəqəmlərin olub olmadığını yoxlayan proqram yazın.
// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
// olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.

// let Message = prompt("Bir mətn daxil edin")

// let Result = "Reqem yoxdur";

// for (let i = 0 ; i<Message.length ; i++) {
    
//     if (!isNaN(Message[i]) && Message[i] !== " " ) {
//          Result = "Reqem var"
        
//     }
    
    
// }
// console.log(Result);






