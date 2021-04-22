var numbers = document.querySelectorAll('.number');
var operations = document.querySelectorAll('.operator');
var clearBtns = document.querySelectorAll('.clear-btn');
var decimalBtn = document.getElementById('decimal');
var resultBtn = document.getElementById('result');
var display = document.getElementById('display');
var MemoryCurrentNum = 0;
var MemoryNewNum = false;
var MemoryPendingOperation = '';


for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);

    });
};

for (var i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);

    });
};

for (var i = 0; i < clearBtns.length; i++) {
    var clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    });
};
decimalBtn.addEventListener('click', decimal);
resultBtn.addEventListener('click', result);

function numberPress(num) {
    if (MemoryNewNum) {
        display.value = num;
        MemoryNewNum = false;
    } else {
        if (display.value === '0') {
            display.value = num;
        } else {
            display.value += num;
        };
    };

};

function operation(oper) {
    var localOperMemory = display.value;

    if (MemoryNewNum && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNum;
    } else {
        MemoryNewNum = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNum += parseFloat(localOperMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNum -= parseFloat(localOperMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNum *= parseFloat(localOperMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNum /= parseFloat(localOperMemory);
        } else {
            MemoryCurrentNum = parseFloat(localOperMemory);
        };
        display.value = MemoryCurrentNum;
        MemoryPendingOperation = oper;
    };
};

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        MemoryNewNum = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNum = true;
        MemoryCurrentNum = 0;
        MemoryPendingOperation = '';
    };
};

function decimal() {
    var localDecimalMemory = display.value;

    if (MemoryNewNum) {
        localDecimalMemory = '0.';
        MemoryNewNum = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        };
        display.value = localDecimalMemory;
    };
    console.log("decimal number");
};