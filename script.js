/*
        2. Program sprzedający PIWO
    - Musi pytać użytkownika o wiek
    - Jeśli wiek >= 18, to program sprzedaje piwo (console.log co tam chcecie)
    - Jeśli wiek < 18, to program odmawia piwa :(
    - Jeśli wiek > 150, to program mówi, że się kłamie
    - Jeśli użytnik odmówi odpowiedzi, to program wyrzuca go za drzwi
    (Co jeśli użytkownik nie wpisze liczby?) (Number(zmienna), a później (typeof)
    (tylko trochę nieobowiązkowe)
    */

const userAge = Number(prompt("Podaj swój wiek:"));
if (isNaN(userAge)) {
  console.log("Wiek musi być podany w cyfrach!");
} else if (!userAge) {
  console.log("Wypad z baru!");
} else if (userAge > 150) {
  console.log("Nieładnie tak kłamać...");
} else if (userAge >= 18) {
  console.log("Oto Twoje piwko, na zdrowie!");
} else {
  console.log("Osobom niepełnoletnim piwka nie sprzedajemy.");
}
