// function msg()
// {
//     alert("hello!this is message")

// }
// msg();


// function sum(a,b)
// {
   
//   let sum=a+b;
//   document.write("sum=",sum,"<br/>")
// }
// function sub(a,b)
// {
//     let sub=a-b;
//     document.write("substraction=",sub,"<br/>")
// }
// function mul(a,b)
// {
//     let mul=a*b;
//     document.write("multiplication=",mul,"<br/>")
// }
// function div(a,b)
// {
//     let div=a/b;
//     document.write("division=",div)
// }
// sum(20,30)

// sub(40,20)
// mul(30,10)
// div(4,2)
// function getinfo()
// {
//     return "hello john";
// }
// document.write(getinfo())
// function squre(a)
// {
//     area=a*a
//     document.write("area of squre=",area,"<br/>")
// }
// function rectangle(l,b)
// {
//     area=l*b
//     document.write("area of rectangle=",area,"<br/>")
// }
// function circle(r)
// {
//  area=22/7*(r*r)
//  document.write("area of circle=",area,"<br/>")
// }
// function triangle(b,h)
// {
//     area=1/2*(b*h)
//     document.write("area of triangle=",area)

// }
// squre(5)
// rectangle(3,5)
// circle(7)
// triangle(5,8)

// let username="john";
// function showmessage()
// {
//     let message=new String("hello java script");
//     alert("message")
// }
// showmessage();
// alert(username)
// alert(message)


// let a;
// console.log(a)

// let b=null
// console.log(b)


// let str="hello"
// let phase=`can embed another${str}`
// document.write(phase)

// var str="java script"
// var str1="html"
// document.write(str.charAt(5))



// var str3=str.concat(str1)
// document.write(str3)

// var str="bootstrap"
// var n=str.indexOf("p")
// document.write(n)


// var s="BOOTSTRAP"
// var s1=s.toLowerCase()
// document.write(s1)


// var s="abcdefgh"
// var s1=s.slice(2,5)
// document.write(s1)

// var s="abcdefgh"
// var s1=s.trim()
// document.write(s1)



// var a="abcdefgh dkd d dmd dmd m"
// document.write(a.split(" "))


// var n="abcdefgh"
// document.write(n.substr(3,6))


function vow()
{
    sum=0
    var str="manu"
    
    for(var i=0;i<=9;i++)
    {
     if(str.charAt(i)== "a"||str.charAt(i)== "e"||str.charAt(i)== "i"||str.charAt(i)== "o"||str.charAt(i)== "u")
     {
      sum=sum+1
     }
    }
    document.write("number of vowels=",sum)
}
vow()

// function vow(a)
// {
//     sum=0
    
    
//     for(var i=0;i<=100;i++)
//     {
//      if(a.charAt(i)== "a"|| "e"|| "i"|| "o"|| "u")
//      {
//       sum=sum+1
//      }
//     }
//     document.write("number of vowels=",sum)
// }
// vow("eemmmmooooooooooooeeeeau")


