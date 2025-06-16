// 1.Adınız, cinsiniz və doğum tarixiniz olan user obyekti
// yaradın (name, gender, birthday).
// Konsola doğum tarixini çıxarın.

let user = {
  name: "Cumshud",
  gender: "Male",
  Bdate: "04.08.2004",
  setAge: function (newage) {
    return (user.age = newage);
  },
  getYearsBeforeRetirement: function (year) {
    return year - this.age;
  },
};

console.log(user.Bdate);

// 2.Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
// Alınmış obyekti konsola çıxarın.
delete user.Bdate;
user.age = 21;
console.log(user);

// 3.Obyektə metodlar əlavə edin.
//     setAge — istifadəçi yaşını dəyişdirən metoddur.
//     getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
// qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.

user.setAge(34);
console.log(user);

console.log(user.getYearsBeforeRetirement(65));

// 4.Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın. Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə metodlarını əhatə edən client obyekti yaradın.

let client = {
  Fullname: "Cümşüd İsmayılov",
  cardNumber: "1234-5678-9012-3456",
  balance: 300,
  creditLimit: 700,
  precentOfMinPayment: 0.05,
  getBalance: function () {
    if (this.balance > 0) {
      return `Balansınız ${this.balance} `;
    } else {
      return `Borcunuz ${this.balance}`;
    }
  },
  getMinPaymant: function () {
    if (this.balance < 0) {
      return `Minimum ödənişiniz ${Math.abs(this.balance * this.precentOfMinPayment)} `;
      
    } else {
      return `Sizin borcunuz yoxdur `;
    }
  },
  withdraw: function (amount) {
    if (this.balance + this.creditLimit >= amount) {
      this.balance -= amount;
      return `Pul çıxarıldı: ${amount}. Yeni balans: ${this.balance}`;
    } else {
      return "Kredit limiti aşılır!";
    }
  },
   refill: function (amount) {
    this.balance += amount;
    return `Balansınız artırıldı: ${amount}. Yeni balans: ${this.balance}`;
  }
};

console.log(client.getBalance());
console.log(client.getMinPaymant());
console.log(client.withdraw(900));
console.log(client.refill(1000));

// 5.Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni
// yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
// 	- Obyekt yaradın və toplama, çıxma, vurma,
//     bölmə üçün metodlar əlavə edin.
// 	Metodlar parametr kimi 2 ədəd götürür və bu ədədlər
//      üzərində müvafiq əməliyyatın nəticəsini qaytarır.
// 	Yaddaşla işləmək imkanı əlavə edin.
// 	- Obyektə dəyəri saxlamaq üçün özəllik əlavə edin.
//     Onunla işləmək üçün metodlar yaradın:
// 	dəyərin yaddaşda saxlanması, yaddaşın təmizlənməsi,
//     yaddaşdan dəyərin oxunması.

let calculator = {
  memory: 0,
  
  add: function (a, b) {
    return a + b;
  },
  
  subtract: function (a, b) {
    return a - b;
  },
  
  multiply: function (a, b) {
    return a * b;
  },
  
  divide: function (a, b) {
    if (b === 0) {
      return "Bölmə sıfıra bölünə bilməz!";
    }
    return a / b;
  },
  
  saveToMemory: function (value) {
    this.memory = value;
    return `Yaddaşa saxlanıldı: ${this.memory}`;
  },
  
  clearMemory: function () {
    this.memory = 0;
    return "Yaddaş təmizləndi.";
  },
  
  readMemory: function () {
    return `Yaddaşdakı dəyər: ${this.memory}`;
  }
};


console.log(calculator.add(5, 3)); 
console.log(calculator.subtract(10, 4)); 
console.log(calculator.multiply(2, 3)); 
console.log(calculator.divide(10, 2)); 
console.log(calculator.saveToMemory(15));
console.log(calculator.readMemory()); 
console.log(calculator.clearMemory());


// 6.Verilmiş stringdə ən çox təkrarlanan elementi qaytaran `mostFrequent()` funksiyasını yazın.
// Məsələn, `mostFrequent("1, 3, 2, 3, 4, 3, 5, 3")` çağırıldıqda `3` qaytarmalıdır.

function mostFrequent(str) {
  const elements = str.split(", ").map(Number);
  const frequency = {};
  
  elements.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  
  let maxCount = 0;
  let mostFrequentElement = null;
  
  for (const num in frequency) {
    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mostFrequentElement = Number(num);
    }
  }
  
  return mostFrequentElement;
} 

console.log(mostFrequent("1, 3, 2, 3, 4, 3, 5, 3")); 