function ex6Func() {
    var hour = parseInt(document.getElementById("hour").value)
    var minute = parseInt(document.getElementById("minute").value)
    var second = parseInt(document.getElementById("second").value)

    var output = "Time input: " + hour.toString() + "h" + minute.toString() + "m" + second.toString() + "s<br>One Second later: "

    if (hour < 0 || hour >= 24) {
        alert("Input Hour is not available")
        return false
    }
    if (minute < 0 || minute >= 60) {
        alert("Input Minute is not available")
        return false
    }
    if (second < 0 || second >= 60) {
        alert("Input Second is not available")
        return false
    }

    if (second == 59) {
        second = 0
        if (minute == 59) {
            minute = 0
            if (hour == 23) {
                hour = 0
            } else {
                hour += 1
            }
        } else {
            minute += 1
            if (hour == 23) {
                hour = 0
            } else {
                hour += 1
            }
        }
    } else {
        second += 1
        if (minute == 59) {
            minute = 0
            if (hour == 23) {
                hour = 0
            } else {
                hour += 1
            }
        } else {
            minute += 1
            if (hour == 23) {
                hour = 0
            } else {
                hour += 1
            }
        }
    }

    output += hour.toString() + "h" + minute.toString() + "m" + second.toString() + "s"

    document.getElementById("output").innerHTML = output
}