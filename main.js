
let money = +prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DD")
let question1 = prompt("Введите обязательную статью расходов в этом месяце")
let question2 = prompt("Во сколько обойдется?")
alert("Ваш бюджет на день " + (money / 30));

let expenses = {
	question1, 
	question2,
};

let appData = {
	money,
	time,
	expenses,
	optionalExpenses,
	income,
	savings: false,
};

