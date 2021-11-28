//TASK 1

const numbers = ['one', 'two', 'three', 'four', '5', 'six', 'seven', 'eight']
console.log(numbers)
numbers[4] = 'five';
numbers.push('nine');
console.log(numbers)


// TASK 2
function multiplyBy() {
				const num1 = document.getElementById("numOne").value;
				const num2 = document.getElementById("numTwo").value;
				document.getElementById("result").innerHTML = num1 * num2;
			} 

// TASK 3

function eight() {
    const number = document.getElementById("eight").value;

    if (number === "8") {
        alert("Congrats, you won a cookie!");
    } else {
        alert("No cookies for you. Try again!")
    }
}

//TASK 4

//Struggled with this one!

function loop() {

const array1 = [1, 2, 3, 4]
for (let i = 0; i < array1.length; i++) {
    // console.log('My array position = ${i} contains $array1[i]}');
    // array1 = document.getElementById("loop").value;
    System.out.print(array1[i]+``);
}
}
