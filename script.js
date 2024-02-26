const adviceContainer = document.getElementById(
	"adviceContainer"
);
const getAdvice = document.getElementById("btn");
const adviceDisplay =
	document.getElementById("adviceDisplay");
const adviceID = document.getElementById("adviceID");
let slip_id = Math.floor(Math.random() * 224) + 1;

async function adviceFetch() {
	let slip_id = Math.floor(Math.random() * 224) + 1;
	await fetch(
		`https://api.adviceslip.com/advice/${slip_id}`
	) //Fetch data from this link with randome ID
		.then((response) => response.json()) //Return response as json file
		.then((advice) => {
			let adviceData = advice.slip.advice;
			console.log(slip_id, adviceData);
			adviceID.textContent = "Advice #" + slip_id; //Sets the text content of the paragraph element to the adviceElement

			adviceDisplay.textContent = ' " ' + adviceData + ' "'; //Sets the text content of the paragraph element to the adviceElement
		});
}

adviceFetch(); // to have the first advice

getAdvice.addEventListener("click", () => {
	adviceFetch();
});
