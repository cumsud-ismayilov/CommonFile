// 1.Üç addan ibarət massiv yaradın.
// Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
// Massivi konsola çıxarın.

const Name = ["Cumshud", "Yusif", "Orxan"];
Name[1] = "Classified";
console.log(Name);

// 2.Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
// Massiv elementlərin düzün.
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
//Episode 4: New Hope
//Episode 5: Empire strikes back
//Episode 6: Return of the Jdi

let arr = ["New Hope", "The Empire Strikes Back", "Return of the Jdi"];

// console.log(`Episode 4: ${arr[0]}`);
// console.log(`Episode 4: ${arr[1]}`);
// console.log(`Episode 4: ${arr[2]}`);
for (let i = 0; i < arr.length; i++) {
  console.log(`Episode ${i + 4}: ${arr[0]}`);
}

// 3.Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
// Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək
// üçün proqram tərtib edin.
//  - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
// salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran
//  getAnnualSalary() funksiyasını yazın.
// - Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
// Ayın nömrəsini parametr kimi qəbul edən və salary massivindən
//  həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.
// Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
// - Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
// Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və
//  salary massivi əsasında həmin rüb üçün şöbənin bütün
// işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.
// Rüb - 3 aylıq bir müddətdir.

let salary = [
  [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
  [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
  [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
  [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
];

function getAnnualSalary() {
  let result = 0;
  for (let i = 0; i < salary.length; i++) {
    for (let j = 0; j < salary[i].length; j++) {
      result += salary[i][j];
    }
  }
  return result;
}

console.log(`İllik maaş: ${getAnnualSalary()}`);

function getMonthlySalary(num) {
  let result = [];
  for (let i = 0; i < salary.length; i++) {
    result.push(salary[i][num - 1]);
  }
  return result;
}

console.log(getMonthlySalary(1));

function getQuarterSalary(num) {
  let start = (num - 1) * 3;
  let end = num * 3;
  result = 0;
  for (let i = 0; i < salary.length; i++) {
    for (let j = start; j < end; j++) {
      result += salary[i][j];
    }
  }
  return result;
}
console.log(getQuarterSalary(4));

// 4.İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və
// ən kiçik ədədi konsola çıxaran proqram yazın.

// let num = prompt("Zəhmət olmasa 5 ədəd daxil edin")

// let array = num.split(",")

// const result = array.sort((a, b) => a - b)
// console.log(array[0]);

// 5.'32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli
// vergüllə əvəz edin.(Massivden istifade ederek)(join)

let text = "32, 31, 34, 36, 31";
let arry = text.split(",").join(";");
console.log(arry);

// 6.Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin;
// Massivi konsola çıxarın.

const GroupMate = ["Cumshud", "Akif", "Rəşad"];
GroupMate.push("Xəlil");
GroupMate.shift();
console.log(GroupMate);

// 8.Massivin maksimal dəyərini tapın.
// 10 rəqəmdən ibarət massiv yaradın.
// Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın.
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

const Number = ["4", "12", "3", "34", "23", "56", "89", "65", "20", "48"];
console.log(Math.max(...Number));

// 9.Massivin bütün elementlərinin dəyərin ikiqat artırın.
// 5 rəqəmdən ibarət massiv yaradın.
// Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.


let req = [65,23,12,98,102]

let newReq = req.map(item => item * 2)

console.log(newReq);
console.log(req);

// 10.Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
// Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın,
// hansıki proqramlaşma şöbəsinin işçilərini özündə saxlayacaq,
// yəni department özəlliyinin dəyəri «development» olan işçiləri.
let employees = [
  ["Jaylee Macy", "marketing"],
  ["John Smith", "management"],
  ["Blossom Hartley", "design"],
  ["Austin Carpenter", "marketing"],
  ["Joan Knowles", "development"],
  ["Sally Nunez", "management"],
  ["Laurel Ward", "development"],
  ["Lark Simon", "marketing"],
  ["Jane Stone", "management"],
  ["Courtney Olson", "development"],
];

let dev = [];
for (let i = 0; i < employees.length; i++) {
  if (employees[i][1] === "development") {
    dev.push(employees[i][0]);
  }
}
console.log(dev);

// 11.Elektron növbəni idarə etmək üçün proqram tərtib edin.
// İstifadəçidən məlumat tələb edən və növbəni yeniləyən proqram tərtib edin.

// - İstifadəçidən növbəni yeniləmək üçün məlumat tələb edin.
// - Əgər istifadəçi yeni müştərinin ad və soyadını daxil edibsə,
// proqram müştərini növbənin sonuna əlavə edir.
// - İstifadəçi boş bir dəyər daxil edərsə, proqram növbədə birincinin adını və
//  soyadını göstərir və onu növbədən çıxarır.
// - İstifadəçi «=» işarəsini daxil edərsə, proqram dayanır və növbə massivini konsola çıxarır.

const Users = [
  "Elgün Veliyev",
  "Resul Quluzade",
  "Cumshud Ismayilov",
  "Vahid Məmmədov",
];
// while (true) {
//     let askName = prompt("Adınızı və Soyadınızı daxil edin")
// if (askName === "=") {
//    console.log(Users);

//    break;

// }else if (askName === ""){

//     console.log(Users[0]);
// }else{
//     Users.push(askName)
//    console.log(Users);
// }
// }

// 12.Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri
// qaytaran sortArray funksiyasını yazın.
let array = [
  1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45,
  22,
];

function sortArray(num) {
  return num.sort((a, b) => a - b);
}

console.log(sortArray(array));

// 13.Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola
// bütün mənfi ədədləri çıxaran funksiya yazın.

const Arry2 = [-4, 6, -18, -76, -88, 0, -54];

function minusNumber(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      console.log(num[i]);
    }
  }
}
minusNumber(Arry2);

// 14.Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət
// ədədləri konsola çıxaran funksiya yazın.
// İterasiya üçün anonim funksiyadan istifadə edin.

const numbers = [18, -90, -76, 23, -12];

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(arr[i]);
    }
  }
})(numbers);

