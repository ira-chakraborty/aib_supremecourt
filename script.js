// store html elements
const numberpad1 = document.getElementById("numberpad1");
const pickedval1 = document.getElementById("pickedvalue1");

const numberpad2 = document.getElementById("numberpad2");
const pickedval2 = document.getElementById("pickedvalue2");

const numberpad3 = document.getElementById("numberpad3");
const pickedval3 = document.getElementById("pickedvalue3");

const numberpad4 = document.getElementById("numberpad4");
const pickedval4 = document.getElementById("pickedvalue4");

const numberpad5 = document.getElementById("numberpad5");
const pickedval5 = document.getElementById("pickedvalue5");

const avg = document.getElementById("avg")
const pointnum = document.getElementById("pointnum")
const winner = document.getElementById("winner")


let selectedNumber1 = null; // variable to save the picked number for player1
let selectedNumber2 = null; // variable to save the picked number for player2
let selectedNumber3 = null; // variable to save the picked number for player3
let selectedNumber4 = null; // variable to save the picked number for player4
let selectedNumber5 = null; // variable to save the picked number for player5

let status1 = "";
let status2 = "";
let status3 = "";
let status4 = "";
let status5 = "";

let res_num = 0;

// for loop, to loop from 0 to 100 and print out the number on the button
//  PLAYER 1
for (let i = 0; i <= 100; i++) {
    const btn1 = document.createElement("button"); // create a new button
    btn1.textContent = i; //makes the button content = i, (there's 101 is from 0-100)
    btn1.addEventListener("click", () => {
    selectedNumber1 = i; // save it to the variable for math operations
    status1 = "c"; 
    pickedval1.textContent = i; // show it on page
    console.log("You picked:", i);
    const buttons = numberpad1.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
    if (status1 == "c" && status2 == "c" && status3 == "c" && status4 == "c" && status5 == "c") {
    const a = (selectedNumber1 + selectedNumber2 + selectedNumber3 + selectedNumber4 + selectedNumber5) / 5;
    avg.textContent = a.toFixed(2); // optional: limit decimals
    pointnum.textContent = (a * 0.8).toFixed(2);
    res_num = (a * 0.8).toFixed(2);
  }
  });
    numberpad1.appendChild(btn1);
    
}

// for loop, to loop from 0 to 100 and print out the number on the button
// PLAYER 2
for (let i = 0; i <= 100; i++) {
    const btn2 = document.createElement("button"); // create a new button
    btn2.textContent = i; //makes the button content = i, (there's 101 is from 0-100)
    btn2.addEventListener("click", () => {
    selectedNumber2 = i; // save it to the variable for math operations
    status2 = "c"; 
    pickedval2.textContent = i; // show it on page
    console.log("You picked:", i);
    const buttons = numberpad2.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
    if (status1 == "c" && status2 == "c" && status3 == "c" && status4 == "c" && status5 == "c") {
    const a = (selectedNumber1 + selectedNumber2 + selectedNumber3 + selectedNumber4 + selectedNumber5) / 5;
    avg.textContent = a.toFixed(2); // optional: limit decimals
    pointnum.textContent = (a * 0.8).toFixed(2);
    res_num = (a * 0.8).toFixed(2);
  }
  });
    numberpad2.appendChild(btn2);

}

// for loop, to loop from 0 to 100 and print out the number on the button
// PLAYER 3
for (let i = 0; i <= 100; i++) {
    const btn3 = document.createElement("button"); // create a new button
    btn3.textContent = i; //makes the button content = i, (there's 101 is from 0-100)
    btn3.addEventListener("click", () => {
    selectedNumber3 = i; // save it to the variable for math operations
    status3 = "c"; 
    pickedval3.textContent = i; // show it on page
    console.log("You picked:", i);
    const buttons = numberpad3.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
    if (status1 == "c" && status2 == "c" && status3 == "c" && status4 == "c" && status5 == "c") {
    const a = (selectedNumber1 + selectedNumber2 + selectedNumber3 + selectedNumber4 + selectedNumber5) / 5;
    avg.textContent = a.toFixed(2); // optional: limit decimals
    pointnum.textContent = (a * 0.8).toFixed(2);
    res_num = (a * 0.8).toFixed(2);
  }
  });
    numberpad3.appendChild(btn3);

}


// for loop, to loop from 0 to 100 and print out the number on the button
//  PLAYER 4
for (let i = 0; i <= 100; i++) {
    const btn4 = document.createElement("button"); // create a new button
    btn4.textContent = i; //makes the button content = i, (there's 101 is from 0-100)
    btn4.addEventListener("click", () => {
    selectedNumber4 = i; // save it to the variable for math operations
    status4 = "c"; 
    pickedval4.textContent = i; // show it on page
    console.log("You picked:", i);
    const buttons = numberpad4.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
    if (status1 == "c" && status2 == "c" && status3 == "c" && status4 == "c" && status5 == "c") {
    const a = (selectedNumber1 + selectedNumber2 + selectedNumber3 + selectedNumber4 + selectedNumber5) / 5;
    avg.textContent = a.toFixed(2); // optional: limit decimals
    pointnum.textContent = (a * 0.8).toFixed(2);
    res_num = (a * 0.8).toFixed(2);
  }
  });
    numberpad4.appendChild(btn4);
}

// for loop, to loop from 0 to 100 and print out the number on the button
//  PLAYER 5
for (let i = 0; i <= 100; i++) {
    const btn5 = document.createElement("button"); //create a new button
    btn5.textContent = i; //makes the button content = i, (there's 101 is from 0-100)
    btn5.addEventListener("click", () => {
    selectedNumber5 = i; // save it to the variable for math operations
    status5 = "c"; 
    pickedval5.textContent = i; // show it on page
    console.log("You picked:", i);
    const buttons = numberpad5.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
    if (status1 == "c" && status2 == "c" && status3 == "c" && status4 == "c" && status5 == "c") {
    const a = (selectedNumber1 + selectedNumber2 + selectedNumber3 + selectedNumber4 + selectedNumber5) / 5;
    avg.textContent = a.toFixed(2); // optional: limit decimals
    pointnum.textContent = (a * 0.8).toFixed(2);
    res_num = (a * 0.8).toFixed(2);
  }
  });
    numberpad5.appendChild(btn5);
}




//code for finding out the winner. the id is: winner
//res_num is variable for the comparative value
//use selectednumber variables
let num1 = Math.abs(selectedNumber1 - res_num)
let num2 = Math.abs(selectedNumber2 - res_num)
let num3 = Math.abs(selectedNumber3 - res_num)
let num4 = Math.abs(selectedNumber4 - res_num)
let num5 = Math.abs(selectedNumber5 - res_num)

comp = Math.min(num1, num2, num3, num4, num5);

if (comp == num1) {
    winner.textContent = "PLAYER 1";
}
else if (comp == num2) {
    winner.textContent = "PLAYER 2";
}
else if (comp == num3) {
    winner.textContent = "PLAYER 3";
}
else if (comp == num4) {
    winner.textContent = "PLAYER 4";
}
else if (comp == num5) {
    winner.textContent = "PLAYER 5";
}
 