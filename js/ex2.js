function ex2Func()
{
    var day = document.getElementById("day").value

    var outDay2=""

    switch(day)
    {
        case "sun":
            outDay2 = "mon"
            break;
        case "mon":
            outDay2 = "tue"
            break;
        case "tue":
            outDay2 = "wed"
            break;
        case "wed":
            outDay2 = "thu"
            break;
        case "thu":
            outDay2 = "fri"
            break;
        case "fri":
            outDay2 = "sat"
            break;
        case "sat":
            outDay2 = "sun"
            break;
        default:
            alert("not an available input!")
    }

    document.getElementById("outDay1").innerText = day
    document.getElementById("outDay2").innerText = outDay2
}