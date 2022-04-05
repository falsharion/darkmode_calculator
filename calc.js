
let screen = document.getElementById('outputValue')

// function to return the value clicked
function display(fig){
    screen.value += fig
    return fig
}
// function to solve
function solve(){
    let x = screen.value
    let y = eval(x);
    screen.value = y
    return y

}
// function to clear the screen
function clearScreen(){
    screen.value ="" 
}
// function to calculate percentage
function percent(figß){
    let p = screen.value 
    const y = (p / 100);
    screen.value = y
    return y  
}

// to toggle the calculator
let button = document.querySelector(".theme-toggler");
let calculator = document.querySelector(".calculator");
function darkTheme() {
    calculator.classList.toggle("dark")
};
