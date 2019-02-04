window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	const tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');


	const hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	const showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (e) => {
		let target = event.target;
		if ( target && target.classList.contains('info-header-tab')) {
			for ( let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	})


	// Таймер

	let deadLine = '2019-01-28';

	const getTimeRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/(1000*60*60)) );
		
		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer. querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime)
			if (t.hours < 10) {
				hours.textContent = '0' + t.hours;
			} else {
				hours.textContent = t.hours;
			}
			if (t.minutes < 10) {
				minutes.textContent = '0' + t.minutes;
			} else {
				minutes.textContent = t.minutes;
			}
			if (t.seconds < 10) {
				seconds.textContent = '0' + t.seconds;
			} else {
				minutes.textContent = t.minutes;
			};
			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}

	setClock('timer', deadLine);


	// Modal 

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descrBtns = document.querySelectorAll('.description-btn');
	
	descrBtns.forEach(function (item) {
		item.addEventListener('click', function () {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		})
	})

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	})

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = 'visible';
	})

	// Form 
	
	let message = {
		loading: 'Загрузка',
		success: 'Спасибо, что оставили заявку',
		failure: 'Что-то пошло не так!'
	};

	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div'),
		contactForm = document.getElementById('form'),
		contactInput = contactForm.getElementsByTagName('input');

		statusMessage.classList.add('status');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		// request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');
		request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

		let formData = new FormData(form);
		console.log(formData);
		let obj = {};
		formData.forEach( (value, key) => {
			obj[key] = value;
		});
		console.log(obj);

		let json = JSON.stringify(obj);

		request.send(json);

		request.addEventListener('readystatechange', () => {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		})

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}

	});

	contactForm.addEventListener('submit', (event) => {
		event.preventDefault();
		contactForm.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		// request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');
		request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

		let formData = new FormData(contactForm);
		console.log(formData);
		let obj = {};
		formData.forEach( (value, key) => {
			obj[key] = value;
		});
		console.log(obj);

		let json = JSON.stringify(obj);

		request.send(json);

		request.addEventListener('readystatechange', () => {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		})

		for (let i = 0; i < contactInput.length; i++) {
			contactInput[i].value = '';
		}

	});

});