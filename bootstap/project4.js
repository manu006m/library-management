$(document).ready(function()
{
    $("#btn").click(function(){
        $("#login").toggle(2000)
    })
$("#frm").validate(
    {
        rules:
        {
            fname:{
                required:true
            },
            sname:{
            required:true
            },
            an:{
                required:true
            },
            ed:{
                required:true

            },
            pn:{
                required:true

            },pass:{
                required:true,
                minlength:8


            },cp:{
                required:true

            }
       
            
        },
        messages:
        {
            fname:
            {
                required:"*first name is required"
            },
            sname:{
                required:"*second name is required"
            },
            an:{
                required:"*enter admission number"
            },
            ed:{
                required:"*enter email adress"
            },pn:{
                required:"*enter phone number"
            },pass:{
                required:"*passsword required",
                minlength:"*enter atleast 8 elements"
            },cp:{
                required:"*confirm password"
            }
           

        }

       
    }
)



})

// function buttonclick()
// {

// var text=document.getElementById("pass").value;
// var text1=document.getElementById("cp").value;

// if(text!==text1)
// {
//     alert("enter same name")
// }
// else{
//     alert("confirm");
// }}





function buttonclick()
{

var text=document.getElementById("inp1").value;
var text1=document.getElementById("inp2").value;

if(text!==text1)
{
    alert("enter same name")
}
else{
    alert("confirm");
}}