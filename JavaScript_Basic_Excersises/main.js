//Print out current day of the week and time in 12 hours version AM/PM
function startUp(){
    var today= new Date();
    var day=today.getDay();
    var daylist=['Sunday',
                'Monady',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'];
var element= document.createElement('div');
element.className+='container footer';
var text=`<p>Today is:${daylist[day]}.</p>`;
var hour= today.getHours();
var minute=today.getMinutes();
var second= today.getSeconds();
var date= today.getDate();
var month= today.getMonth()+1;
var year= today.getFullYear();
var date= (date<10) ? `0${date}` :date;
var month= (month<10)?`0${month}`:month;
var todaydate= `<p>${date}/${month}/${year}</p>`;
var prepand=(hour>=12)? "PM" :"AM";
hour=hour%12;
minute=(minute<10)?`0${minute}` :minute;
second=(second<10)?`0${second}` :second;
hour=hour? hour : 12;
if(hour===0 && prepand==='PM')
{
    if(minute===0 && second===0)
    {
        prepand='Noon';
    }
    else 
    {
        hour=12;
        prepand='PM';
    }
}
if (hour===0 && prepand==='AM') {
    if (minute===0 && second===0) {
        hour=12;
        prepand='Midnight';
    }
    else{
        hour=12;
        prepand='AM';
    }
}
var text1=`<p>Current time: ${hour}:${minute}:${second} ${prepand}</p>`;
element.innerHTML= text+'\n'+text1+'\n'+todaydate;
document.body.appendChild(element);
}
//Print Current Window
function printCurrent() {
    window.print();
}
document.getElementById('triangleSides').addEventListener('submit', Heron);
function Heron(e) {
    e.preventDefault();
 var a=parseInt(document.getElementById('sideA').value);
var b=parseInt(document.getElementById('sideB').value);
var c=parseInt(document.getElementById('sideC').value);
var perimeter=(a+b+c)/2;
var result=Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
var printer=document.getElementById("result");
var text=`<p>Area of the triangle is ${result}</p>`;
  printer.innerHTML=text;
  document.getElementById('triangleSides').reset(); 
}