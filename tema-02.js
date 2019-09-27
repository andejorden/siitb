var theArray = ["c", 32, "d", 33, 16, "h", 40, , 0, "f", "u", "q", "i", 47, 13, 23];
var emptyArray = [], i;

/**
 *  O functie care primeste un sir de caractere si returneaza cifrele din sirul respectiv
 */

function filterNumbers(N){
    return Math.round(N) === N;
}

console.log(theArray.filter(filterNumbers));

/**
 *  O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv
 */

function filterStrings(N){
    return Math.round(N) !== N;
}

console.log(theArray.filter(filterStrings));

/**
 *  O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
 */

function filterFirstFiveStrings(N){
        return Math.round(N) !== N;
}

var rezz = theArray.filter(filterFirstFiveStrings);

console.log(rezz.length);

if(rezz.length >= 5){
    console.log(rezz.slice(0, 5));
}else{
    console.log(false);
}

/**
 *  O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate
 */

function concatArray(a, b, c){
return a.concat(b).concat(c);
}

console.log(concatArray([1, 2, 3, 4],[5, 7, 9],[6, 8, 10]));

/**
 *  O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
 */

function returnsIntegersFromConctArray(a, b, c){
return concatArray(a, b, c).filter(filterNumbers);
}

console.log(returnsIntegersFromConctArray(["a", 2, "f", 7], [1, 3, "h"], [4, "j", "k"]));

/**
 *  O functie care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
 */

function reverseArray(N){
return N.reverse();
}

console.log(reverseArray(theArray));

/**
*  Calculeaza factorialul unui numar
*/

function factorialNumber(N){
var factorial = 1;
for(i = 1; i <= N; i++){
    factorial *= i;
}
return factorial;
}

console.log(factorialNumber(5));

/**
 *  Calculeaza cel mai mare divizor comun al 2 numere
 */

function gcm(x, y){
    while(y){
        var a = y;
        y = x % y;
        x = a;
    }
    return x;
}

console.log(gcm(10, 12));

/**
 *  Calculeaza cel mai mic multiplu comun al 2 numere
 */

function lcm(x, y){
    x = Math.abs(x);
    y = Math.abs(y);
    return (x * y) / gcm(x, y);
}

console.log(lcm(5, 30));

/**
 *  Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32])
 */

function divArrayOf(N){
    for(i = 2; i < N; i++){
        if(N % i === 0){
            emptyArray.push(i);
        }
    }
    return emptyArray;
}

console.log(divArrayOf(64));

/**
 *  O functie care verifica daca un numar este palindrom (ex: 121, 1234321)
 */

function verifyIfPalindrome(N){
    var reverse = N.toString().split('').reverse('').join('');
    var palindrome = Math.sign(N) * parseInt(reverse);
    if(N === palindrome){
        return N + " it is a palindrome!";
    }else{
        return N + " it's not a palindrome!";
    }
}

console.log(verifyIfPalindrome(121));

/**
*  O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru.
*/

var n = theArray.filter(filterNumbers);

n.sort(function(a, b) {
    return a % 2 - b % 2 || a - b;
});

console.log(n);

/**
 *  O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru.
 */


 function evenAscendentOddDescendent(){
     var x = theArray.filter(filterNumbers);
     x.sort((a, b) => (a % 2 - b % 2) || (a % 2 ? b - a : a - b));
     return x;
 }

 console.log(evenAscendentOddDescendent());

 /**
  *  O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array.
  */

  var zaArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
  var steps = 0;
  var sorted = zaArray.sort(function(a, b){return a - b;});
  var result = binarySearch(sorted, 19);

  function binarySearch(arr, value){
      var high = arr.length - 1;
      var low = 0;
      var mid = 0;
      while(low <= high){
          mid = Math.floor((high + low) / 2);
          steps++;
          if(arr[mid] === value){
              return true;
          }else if(value > arr[mid]){
              low = mid + 1;
          }else{
              high = mid - 1;
          }
      }
      return false;
  }

  console.log(sorted);
  console.log(result);

  /**
   *  O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa puteti afisa de cate ori s-a apelat functia recursiv. (hint: puteti folosi 2 functii sau variabila globala)
   */

   function howManySteps(){
       if(result === true){
           return steps;
       }else{
           return "No step";
       }
   }

   console.log(howManySteps());