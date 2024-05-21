
// function getcube()
// {
//     var num=document.getElementById("number").value;
//     alert(num*num*num);

// }


// function totalelements()
// {
//     var allgenders=document.getElementsByName("gender");
//     alert("total="+allgenders.length)
// }

// function countpara()
// {
//     var totalpara=document.getElementsByTagName("p")
//     alert("total="+totalpara.length)

// }


// innerHtml

// function showcommentform() {
//     var data='hi'
//     document.getElementById('mylocation').innerHTML=data;
//     }


// function validate()
// {
//   var msg;
//   if(document.myform.userpass.value.length>5)
//   {
//     msg="good";
//   }
//   else{
//     msg="poor";
//   }
//   document.getElementById("mylocation").innerHTML=msg;
// }


// *input calculation




function click1() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var sum = parseInt(number1) + parseInt(number2)
    document.write(sum)
}

function click2() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var sum = parseInt(number1) - parseInt(number2)
    document.write(sum)
}
function click3() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var sum = parseInt(number1) *parseInt(number2)
    document.write(sum)
}
function click4() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var sum = parseInt(number1) /parseInt(number2)
    document.write(sum)
}


// var num1=0
// var num2=1
// var sum=0
// for(i=0;i<=10;i++)
// {

// sum=num1+num2

// document.write(sum,"<br/>")
// num1=num2
// num2=sum




// }