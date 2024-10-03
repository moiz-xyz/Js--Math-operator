// opeartors
let a  = parseInt(prompt ("Enter your first Number") );

let sign = prompt ("Enter any operator ( + , - ,  * ,  /,  %,)");
let b = parseInt(prompt("Enter the second value"));

if (sign === "+"){
    alert (a + b)
} else if (sign ==="-"){
    alert (a - b)
} else if (sign ==="*"){
    alert (a * b)
} else if (sign ==="/"){
    alert (a / b)
} else if (sign ==="%"){
    alert (a % b)
} else {
    alert("Invalid Calcualtion")
};

let second =prompt("Do you want to check ++ or -- if yes then write the sign")
let take_input = parseInt(prompt ("Enter the number") );
  if (second === "++"){
    alert(take_input +1)
} else if (second === "--"){
    alert(take_input -1)
} else{
    alert("Invalid calulation")
};