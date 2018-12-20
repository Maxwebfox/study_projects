let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?");
	time = prompt("Введите дату в формате YYYY-MM-DD");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?");
	}
};

start();


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
};


function chooseExpenses() {

	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце"),
			b = +prompt("Во сколько обойдется?");
	
		if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null 
			&& a != '' && b != '' && a.length < 50) {
				console.log('done');
				appData.expenses[a] = b;
		} else {
			i = i -1;
		}
	}
};

chooseExpenses();


function detectDayBudget() {
	let result = appData.budget / 30;
	alert("Ежедневный бюджет " + result);
	return result;
}
detectDayBudget()

// alert("Ежедневный бюджет: " + appData.moneyPerDay);


function detectLevel() {
	if (detectDayBudget() <= 100) {
		alert("Минимальный уровень достатка");
	} else if (detectDayBudget() >= 100 && detectDayBudget() < 2000) {
		alert("Средний уровень достатка");
	} else if (detectDayBudget() >= 2000) {
		alert("Высокий уровень достатка");
	} else {
		alert("Произошла ошибка");
	}
};

detectLevel();

// if(appData.moneyPerDay < 100) {
// 	console.log("Минимальный уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerday < 2000) {
// 	console.log("Средний уровень достатка");
// } else if (appData.moneyPerDay > 2000) {
// 	console.log("Высокий уровень достатка");
// } else {
// 	console.log("Произошла ошибка");
// }

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");
		
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
	}
};

checkSavings();


function chooseOptExpenses() {
	let first = prompt("Статья необязательных расходов"),
		second = prompt("Статья необязательных расходов"),
		third = prompt("Статья необязательных расходов");

	appData.optionalExpenses[1] = first;
	appData.optionalExpenses[2] = second;
	appData.optionalExpenses[3] = third;
	
	console.log(appData.optionalExpenses[1]);
};
chooseOptExpenses();