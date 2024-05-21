function buttonclick() {

     var num=0;
    var text = document.getElementById("inp").value
    for ( var i=2; i<text/2; i++) {
        if (text % i == 0) {
            var num=1;
            break;
        }
    }
    if (num==0)
    {
        console.log("prime")
    }
    else
    {
       console.log("not prime");
    }
}
