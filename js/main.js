function calculate() {
    let type, count, result;
    type = document.getElementById('type').value;
    count = document.getElementById('count').value;
    type = parseInt(type);
    count = parseInt(count);
    if (!(Number.isInteger(type) && Number.isInteger(count))) {
        alert("Укажите числа");
    } else if ((count <= 0) || (count > 1000000)) {
        alert("Error of count!");
    } else if (type < 0 || type > 1000000) {
        alert("Error");
    } else {
        result = type * count;
        console.log("type");
        console.log(type);
        console.log("count");
        console.log(count);
        console.log("result");
        console.log(result);
        document.getElementById('sum').innerHTML = "Сумма равна: " + result + " руб.";
    }
}

function hid() {
    let type;
    type = document.getElementById('typ').value;
    switch (type) {
        case'1':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = true;
            break;
        case'2':
            document.getElementById("radio").hidden = false;
            document.getElementById("checkbox").hidden = true;
            break;
        case'3':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = false;
            break;
    }
}

function calculate2() {
    let type, count, checkbox, radio, res;
    var rate, chec = 0;
    type = document.getElementById('typ').value;
    count = document.getElementById('county').value;
    checkbox = document.getElementsByName('checkbox');
    radio = document.getElementsByName('radio');
    count = parseInt(count);

    if (!(Number.isInteger(type) && Number.isInteger(count)) && !(count > 0 && count < 10000)) {
    } else {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                rate = radio[i].value;
            }
        }
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                chec += checkbox[i].value;
            }
        }
        switch (type) {
            case '1':
                res = count * 1199;
                break;
            case '2':
                if (rate == 1) {
                    res = count * 2599;
                }
                if (rate == 2) {
                    res = count * 1999;
                }
                break;
            case '3':
                if (chec == 0) {
                    res = count * 1999;
                }
                if (chec == 1) {
                    res = count * 10000;
                }
                if (chec == 2) {
                    res = count * 2499;
                }
                if (chec == 12) {
                    res = count * (2499 + 10000);
                }
                break;
        }
        document.getElementById('produce').innerHTML = "Стоимость: " + res + " руб.";
    }

    console.log("type");
    console.log(type);
    console.log("count");
    console.log(count);
    console.log("radio");
    console.log(rate);
    console.log("checkbox");
    console.log(chec);
    console.log("result");
    console.log(res);
}