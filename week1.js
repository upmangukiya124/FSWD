// ---------- task 1 ---------


var a = "charusat";
console.log(a);
let b = 123;
console.log(b);
const c = true;
console.log(c);


// ---------- task 2 ---------



function sum(x, y) {
    return x + y;
}
function diff(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
sum(15, 5);
diff(15, 5);
mul(15, 5);
div(15, 5);


// ---------- task 3 ---------


var a = prompt();
if (a < 18) {
    console.log("minor");
}
else if (a > 18 && a < 65) {
    console.log("adult");
}
else {
    console.log("senior");
}

// ---------- task 4 ---------


var a = [10, 20, 30, 40, 50];
programm(a);
function programm(params) {
    let min = a[0], max = a[0];
    for (var i = 0; i < params.length; i++) {
        if (min > a[i]) {
            min = a[i];
        }
        if (max < a[i]) {
            max = a[i];
        }
    }
    return (min);
    // return(max);
}

// ---------- task 5---------

     let a =['kali', 'ubantu','parrot']

function book(a){
for(let i=0;i<a.length;i++){
console.log(a[i]);
}
}
book(a);




// ---------- task 6---------

function abc1() {
    let a = 10;
}
function abc2() {
    const b = 10;
}
function abc3() {
    var c = 10;
}
console.log(a)
console.log(b)
console.log(c)


// ---------- task 8---------


function myfunction() {
    let a = -5;
    try {
        if (a < 0) throw "number is negative"
    }
    catch (err) {
        Console.log("input " + err);
    }
}
myfunction();


// ---------- task 9---------



function myDisplayer(x) {
    console.log(x);
}

function myFirst() {
    myDisplayer("sujal");
}

function mySecond() {
    myDisplayer("Goodbye");
}

setTimeout(myFirst, 5000);
setTimeout(mySecond, 0);
