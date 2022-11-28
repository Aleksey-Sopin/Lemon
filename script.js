let n1 = document.querySelector(".subscribe-questions-block-question-1 span");
let n2 = document.querySelector(".subscribe-questions-block-question-2 span");
let n3 = document.querySelector(".subscribe-questions-block-question-3 span");
let n4 = document.querySelector(".subscribe-questions-block-question-4 span");

let bodyBlock = document.querySelector("body");
// блоки вопросов убираем правый маргин
let subscribeQuestionsBlockQquestion_1 = document.querySelector(".subscribe-questions-block-question-1");
subscribeQuestionsBlockQquestion_1.style.marginRight = "0px";

let subscribeQuestionsBlockQquestion_2 = document.querySelector(".subscribe-questions-block-question-2");
subscribeQuestionsBlockQquestion_2.style.marginRight = "0px";

let subscribeQuestionsBlockQquestion_3 = document.querySelector(".subscribe-questions-block-question-3");
subscribeQuestionsBlockQquestion_3.style.marginRight = "0px";

let subscribeQuestionsBlockQquestion_4 = document.querySelector(".subscribe-questions-block-question-4");
subscribeQuestionsBlockQquestion_4.style.marginRight = "0px";

// 
let question1 = document.querySelector(".subscribe-questions-block-question-1");
question1.onclick = function () {
	if (n1.style.display == "block") {
		n1.style.display = "none";
		question1.classList.toggle("activeBlock");
		question1.style.height = "60px";
	} else {
		n1.style.display = "block";
		question1.classList.toggle("activeBlock");
		question1.style.height = "350%";
		if( bodyBlock.clientWidth < 1545 && bodyBlock.clientWidth > 769){
			question1.style.height = "230px";
		}
	}
} 
let question2 = document.querySelector(".subscribe-questions-block-question-2");
question2.onclick = function () {
	if (n2.style.display == "block") {
		n2.style.display = "none";
		question2.classList.toggle("activeBlock");
		question2.style.height = "60px";
	} else {
		n2.style.display = "block";
		question2.classList.toggle("activeBlock");
		question2.style.height = "350%";
		if( bodyBlock.clientWidth < 1545 && bodyBlock.clientWidth > 769){
			question2.style.height = "230px"
		}
	}
} 
let question3 = document.querySelector(".subscribe-questions-block-question-3");
question3.onclick = function () {
	if (n3.style.display == "block") {
		n3.style.display = "none";
		question3.classList.toggle("activeBlock");
		question3.style.height = "60px";
	} else {
		n3.style.display = "block";
		question3.classList.toggle("activeBlock");
		question3.style.height = "350%";
		if( bodyBlock.clientWidth < 1545 && bodyBlock.clientWidth > 769){
			question3.style.height = "230px";
		}
	}
} 
let question4 = document.querySelector(".subscribe-questions-block-question-4");
question4.onclick = function () {
	if (n4.style.display == "block") {
		n4.style.display = "none";
		question4.classList.toggle("activeBlock");
		question4.style.height = "60px";
	} else {
		n4.style.display = "block";
		question4.classList.toggle("activeBlock");
		question4.style.height = "350%";
		if( bodyBlock.clientWidth < 1545 && bodyBlock.clientWidth > 769){
			question4.style.height = "215px";
		} 
	}
} 
// subscribe questions block chenge size
if( bodyBlock.clientWidth < 1545 && bodyBlock.clientWidth > 769) {
	question1.style.width = "88%";
	question2.style.width = "88%";
	question3.style.width = "88%";
	question4.style.width = "88%";

} else if (bodyBlock.clientWidth < 768) {

	let subscribeQuestionsBlock = document.querySelector(".subscribe-questions");
	subscribeQuestionsBlock.style.width = "100%";

	question1.style.width = "100%";
	question2.style.width = "100%";
	question3.style.width = "100%";
	question4.style.width = "100%";
}
// 	let subscribeQuestionsBlock = document.querySelector("subscribe-questions");
// subscribeQuestionsBlock.style.width = "90" + "%";