const display = document.querySelector('.pre-operand');
const button = document.querySelectorAll('button');
const results = document.querySelector('.result');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');

button.forEach(item => {
    item.addEventListener('click',()=> {
        display.textContent += item.value
    })
})

equal.addEventListener('click', () => {
    if(display.textContent != ''){
        results.textContent = eval(display.textContent);
        display.textContent = '';
    }
});

clear.addEventListener('click', () => {
    display.textContent = '';
    results.textContent = 0;
})

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
})


