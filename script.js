let age = 0;
let bet = prompt(`Який у тебе рік народження`);
switch (bet){
    case null: alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
    break;
    default: age = Number (2023 - bet);
        }
let city = prompt(`В якому місті ти живеш`);
switch (city) {
    case null: alert (`Шкода, що Ви не захотіли ввести своє місто`);
    break;
    case "Вашингтон": alert (`Тобі ${age}років.
    Ти живешь у столиці Америки`); 
        break;
    case "Київ": alert(`Тобі ${age}років.
    Ти живешь у столиці України`);
    break;
    case "Лондон": alert(`Тобі ${age}років.
    Ти живешь у столиці Великобританії`);
    break;
    default : alert(`Тобі ${age}років.
    Ти живеш у місті ${city}`)};

let sport = prompt(`Твій улюблений вид спорту`);
 switch(sport){
    case null: alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`);
break;
    case "футбол": alert(`Круто! Хочеш стати Пеле?`);
    break;
    case "фристайл": alert(`Круто! Хочеш стати  Микаэль Кингсбери?`);
    break;
    case "бокс": alert(`Круто!Хочеш стати Мухамед Али?`);
    break;
default: alert (`${sport} - класний спорт`) }
        