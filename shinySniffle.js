let evenNumber = parseInt(prompt("Input an even number"));
let oddNumber = parseInt(prompt("Input an odd number"));

function result() {
  if (evenNumber % 2 == 0 && oddNumber % 2 == 1) {
	let total = evenNumber * oddNumber;
	if (total % 2 == 0) {
	  console.log("It's an even number: " + total);
	}  else {alert("The result is not an even number: " + total)}
  } else {alert("Please Input an even and an odd number")}
}
result();
