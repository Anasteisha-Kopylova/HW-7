(function() {
    
    let lastInput;

    for (let i = 0; i < 10; i++){
        
        const input = prompt('Enter a number greater than 100');
        if (input === null) {
            alert('input cancelled');
            break;
        }
        
        const num = Number(input);
        if (isNaN(num)) {
            alert('Please enter a valid number');
            i--;
            continue;
        }
        if (num > 100) {
            alert ('Last input:' + num);
            break;
        } else {
            lastInput = num;
        }
    }    

        if (lastInput !==undefined && lastInput <= 100) {
            alert('Last entered number:' + lastInput);
        }

    })();
