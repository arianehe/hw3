function ex1Func()
{
    var name = document.getElementById("name").value
    var units = document.getElementById("units").value

    document.getElementById("outName").innerText = name


    if (units>=0 && units<=30)
    {
        document.getElementById("outGrade").innerText = "Freshman"
    }else if (units>=31 && units<=60)
    {
        document.getElementById("outGrade").innerText = "Sophomore"
    }else if (units>=61 && units<=90)
    {
        document.getElementById("outGrade").innerText = "Junior"
    }else if (units>=91)
    {
        document.getElementById("outGrade").innerText = "Senior"
    }else
    {
        alert("Not an available input!")
    }
}