// 1.Konsola mesaj verin: «My name is Murad».
let a1 = "My name is Cümşüd";
console.log(a1);
// 2.Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin. Bu dəyişənin dəyərini konsolda göstərin.

const name = "Cümşüd";
console.log(name);

// 4.Depodaki bütün kitabların ümumi dəyərini konsola çıxarın. Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində və depodaki kitab sayı bookAmount dəyişənində saxlanılır.

let bookPrice = 210;
let bookAmount = 20;
let totalPrice = bookPrice * bookAmount;
console.log(totalPrice);
// 5.Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın. kmhSpeed dəyişəni avtomobilin sürətinin "saatda kilometrlərlə" dəyərini saxlayır. msSpeed dəyişəni təyin edin və ona eyni sürət dəyərini "saniyədə metrə" çevirərək yazın.
let kmhspeed = 1800;
let msSpeed = kmhspeed / 0.36;
console.log(msSpeed);
// 6.İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı günlərin sayını göstərən proqram yazın.
// let year = prompt("Neçənci ildə doğulmusan");
// let recentlyYear = 2025;
// let live = recentlyYear - year;
// let liveDay = live * 365;
// console.log(liveDay);

// 7.Ədədlər üzərində əməliyyatları yerinə yetirin. num dəyişənində iki rəqəmli ədəd saxlanılır. Belə proqram yazın:

// Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// 3-ə bölünmədən qalan bu ədədin qalığını.

let num = 8;
let num2 = num ** 5;
let num3 = num2 % 3;
console.log(num2, num3);

