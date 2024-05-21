// let a=9
// var num=0

// for(i=2;i<a;i++)
// {
//     if(a%i==0)
//     {
//         num=0
//         break;
//     }
//     else{


//         num=1
//     }


// }
// if(num==0)
//     {
//         document.write(" not prime")

//     }else{
//         document.write("  prime")

//     }

// var num=0
// var sum=0
// for(i=3;i<=100;i++)
// {
//     for(j=2;j<i;j++)
//     {
//         if(i%j==0)
//         {
//           num=0
//           break;

//         }
//         else{
//             num=1

//         }
//     }
//     if(num==1)
// {   
//     document.write(i,"<br/>")
//     sum=sum+i


// }
// }
// document.write(sum)



// bubble sort

// let temp;
// var arr=[2,3,8,1,7,6]
// for(i=0;i<arr.length;i++)
// {
//     for(j=i+1;j<arr.length;j++)
//     {
//          if(arr[i]>arr[j])
//          {
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp

//          }
//     }


// }
// console.log(arr)


// var arr=[2,3,8,5,9,3]
// arr.sort()
//  document.write(arr)




// function btn()
// {
//     var data="insuffient character"
//    var text= document.getElementById("inp").value
//    console.log(text.length);
//    if(text.length<8)
//    {
//     document.getElementById("location").innerHTML=data
//     // var a =document.getElementById("location").innerHTML
//     // document.write(a)


//    }
//    else{
//     document.getElementById("location").innerHTML=""
//    }

// }


// function btn()
// {
// var msg

// if(document.myform.inp.length<5)
// {
//     msg="bad"
// }
// else
// {
//     msg="good"
// }

// document.getElementById("h").innerHTML=msg
// }



// function sum(a,b)
// {
//     var c=a+b
//     document.write(c)
// }

// sum(5,7)


// for (var i = 1; i <= 5; i++) 
// {
//     for (var j = 1; j <= 5 - i; j++)
//      {
//         document.write('')
//     }
//     for (var k = 1; k <= 2 * i - 1; k++) 
//     {
//         document.write("*")
//     }
//     document.write("<br/>")
// }



// // palindrom
// var arr=["m","a","m"]

// var s=arr.reverse()

// if(arr==s)
// {
//     document.write("palindrom")
// }
// else
// {
//     document.write("not")
// }

// function reverseString(str) {
//     const strRev =  str.split('').reverse().join('');
//     document.write(strRev);
// }

// // Function call
// reverseString("GeeksforGeeks");
// reverseString("JavaScript");
// reverseString("TypeScript");



// var a="123"
// var s=a.split('').reverse().join('')
// if(s==a)
// {
//     document.write("palindrom")

// }
// else
// {
//     document.write("not")
// }


 
// var search=7
// var arr=[1,2,3,4,4,5,8,9,7]
// sum=0
// for(i=0;i<arr.length;i++)
// {
//     // document.write(arr[i],"</br>")
// // sum+=arr[i]
// if(search==arr[i])
// {
//    var num=1
//     break;
// }



// }
// // document.write(sum)
// if(num==1)
// {
//     document.write("found position",i+1)
// }
// else
// {
//     document.write("not")
// }

// var arr=[1,2,2,5,8,7,5,2,4]

// for(i=0;i<=arr.length;i++)
// {
//     for(j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             var temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp

//         }
//     }
    
// }
// document.write(arr)


// document.write("2<br/>")
// for(i=3;i<=100;i++)
// {
//     for(j=2;j<i;j++)
//     {
//         if(i%j==0)
//         {
//          var num=1
//          break;
//         }
//         else{
//             num=0
//         }
//     }
//     if (num==0)
// {
//     document.write(i,"<br/>")
// }
// }



// function btn()
// {
//     var text=document.getElementById("inp").value
//     document.getElementById("h").innerHTML=text

// }


// function btn()
// {


// var msg="manu"
// document.getElementById("location").innerHTML=msg


// }

// function btn()
// {
//     var msg;
//     if(document.myform.userpass.value.length<5)
//     {
//         msg="poor"
//     }
//     else{
//         msg="good"
//     }
//      document.getElementById("strength").innerHTML=msg
// }

// // fibinocci

// var sum=0
//  var num=0
//  var num1=1
// for(i=2;i<=10;i++)
// {
  
//    num=num1
//    num1=sum


//    sum=num1+num
//    document.write(sum,"<br/>")

// }


// var a=1
// console.log(b);
// let b=10
function btn()
{

var text=document.getElementById("inp").value;
// var lst='<li>Element</li>';
var box='<div class="box1" ></div>'

document.getElementById("mylocation").innerHTML+=box    

console.log(text)
}


