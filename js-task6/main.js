// 1.HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.

const Li = document.querySelector('li')
console.log(Li);

// 2.HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - Başlığı silin;
// - Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .

const head = document.querySelector("h1")
const UL = document.querySelector("ul")
const list =document.createElement("li")
list.innerText= "TITAN RTX"
UL.append(list)

console.log(head.remove);

// 3.HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - başlıq mətnini «GeForce 20 Series» -a;
// - fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.

head.innerText = "GeForce 20 Series"

const tagLi = document.querySelectorAll(".primary")
console.log(tagLi);
tagLi.forEach(item => {
  item.style.color = "#ebebeb";
  console.log(item);
  
});

// 5.HTML-kod verilmişdir. Yalnız JS kodundan istifadə edərək sinifləri dəyişdirin:
// - bütün siyahı elementlərinə item sinifi əlavə edin;
// - siyahıda primary sinfi olmayan elementlərə secondary sinfi əlavə edin.

const AllLi = document.querySelectorAll("li")
AllLi.forEach(el =>{
    el.classList.add("item")
  
    if (!el.classList.contains("primary")) {
        el.classList.add("secondary")
    }
      console.log(el);
})




