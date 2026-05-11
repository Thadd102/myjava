// var sat = "javascript is a nice programming language";
// console.log(sat);

// // basic arithmetic operator
// // addition
// var man = 80;
// var woman = 70;
// man+=woman;
// console.log(man);

// var k = `the sum of ${man} and ${woman} = ${sum}`; //new method
// console.log(k);
// document.getElementById("hero").innerHTML = k;

// var jk = "the sum of "+man+" and "+woman+" = "+sum;  //old method 
// console.log(jk);

// //subtraction
// var sub = man - woman;
// var obinka = `the different of ${man} and ${woman} = ${sub}`;
// console.log(obinka);


// multiplication

var ds = 45;
var rt = 5;
var pro = ds * rt;
var hu = `the product of ${ds} and ${rt} = ${pro}`;
console.log(hu);

var l = 10;
var w = 8;
var area = l * w;
var myarea = `the area of rectangle of length ${l}cm = and ${w}cm = ${area}cm <sup>2</sup>`;
document.getElementById('area').innerHTML = myarea;

//division
var hg = 100;
var ju = 5;
var quotient = hg / ju;
var da = `The quotient of ${hg} and ${ju} = ${quotient}`;
console.log(da);

// mod or modulus
var yt = 44;
var vf = 3;
var myd = yt % vf;
var gd = `The reminder after diving ${yt} and ${3} = ${myd}`;
console.log(gd)

//assignment operator ...+= , -= , *= , /= , %= they are 5 in number hels to make code shorts

var qq = 56;
var mm = 67;
qq += mm;
console.log(qq);

var cx = 67;
var vx = 5;
cx -= vx;
console.log(cx)

var ku = 78;
ku -= 20;
console.log(ku)

var jo = 34;
jo *= 2;
console.log(jo);

var ey = 6;
var vk = 2;
ey *= vk;
console.log(ey);

var cd, vb;
cd = 7;
vb = 8;
cd *= vb;
console.log(cd);

var gs = 80;
gs /= 5;
console.log(gs);

var kl = 67;
kl %= 4;
console.log(kl);

// var zs = 2;
// var vj = 7;
// zs+=vj;
// console.log(zs);

//comparison operator....<, >, <=, >= ,==, ===, ?(tenery operator)

var nn = 65 > 45;
console.log(nn);

var fe = 89 <= 89;
console.log(fe);
var za = 67 >= 66;
console.log(za);
var ht = "76" == 76; // compare only value
console.log(ht);
var sf = 31 === "31"; //compares both value and data type
console.log(sf);
// tenery operator
var user = "nuella";
var login = (user) ? "Active user" : "In Active";
console.log(login);

//  conditional statement if , else if, switch.
var na = 60;
var fetch = "";
if (na > 45) {
    fetch = "i love you";
} else {
    fetch = "you are good";
}

console.log(fetch);

var ju = 34;
var cal = "";
if (ju > 40) {
    cal = "pass";
} else {
    cal = "Fail";
}

console.log(cal);

// else if conditional statement.
var score = 98;
var grade = "";
if (score >= 70) {
    grade = "A"
} else if (score >= 60) {
    grade = "B"
} else if (score >= 50) {
    grade = "C"
} else if (score >= 40) {
    grade = "D"
} else {
    grade = "Fail"

}
console.log(grade);

var favorite = "veg";
var das = "";
if (favorite == "fruit") {
    das = "my favorite is apple";
} else if (favorite == "veg") {
    das = "my favorite vegi is ugu";
} else {
    das = "My favorite meal is not listed";
}
console.log(das)

// logical operators ... or || , and &&

var students = 400;
var gcm = 80;
var dn = "Engineering"
var accept = ""
if ((students >= gcm) && (students >= 250) && (dn == "MBBS")) {
    accept = "Congratulation, MBBS accepted your performance";
} else if ((students >= gcm) && (students >= 180) && (dn == "Masscom")) {
    accept = "Congratulation, Masscom accepted your performance";
} else if ((students >= gcm) && (students >= 200) && (dn == "Engineering")) {
    accept = "Congratulation, B. Eng. accepted your performance";
} else {
    accept = "You did not pass the departmental cut off mark";
}

console.log(accept);

//or logical operation

var gu = 76;
var ti = "";
if ((gu >= 45) || (gu == 80)) {
    ti = 90
} else {
    ti = 120;
}

console.log(ti);

var ube = ""
if ((gu >= 45) && (gu == 80)) {
    ube = 120
} else {
    ube = 102;
}
console.log(ube);

var opi = "";
if (!(gu >= 56) || (gu == 50)) {
    opi = 343;
} else {
    opi = 44444;
}
console.log(opi);

var co = 45;
var pass = "";
if (!(co < 40)) { // ! (opposite)
    pass = "passed"
} else {
    pass = "failed"
}
console.log(pass);

