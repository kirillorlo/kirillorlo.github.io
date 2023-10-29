function clcltor_add() { 


    let x = +document.getElementById("num1").value 
    let y = +document.getElementById("num2").value
    let result_add = x + y
    document.getElementById("numResult_add").value = result_add
    
}

function clcltor_sub() { 

    let x = +document.getElementById("num3").value 
    let y = +document.getElementById("num4").value
    let result_sub = x - y
    document.getElementById("numResult_sub").value = result_sub

}

function clcltor_div() { 

    let x = +document.getElementById("num5").value 
    let y = +document.getElementById("num6").value
    let result_div = x / y

    if (y == 0){
        alert("Ошибка! Деление на ноль!")
        return
    }

    document.getElementById("numResult_div").value = result_div

}

function clcltor_mult() { 

    let x = +document.getElementById("num7").value 
    let y = +document.getElementById("num8").value
    let result_mult = x * y
    document.getElementById("numResult_mult").value = result_mult

}