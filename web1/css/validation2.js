$(document).ready(function()
{
   
    $("#form").validate(
        {
            rules:
            {
                name:
                {
                    required:true,
                    minlength:4
                }
            },
            messages:
            {
                name:
                {
                    required:"enter name"
                }
            }
        } )

    $("#but").click(function()
    {
        $("#box").toggle(2000)
    })
})