document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');

    document.getElementById('clear').addEventListener('click', function () {
        display.value = '';
    });

    document.getElementById('delete').addEventListener('click', function () {
        display.value = display.value.toString().slice(0, -1);
    });

    document.getElementById('dot').addEventListener('click', function () {
        display.value += '.';
    });

    document.getElementById('divide').addEventListener('click', function () {
        display.value += '/';
    });

    document.getElementById('add').addEventListener('click', function () {
        display.value += '+';
    });

    document.getElementById('subtract').addEventListener('click', function () {
        display.value += '-';
    });

    document.getElementById('multiply').addEventListener('click', function () {
        display.value += '*';
    });

    document.getElementById('equals').addEventListener('click', function () {
        display.value = eval(display.value);
    });

    // Numeric buttons
    const numericButtons = document.querySelectorAll('[id^="num"]');
    numericButtons.forEach(button => {
        button.addEventListener('click', function () {
            display.value += button.value;
        });
    });
});