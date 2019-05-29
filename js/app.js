let money, time;
money = prompt("What is your month budget");
time = prompt("Enter date in format: YYYY-MM-DD")
console.log(money);
console.log(time);

let appData  = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : "",
    income : "",
    savings : false
};
let a1 = prompt("Which expenses in this month",""), 
a2 = prompt("How much is it need?",""),
a3 = prompt("Which expenses in this month",""),
a4 = prompt("How much is it need?","");
appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

console.log(appData.expenses);