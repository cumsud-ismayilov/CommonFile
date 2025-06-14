// 1.Adınız, cinsiniz və doğum tarixiniz olan user obyekti
// yaradın (name, gender, birthday).
// Konsola doğum tarixini çıxarın.

let user = {
  name: "Cumshud",
  gender: "Male",
  Bdate: "04.08.2004",
  setAge:function(newage){
  return user.age = newage
  },
  getYearsBeforeRetirement:function (year) {
    
    return year - this.age
  }
};

console.log(user.Bdate);

// 2.Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
// Alınmış obyekti konsola çıxarın.
delete user.Bdate
user.age = 21
console.log(user);


// 3.Obyektə metodlar əlavə edin.
//     setAge — istifadəçi yaşını dəyişdirən metoddur.
//     getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
// qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.


user.setAge(34)
console.log(user);

console.log(user.getYearsBeforeRetirement(65));


