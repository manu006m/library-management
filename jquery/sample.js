$(document).ready(function()
{
    $("#btn").click(function()
        {
            alert("button clicked")
        }
    )
    $("#btn").mouseenter(function()
    {
        $(this).css({"background":"red"})
    })
    $("#btn").click(function()
    {
$("#box").toggle(2000)
    })
$("#inp").blur(function()
{
    var text=$(this).val()
    if(text.length<4)
    {
        alert("enter minimum character")
        // $("#error").show()
    }
})
$("#form").validate(
{
    rules:{
        name:
        {
            required:true
        }
    }
})



})
