var times = 0

function ex4Func()
{
    times+=1

    var inputPasswd = document.getElementById("passwd").value

    if (inputPasswd == "secret")
    {
        alert("You entered the correct password after "+times+" attempt(s)")
        times = 0
    }else
    {
        if (times>=3)
        {
            alert("Your account is locked! You failed to enter the correct password "+times+" times")
        }
        else
        {
            alert("Try again!")
        }
    }
}