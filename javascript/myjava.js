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
if (favorite == "fruit"){
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
if ((students >= gcm) && (students >=250) && (dn=="MBBS")){
    accept = "Congratulation, MBBS accepted your performance";
} else if ((students >= gcm) && (students >= 180) && (dn=="Masscom")){
    accept = "Congratulation, Masscom accepted your performance";
} else if ((students >= gcm) && (students >= 200) && (dn=="Engineering")){
    accept = "Congratulation, B. Eng. accepted your performance";
}else{
    accept = "You did not pass the departmental cut off mark";
}

console.log(accept);

//or logical operation

var gu = 76;
var ti = "";
if ((gu >= 45) || (gu == 80)){
    ti = 90
} else{
    ti = 120;
}

console.log(ti);

var ube = ""
if ((gu >= 45) && (gu==80)){
    ube =120
} else{
    ube = 102;
}
console.log(ube);

var opi = "";
if (!(gu >= 56) || (gu ==50)){
    opi = 343;
} else {
    opi = 44444;
}
console.log(opi);

var co = 45;
var pass = "";
if (!(co < 40)){ // ! (opposite)
    pass = "passed"
} else{
    pass = "failed"
}
console.log(pass);

var rufus = "";
if ((gu !==70) && !(gu > 135)){
    rufus = 404;
}else{
    rufus = 101;
}
console.log(rufus);

var te = "Amaka";
var pq = "";
if((te === "Amaka") && (te !== "") && (te !== null)){ // all this are the same
    pq = "`${te} is present`;"

}else{
    pq = `No valid user`
}
console.log(pq);

// combine
var myscore = 76;
var cati = "";
if(((myscore > 80) && !(myscore < 75) && !(myscore >= 100)) || ((myscore < 100) && (myscore >= 76))){
    cati = "You are within the range of 75 or 100"
} else{
    cati = "You are out of the range"
}
console.log(cati);

var papi = "";
if (((myscore > 0) || !(myscore < 50)) && (!(myscore < -1) || (myscore >= 49))){
    papi = 489;
} else{
    papi = 139;
}

console.log(papi);

var ke = 48;
var pare = "";
if (!(((ke == 76) && (ke !==null)) || !((ke > 50) && (ke <= 30)))){
pare = 290;
}else{
    pare = 1000;
}
console.log(pare);

// function
// function declaration

function emma(){
    var y = 76; // y is a local varible because it is declared within the function
    console.log(y);
}

emma();

function emeka(){
    var y = "i love coding"
    return y;
}
console.log(emeka());