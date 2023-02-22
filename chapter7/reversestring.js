function reverse(string) 
{    var strRev = "";   
 for (var i = string.length - 1; i >= 0; i--) 
 {        strRev += string[i];   
 }    return strRev; 
}
reverse("hello,world"); 