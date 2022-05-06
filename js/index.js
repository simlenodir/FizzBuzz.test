var fizz = 0
var buzz = 0
var fizzbuzz = 0 

var elFizzlist = document.querySelector('.fizz-list')
var elBuzzlist = document.querySelector('.buzz-list')
var elFizzBuzzlist = document.querySelector('.fizzbuzz-list')

var userNumber = prompt (`istalgan raqamingizni tanlang`) -0 ;

document.getElementById("userNumber").innerHTML = userNumber ;


if (userNumber < 0 ) {
    document.getElementsByClassName('').container.style.display = "none";
} else {
    document.getElementById("error").style.display = "none" ;
}

for (i = 1; i <= userNumber;  i++ ) {
    var elLi = document.createElement('li')
    elLi.textContent = i
    if (i % 3 == 0 && i % 5== 0) {
        fizzbuzz += 1 
        elFizzBuzzlist.append(elLi)
       }
        
     else  if (i % 5 === 0) {
           elBuzzlist.append(elLi)
            buzz += 1
        }

        else if (i % 3 === 0) {
            fizz = fizz + 1
          elFizzlist.append(elLi) 
        }
    }


document.getElementById("Fizz").innerHTML =  fizz;

document.getElementById("Buzz").innerHTML = buzz;

document.getElementById("FizzBuzz").innerHTML = fizzbuzz;