// 8.firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır. Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
let firstName = "Cümşüd";
let lastName = "İsmayılov";
console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`);

// 9.Şablon mətnlərdən istifadə edərək, konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]” mesajını çıxarın.

let firstName2 = "Cümşüd";
let lastName2 = "İsmayılov";
console.log(`Sizi bir daha görməyimizə şadıq, ${firstName2} ${lastName2}`);

// 10.Addaki hərflərin sayını konsola çıxarın. fullName dəyişənində istifadəçinin tam adı saxlanılır. Probel hərf olaraq sayılmır.
let fullName = "Cümşüd İsmayılov";
let cleanedName = fullName.replaceAll(" ", "");
console.log(cleanedName.length);

//  11.İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın. fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini konsola çıxaran proqram yazın.
let fullName2 = "Ismayılov Cümşüd";
let firstletter = fullName2.charAt(0);
let secondletter = fullName2.charAt(10);
console.log(firstletter, secondletter);

// 12.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

let fullName3 = "Cümşüd İsmayılov";

console.log(fullName3.substring(7, 16), fullName3.substring(0, 6));

// 13.İstifadəçidən adını daxil etməsini istəyin. Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
// let Name =prompt("Adınızı daxil edin")
// console.log(`Salam ${Name}`)

// 14.İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin. Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.
// let Num1 =+prompt("Birinci ədədi daxil edin");
// let Num2 =+prompt("İkinci ədədi daxil edin");
// console.log(Num1+Num2)
// console.log(Num1-Num2)
// console.log(Num1*Num2)
// console.log(Num1/Num2)

// 15.12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın.

let Num3 = 12345;
let Num4 = 98765;
let Hasil = Num3 * Num4;

console.log(String(Hasil).charAt(5));

// 17.Rəqəmlərin cəmini göstərən proqram yazın. İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.
// let Str =prompt("4 rəqəmli ədəd daxil edin")
// let list = Str.split("")
// let number1=+list[0]
// let number2=+list[1]
// let number3=+list[2]
// let number4=+list[3]
// console.log(number1 + number2 + number3 + number4)

// 18.İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin. Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və konsola «Salam, !» mesajını çıxarır.
//  let UserInfo =prompt("Adınızı və Soyadınızı daxil edin");
//  console.log(`Salam, ${UserInfo}!`)

// 19.Qiyməti mətn halına salan proqram tərtib edin. İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// let cost = prompt("qiymeti daxil edin(Qiymət (230.90) olsun)")
// console.log(cost.replace("." , " manat "))

// 21.İstifadəçidən soyad, ad və ata adını istəyən, soyadı və baş hərfləri konsola çıxaran proqram tərtib edin. Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let Userİnfo2 = prompt("Soyadınızı ,Adınızı və Ata Adınızı ardıcıllıqla daxil edin")
// let list2=Userİnfo2.split(" ")
// let SurName=list2[0]
// let Name=list2[1]
// let FatherName=list2[2]
// console.log(`${SurName} ${Name[0]}.${FatherName[0]}.`) 

// 22.Depozitdən mənfəətin hesablanması üçün proqram yazın. Proqram istifadəçidən əmanətin məbləğini, müddətini və faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.

// let Amount = prompt("Əmanətin məbləğini daxil edin")
// let time = prompt("Müddətini daxil edin")
// let percent =prompt("Faiz dərəcəsini daxil edin")

// let result = (Amount * time * percent) / 100
// console.log(`Mənfəət ${result}-manatdır.`)

// 24.İstifadəçidən yaşını soruşun. Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın. Əks halda «Access granted» bildirişini çıxarın.

// let Age = prompt("Yaşınızı daxil edin")
// if (Age < 18) {
//     alert("Access denied")
// } else {
//     alert("Access granted")
// }


// 26.İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
// Uzun il 4-ə qalıqsız bölünən ildir.
// Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
// «İl uzun il deyil» və ya «İl uzun ildir» mesajını çıxarın.

// let Year = prompt("Bir il daxil edin")
// console.log(Year)
// if (Year % 4 === 0) {
//     console.log("İl uzun ildir")
// } else {
//     console.log("İl uzun il deyil")
// }

31;
// let p = 8;
// let q = p-- - --p + p++ + ++p;
// console.log(p, q);
// 8,16

32;
// let a = 6,
// b = 4,
// c = 2;

// let x = ++a - b-- + c++ - --b + a++;
// let y = a-- + --c - ++b + x++ - --a;

// console.log(a, b, c, x, y);
// 6,3,2,11,11

// 33.
// let a = 7,
// b = 3,
// c = 5;

// let x = a-- - ++b + c++ - --a + b++ - --c + a++ - b-- + c++;
// let y = --x + a++ - --b + c-- - x++ + ++a - b++ + --c - x--;
// let z = a-- + ++b - --c + x++ - --y + b-- - ++x + c++ - --a + y++;

// console.log(a, b, c, x, y, z);

// 6,4,4,8,11,10


// 27. if...else operatoru ilə yazılmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın.


// let id = +prompt("enter product id:");
// switch (id) {
//     case 1:
//         alert("Available 10 pcs.");
//         break;
//     case 2:
//         alert("Available 256 pcs.");
//         break;
//     case 3:
//         alert("Available 53 pcs.");
//         break;
//     case 4:
//         alert("There are 3 available.");
//         break;

//     default:
//         break;
// }

// 28.İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın

// let Gender = prompt("Cinsiniz nədir ?")

// Gender = "M" ? console.log("Gender:Male" ): Gender ="F" ? console.log("Gender:Female"): console.log("Doğru daxil etməmisiniz");

// 29.Ayın adını mətnlə konsola yazdıran bir program yazın. İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın.

// let Month=+prompt("Ayin nömrəsini daxil edin")
// switch (Month) {
//     case 1:
//         console.log("Yanvar")
//         break;
//     case 2:
//         console.log("Fevral")
//         break;
//     case 3:
//         console.log("Mart")
//         break;
//     case 4:
//         console.log("Aprel")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("Iyun")
//         break;
//     case 7:
//         console.log("Iyul")
//         break;
//     case 8:
//         console.log("Avqust")
//         break;
//     case value:
//         console.log("Sentyabr")
//         break;
//     case 9:
//         console.log("Oktyabr")
//         break;
//     case 10:
//         console.log("Noyabr")
//         break;
//     case 11:
//         console.log("Dekabr")
//         break;


//     default:
//         console.log("Yaanlış daxil edilmişdir")


// 30.İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın. İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin. Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın. Daxil edilmiş dəyərə validator əlavə edin. İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

// let Date =prompt("Tarixi daxil edin (Bu formatda: 2009.12.19)")
// let list3 = Date.split(".  ")
// console.log(list3)


// 34.Ədədin Müsbət, Mənfi və ya Sıfır Olduğunu Yoxla Verilmiş ədədin müsbət, mənfi və ya sıfır olduğunu müəyyən edin.

// let Number= prompt("Bir ədəd daxil edin")
// if (Number>0) {
//     console.log("Ədəd müsbətdir");
    
// }else if(Number<0){
// console.log("Ədəd mənfidir");

// }else if(Number===0){
//  console.log("Ədəd sıfıra bərabərdir");
 
// }
//  else {
//     console.log("Ədəd düzgün daxil edilməyib");
    
// }



35.
// Üç Ədəddən Ən Böyüyünü Tap
let a2 = 5,  b2 = 8, c2 = 3;
if (a2>=b2 && a2>=c2) {
    console.log("Ən böyük ədəd a2-dır");
    
}else if(b2>=a2 && b2>=c2){
console.log("Ən böyük ədəd b2-dır");
}
 else {
    console.log("Ən böyük ədəd c2-dır");
}



// 36.
// Cüt və ya Tək Ədəd
// Verilmiş ədədin cüt və ya tək olduğunu ternary operatoru ilə müəyyən edin.

// let Number4 = prompt("Bir ədəd daxil edin")

// Number4 % 2 ===0 ? console.log("Ədəd cütdür") : console.log("Ədəd təkdir");

37.
// Kvadratın Sahəsi və Perimetri
// Bir tərəfi a olan kvadrat üçün sahəni və perimetri tapın.

// let trf = "a"

// let Sahə = trf * trf
// console.log(Sahə);



// 38.Qiymətə Görə Nəticə (switch-case)
// Qiymət verilir (0-100). Aşağıdakı qaydaya əsasən nəticəni switch-case ilə yazın:

// 90-100: Əla
// 75-89: Yaxşı
// 60-74: Orta
// 0-59: Zəif
// Qeyd: switch(true) üsulu ilə istifadə edin.


// let qiymet = prompt("Qiymeti daxil edin")
// switch (true) {
//     case (qiymet >= 90 && qiymet <= 100):
//         console.log("Əladır");
        
//         break;
//     case (qiymet >= 75 && qiymet <= 89):
//         console.log("Yaxşıdır");
        
//         break;
//     case (qiymet >= 60 && qiymet <= 74):
//         console.log("Ortadır");
        
//         break;
//     case (qiymet >= 0 && qiymet <= 59):
//         console.log("Zəifdir");
        
//         break;

//     default:
//         console.log("Düzgün qiymet daxil edilməyib");
        
//         break;
// }




// 39.0-50 Arasında Təsadüfi Ədəd
// 0 ilə 100 arasında Math.random() ilə təsadüfi ədəd yaradın və onun 0-50 arasında olub olmadığını yoxlayın.

let eded = Math.floor(Math.random()*101)
if (eded>=0 && eded<=50) {
    console.log("Ədəd 0 la 50 arasinda yerlesir");
    
} else {
    console.log("Ədəd 50-den böyüktür");
    
}



// 40.Sadə Kalkulyator (switch-case)
// İki ədəd və operator (+, -, *, /) verilib. switch-case ilə əməliyyatı icra edin. let a = 5, b = 3, op = "*";

let a = 5, b = 3, op = "*" 
let result;
switch (op) {
    case "+":
       result= a+b
        
        break;
    case "*":
       result= a*b
        
        break;
    case "-":
       result= a-b
        
        break;
    case "/":
       result= a / b
        
        break;

    default:
        result = "Operator düzgün deyil"
        break;
}

console.log(result);



