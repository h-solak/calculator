$(document).ready(function(){

    const addItem = (x) => {
        document.querySelector("#main-input").value += x
    }

    //checking if user is using "+,-,/,*" properly and then adding it to the screen
    const checkValid = (x) => {
        let input = document.querySelector("#main-input").value
        if((input.charAt((input.length)-1) != "")){
            let input2 = input.concat(x)
            document.querySelector("#main-input").value = input2
        }

    }

    //a function to calculate the input
    function evil(fn) {
        return new Function('return ' + fn)();
    }

    /*---button functionalities---*/

    $("#zero").click(() => {addItem(0)})
    $("#1").click(() => {addItem(1)})
    $("#2").click(() => {addItem(2)})
    $("#3").click(() => {addItem(3)})
    $("#4").click(() => {addItem(4)})
    $("#5").click(() => {addItem(5)})
    $("#6").click(() => {addItem(6)})
    $("#7").click(() => {addItem(7)})
    $("#8").click(() => {addItem(8)})
    $("#9").click(() => {addItem(9)})

    $("#delete").click(() => {
        let input = document.querySelector("#main-input").value
        let input2 = input.slice(0, -1);
        document.querySelector("#main-input").value = input2;
    })

    $("#delete-all").click(() => {
        document.querySelector("#main-input").value = ""
        document.querySelector("#op").innerHTML = ""
        
    })

    $("#point").click(() => {
        //not letting the user to put more than one dots like "6.."
        let input = document.querySelector("#main-input").value
        if ((input.charAt((input.length)-1) != ".")){
            let input2 = input.concat(".")
            document.querySelector("#main-input").value = input2
        }
    })

    //operations
    $("#sum").click(() => {
        checkValid("+")
    })

    $("#subtract").click(() => {
        checkValid("-")
    })

    $("#divide").click(() => {
        checkValid("/")
    })

    $("#multiply").click(() => {
        checkValid("*")
    })

    $("#equal").click(() => {
        let input = document.querySelector("#main-input").value
        document.querySelector("#op").innerHTML = input

        
        //calculating
        let result = evil(input)

        //adding an equal sign breaks the code, lets keep it for now
        //result = "=" + result
        document.querySelector("#main-input").value = result

    })

})