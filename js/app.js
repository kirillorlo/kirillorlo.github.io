function my_name() {

    let name = document.getElementById("name").value

    if (name == '') {
    document.getElementById("error").innerText = 'Ошибка! Введите имя!' 
    return
} 

console.log(name)

str = `Привет, ${name}!`

document.getElementById("result").innerText = str

document.getElementById("name").value = ''

document.getElementById("error").innerText = ''

}

// kirillorlo/kirillorlo.github.io
// Ввод данных
//let x = parseInt(prompt("Введите число"))
// Обработка данных
//x = x + 1
// Вывод данных
//alert(`x = ${x}`)  //`x = ${x}`
//alert(str)
// Валидация данных
//let my_name = prompt("Введите имя")