// 15.Geri çağırış funksiyalarını yazın (callback) printWithDashes, printWithHearts, printWithIndex.
// Massiv verilmişdir. 3 geri çağırış funksiyası yazın (callback): printWithDashes,
//  printWithHearts, printWithIndex, hansıki onlar belə çağırılan zamanı
// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);
// -array- const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// OUTPUT:
// kosnsolda çıxsın:

// ---

// Michael

// ---

// ---

// Trevor

// ---

// ---

// Franklin

// ---

// ---

// Lamar

// ---

// ---

// Jimmy

// ---

// <3<3<3<3 Michael <3<3<3<3
// <3<3<3<3 Trevor <3<3<3<3
// <3<3<3<3 Franklin <3<3<3<3
// <3<3<3<3 Lamar <3<3<3<3
// <3<3<3<3 Jimmy <3<3<3<3
// 0 - Michael
// 1 - Trevor
// 2 - Franklin
// 3 - Lamar
// 4 - Jimmy

const User = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
function printWithDashes(p) {
  console.log("---");
  console.log(p);
  console.log("---");
}
function printWithHearts(p) {
    console.log(`<3<3<3<3 ${p} <3<3<3<3`);
    
}
function printWithIndex(p,index) {
    console.log(`${index} - ${p}`);
    
}
User.forEach(printWithDashes);
User.forEach(printWithHearts);
User.forEach(printWithIndex);




// 16.Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə
//  çevirən kebabToUpper funksiyasını yazın.
// INPUT: console.log(kebabToUpper('first-user'));
// OUTPUT: FIRST_USER

function kebabToUpper(item) {
  return item.replace("-", "_").toUpperCase();
}

console.log(kebabToUpper("first-user"));

// 17.Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir.
// Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:

// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.
let number = [1, 5, -7, 3, -9, 4, -6, 2];
let newArr = number.map((item) => {
  return item < 0 ? Math.abs(item) : item * 2;
});
console.log(newArr);

//   18.Mətnlər massivini parametr kimi qəbul edən və massivin ilk üç simvoldan
//  ibarət elementini qaytaran funksiya yazın.
let names = [
  "Elvin",
  "Aysel",
  "Murad",
  "Zəhra",
  "Kamal",
  "Nigar",
  "Tunar",
  "Ləman",
];
function newName(name) {
  return name.map((item) => item.slice(0, 3));
}

console.log(newName(names));

//19.Adlar massivi verilib. A hərfi ilə başlayan orijinal massivdəki
// elementlərdən ibarət yeni massiv yaradın.

let Names = ["Akif", "Vahid", "Amin", "Nigar", "Lalə", "Asif"];

let LetterA = Names.filter((item) => item[0] === "A");
console.log(LetterA);

// 20.addTax() funksiyası yaradın. Verilmiş ƏDV-siz qiymətlərlə olan
// price massivini ona ötürün. addTax() funksiyasının köməyi ilə ƏDV ilə
// qiymətlərin daxil olduğu massiv yaradın və onu konsola çıxarın. ƏDV 20% təşkil edir.

let price = [30, 120, 450, 320, 600, 850];
let pricewithTax = addTax(price);
function addTax(prices) {
  return prices.map((price) => price + price * 0.2);
}

console.log(pricewithTax);

// 21.Rəqəmlər massivini parametr kimi qəbul edən və massivdə neçə tək və cüt ədədin
// olması barədə məlumatı qaytaran countEvensAndOdds() funksiyasını yazın.
// Numune: Funksiya «Massivdə 4 cüt və 2 tək ədəd var» formasında mesaj qaytarır.

let numArr = [23, 46, 34, 87, 103, 54, 542, 874, 245];

function countEvensAndOdds(num) {
  let PlurCount = num.filter((item) => item % 2 === 0).length;
  let SingCount = num.filter((item) => item % 2 !== 0).length;
  return `Massivdə ${PlurCount} cüt və ${SingCount} tək ədəd var`;
}

console.log(countEvensAndOdds(numArr));