var rufus = "";
if ((gu !== 70) && !(gu > 135)) {
    rufus = 404;
} else {
    rufus = 101;
}
console.log(rufus);

var te = "Amaka";
var pq = "";
if ((te === "Amaka") && (te !== "") && (te !== null)) { // all this are the same
    pq = "`${te} is present`;"

} else {
    pq = `No valid user`
}
console.log(pq);

// combine
var myscore = 76;
var cati = "";
if (((myscore > 80) && !(myscore < 75) && !(myscore >= 100)) || ((myscore < 100) && (myscore >= 76))) {
    cati = "You are within the range of 75 or 100"
} else {
    cati = "You are out of the range"
}
console.log(cati);

var papi = "";
if (((myscore > 0) || !(myscore < 50)) && (!(myscore < -1) || (myscore >= 49))) {
    papi = 489;
} else {
    papi = 139;
}

console.log(papi);

var ke = 48;
var pare = "";
if (!(((ke == 76) && (ke !== null)) || !((ke > 50) && (ke <= 30)))) {
    pare = 290;
} else {
    pare = 1000;
}
console.log(pare);

// function
// function declaration

function emma() {
    var y = 76;        // y is a local varible because it is declared within the function
    console.log(y);
}

emma();




function emeka() {
    var y = "i love coding in javascript"
    return y;
}
console.log(emeka());

// function argument and parameters
// area of triangle = 0.5 * b * h

function okey(b, h) { //function declaration
    var area = 0.5 * b * h;
    var das = `The area of triangle with base ${b}cm and height ${h}cm = ${area}cm<sup>2</sub>`;
    return das;
}
var tr1 = okey(5, 6); // argument
console.log(tr1);

var tr2 = okey(10, 20);
console.log(tr2);

// function expression

const fufu = function () {
    var u = "Javascript is sweeter than pizza";
    return u;
}

console.log(fufu());

(function onyeka() {
    var r = "I am a student programmer";
    console.log(r);
})()


//  arrow function

const rat = () => {                                          // mostly used even in react
    var t = "I am laerning function as Vsasf";
    return t;
}

console.log(rat);

// function concise

const opa = b => b + b;
var tes = opa(5);
console.log(tes);
// triangle calculate


const triangle = () => {
    var base = Number(document.getElementById("base").value);
    var height = Number(document.getElementById("height").value);
    var area = "";
    var calc = 0.5 * base * height;
    area = `The area of triangle of base ${base}cm and height ${height}cm = ${calc}cm <sup.2</sup>`;
    return area;
}

document.getElementById("calculate").addEventListener("click", () => {
    document.getElementById("triangle").innerHTML = triangle();
});

// rectangle calculator

const rectangle = () => {
    var length = Number(document.getElementById("length").value);
    var width = Number(document.getElementById("width").value);
    var solve = "";

    var calc = length * width;
    solve = `The area of rectangle of length ${length}cm and width ${width}cm = ${calc}cm<sup>2</sup>`;
    return solve;
}
document.getElementById("solve").addEventListener("click", () => {
    document.getElementById("rectangle").innerHTML = rectangle();


});

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("rectangle").innerHTML = "";

});

// area of a circle
const mycircle = () => {
    "use strict";
    var radius = Number(document.getElementById("radius").value);
    var area = "";
    if (isNaN(radius)) {
        area = `Only numbers are accepted, please enter a real number`;
    } else {
        var calc = (Math.PI * Math.pow(radius, 2)).toFixed(2);
        area = `The area of circle of radius ${radius}cm = ${calc}cm<sup>2</sup>`;
    }

    return area;
}
document.getElementById("circlearea").addEventListener("click", () => {
    document.getElementById("circa").innerHTML = mycircle();
});

document.getElementById("cleararea").addEventListener("click", () => {
    document.getElementById("circa").innerHTML = "";
    document.getElementById("radius").value = "";
});

//class work JS STARTED HERE

const mycylinder = () => {
    "use strict"
    var radius = Number(document.getElementById("radius").value);
    var heights = Number(document.getElementById("heights").value);
    var volume = "";
    if (isNaN(radius) || isNaN(heights)) {
        volume = "Only number is accepted, please enter a real number"
    } else if (radius <= 0 || heights <= 0) {
        volume = "Radius and height must be positive whole number"
    } else {
        var give = (Math.PI * Math.pow(radius, 2) * heights).toFixed(2);
        volume = `The volume of the area of a cylinder radius ${radius}cm and ${heights}cm = ${give}cm<sup>2<sup>`;
    }
    return volume;
}
document.getElementById("solvec").addEventListener("click", () => {
    document.getElementById("cylinder").innerHTML = mycylinder();
});

// CLASS WORKS JS STARTS HERE

