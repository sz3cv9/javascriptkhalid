//let coffeeIsGrinding = false;

//const pressGrindBeans = () => {
//    if (coffeeIsGrinding) {
//        console.log("Stopping the grind");
//        coffeeIsGrinding = false;
//    } else {
//            console.log("Grinding is about to begin");
//            coffeeGrinding = true;
//       }
//    }
//pressGrindBeans();

//const takeOrder = (size,drinkType) => {
//   console.log(`Order received:${size} ${drinkType}}`);
//}
//takeOrder("Tall","Latte");
//takeOrder("Small","Latte");

//const addUp = (num1, num2) => {
//    return num1 + num2;
//}

//addUp(7,3);
//console.log (addUp(2,5));

//const multiplyByNineFifths = (celsius) => {
//    return celsius * (9/5);
//};
//const getFahrenheit = (celcius) + 32;
//};

//console.log ("the temperature is " + getFahrenheit(15) + "F");

//Output: The temperature is 59

//let orderCount = 0;
//const takeOrder = (topping) => {
//console.log(`Pizza with ${topping}`);
// orderCount++;
//}
//takeOrder("pineapple");
//takeOrder("sweet corn")

let accBal = 400;
let accPin = 1234;
const cashMachine = (pinNum, cash) => {
  if (pinNum == accPin && cash <= accBal) {
    console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)  
  } else if (pinNum != accPin) {
    console.log(`PIN number is incorrect!. Please try again.`);
  } else {
    console.log(`Insufficient funds in your account! Please check and try again.`);
  }
}
cashMachine(1234, 300);
cashMachine(1235, 300);
cashMachine(1234, 410);
cashMachine(1235, 500);