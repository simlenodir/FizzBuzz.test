var fizz = 0
var buzz = 0
var fizzbuzz = 0 

var userNumber = prompt (`istalgan raqamingizni tanlang`) -0 ;

document.getElementById("userNumber").innerHTML = userNumber ;

if (userNumber < 0 ) {
    document.getElementsByClassName.container.style.display = "none";
} else {
   document.getElementById("error").style.display = "none" ;
}

for (i = 1; i <= userNumber;  i++ ) {
    if (i % 3 == 0 && i % 5== 0) {
        fizzbuzz += 1 }
        if (i % 5 === 0) {
            buzz += 1
        }

        if (i % 3 === 0) {
            fizz = fizz + 1
           
        }
    }


document.getElementById("Fizz").innerHTML = fizz;

document.getElementById("Buzz").innerHTML = buzz;

document.getElementById("FizzBuzz").innerHTML = fizzbuzz;

