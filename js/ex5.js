function ex5Func() {
    var getInt = parseInt(document.getElementById("inputInt").value)

    var output = ""

    for (var i = 0; i <= 10; i++) {
        output += getInt.toString() + "*" + i.toString() + "=" + (getInt * i).toString() + "<br>"
    }

    document.getElementById("output").innerHTML = output
}