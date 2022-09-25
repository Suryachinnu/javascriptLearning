// data types primitive
const c = 23; //number
var str = "john doe" //string
var isStudent = true //boolean
var s; //undefined
r = null//null

var student = {
    name: 'kiran',
    village:'Gudipadu',
    isStudent: true,
    age: 21,
    qualification: 'Btech'
} // Object

var students = [
    {
        name:'kiran',
        age:21,
        isStudent: true,
        phone:08966674
    },
    {
        name: 'Sai Krishna',
        age:23,
        isStudent: false,
        phone: 5365643564
    },
    {
        name:'user1',
        age:16,
        isStudent: true,
        phone: 77475756
    },
    {
        name: 'user 2',
        age:17,
        isStudent: false,
        phone: 8764645776
    }
] //array type of an object

console.log('1. '+students[0].name +' is '+ students[0].age+' years old')

function printAllStudents(){
    let mylist = document.getElementById('mylist')

    let mycode = '<caption>All Students</caption>'

    for (let student of students){
        if(student.isStudent){
            mycode = mycode+'<li>'+student.name+'</li>'
        }       
    }
    mylist.innerHTML = mycode
}

function printBelow18(){

    let below = document.getElementById('fasak')

    let htmlstring = '<caption>All students below 18</caption>'

    for (let student of students){
        if(student.age < 18){
            htmlstring = htmlstring + '<li>'+ student.name + '</li>'
            }
    }
    if(below){
        below.innerHTML = htmlstring
    }
    
}
printBelow18()

function phoneNumber(){

    let phone = document.getElementById('mob')

    let mobile = '<caption>All students phone number</caption>'

    for (let student of students){

        mobile += '<li><strong>' +student.name +'</strong></br>' + 'Phone :' + student.phone +'</br></li>'

    }
    if(phone){
        phone.innerHTML = mobile
    }
    //phone.innerHTML = mobile

}
 var car= [
{
    name : 'swift',
    model : 2022,
    seat : 4
 },
 {
    name : 'innova',
    model : 2021,
    seat : 7
 },
 {
    nmae : 'brezza',
    model : 2019,
    seat : 4
 },
 {
    nmae : 'audi',
    model : 2014,
    seat : 4
 },
 {
    name : 'omini',
    model : 2018,
    seat : 8
 }
 ]

 function seat(){

    let cars = document.getElementById('below')

 }

// phoneNumber()

//string methods
//array methods
