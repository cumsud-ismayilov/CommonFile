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





18,20,23,25