// math function
var hd = 4;
var my = Math.pow(hd, 3);
console.log(my);
var de = 65;
var ja = Math.sqrt(de);
console.log(ja);
var rt = 100;
var sq = Math.pow(rt, 1 / 2);
console.log(sq);
var pq = 64;
var cc = Math.cbrt(pq);
console.log(cc);
var tu = 27;
var ds = Math.pow(tu, 1 / 3);
console.log(ds);

// trigonometric function sin, con, tan
var rad = 30;
var mysin = (Math.sin(rad * (Math.PI / 180))).toFixed(1);
console.log(mysin);

var mycos = (Math.cos(rad * (Math.PI / 180))).toFixed(4);
console.log(mycos);
var mytan = (Math.tan(rad * (Math.PI / 180))).toFixed(4);
console.log(mytan);
// math.floor rounds all decimal down
var arra = 456.67;
var arre = 765.34;
var sai = Math.floor(arra);
console.log(sai);
var sei = Math.floor(arre);
console.log(sei);
// math.ceil rounds all decimal up
var tw = Math.ceil(arra);
console.log(tw);
var yw = Math.ceil(arre);
console.log(yw);
// round number generation
var myrand = Math.floor(Math.random() * 88888) + 100000;
console.log(myrand);
// random latter

var lett = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var mylen = lett.length;
var ranlet = Math.floor(Math.random() * mylen);
var ranlets = Math.floor(Math.random() * mylen);
var rale = lett[ranlet];
var rales = lett[ranlets];
console.log(rale + rales);
var myyear = new Date().getFullYear()
console.log(myyear);
var jambreg = `${myyear}${myrand}${rale.toUpperCase()}${rales.toUpperCase()}`;
console.log(jambreg);
var mytrim = myyear.toString().slice(2);
console.log(mytrim);
var Vsasf = `V${rale.toUpperCase()}${rales.toUpperCase()}${mytrim}${myrand}`;
console.log(Vsasf);

//class work
var lett = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var count = lett.length;
var xy = Math.floor(Math.random() * count);
var yz = Math.floor(Math.random() * count);
var x = lett[xy];
var y = lett[yz];
console.log(x + y);
var digit = Math.floor(Math.random() * 88888) + 10000;
console.log(digit);
var g = "v";
var constant = 26;
var jamb = `${g.toUpperCase()}${x.toUpperCase()}${y.toUpperCase()}${constant}${digit}`;
console.log(jamb);

// string manipulation
var yaba = "I love Javascript";
var iv = yaba.slice(2, 6);
console.log(iv)
var jas = yaba.slice(2);
console.log(jas);

var lo = yaba.slice(-15, -11);
console.log(lo);

var oge = yaba.slice(-17, -16);
console.log(oge);
// assignment and class work
//using arrow function design and implement volume of a cylinder calculator...
//total surface area of a cylinder

const odera = () => {
    "use strict"
    var hite = Number(document.getElementById("hite").value);
    var rediu = Number(document.getElementById("rediu").value);
    var print = "";
    if (isNaN(hite) || isNaN(rediu)) {
        print = "both Radius and Height must be a positive whole number"
    } else if ((hite < 0) || (rediu < 0)) {
        print = "Both Height and radius must be great than or equal to zero"
    } else {
        var show = ((2 * Math.PI * Math.pow(rediu, 2)) + (2 * Math.PI * rediu * hite)).toFixed(2);
        print = `The total surface of a height ${hite}cm and radius ${rediu}cm = ${show}cm<sup>2</sup>`;
    };

    return print;
}

document.getElementById("sol").addEventListener("click", () => {
    document.getElementById("ode").innerHTML = odera();
});
document.getElementById("cla").addEventListener("click", () => {
    document.getElementById("ode").innerHTML = "";
    document.getElementById("hite").value = "";
    document.getElementById("rediu").value = "";


});


const email = () => {
    var lett = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var alpha1 = lett[Math.floor(Math.random() * lett.length)];
    var alpha2 = lett[Math.floor(Math.random() * lett.length)];
    var alpha3 = lett[Math.floor(Math.random() * lett.length)];
    var alpha4 = lett[Math.floor(Math.random() * lett.length)];
    var alpha5 = lett[Math.floor(Math.random() * lett.length)];
    var alpha6 = lett[Math.floor(Math.random() * lett.length)];
    var alpha7 = lett[Math.floor(Math.random() * lett.length)];
    var alpha8 = lett[Math.floor(Math.random() * lett.length)];
    var num = Math.floor(Math.random() * 999);
    var mail = `${alpha1.toUpperCase()}${alpha2}${alpha3}${alpha4}${alpha5}${alpha6}${alpha7}${alpha8}${num}@gmail.com`;
    return mail;
}

//console.log(email());
document.getElementById("get").addEventListener("click", () => {
    document.getElementById("reg").innerHTML = email();
})











