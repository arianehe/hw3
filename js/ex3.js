function ex3Func() {
    var int1 = parseInt(document.getElementById("int1").value)
    var int2 = parseInt(document.getElementById("int2").value)

    if (!(/(^[0-9]*[1-9][0-9]*$)/.test(int1))) {
        alert("Integer #1 is NOT an integer input!")
        return false
    }
    if (!(/(^[0-9]*[1-9][0-9]*$)/.test(int2))) {
        alert("Integer #2 is NOT an integer input!")
        return false
    }

    var outInt1s = document.getElementsByClassName("outInt1")
    for (var i = 0; i < outInt1s.length; i++) {
        outInt1s[i].innerHTML = int1
    }

    var outInt2s = document.getElementsByClassName("outInt2")
    for (var j = 0; j < outInt2s.length; j++) {
        outInt2s[j].innerHTML = int2
    }

    document.getElementById("add").innerText = int1 + int2
    document.getElementById("sub").innerText = int1 - int2
    document.getElementById("times").innerText = int1 * int2
    document.getElementById("div").innerText = int1 / int2
    document.getElementById("mod").innerText = int1 % int2


}