function createSum() {
    let total = 0;
    return function(num) {
        total += num;
        return total;
    };
 }

 const sum = createSum();

 alert('sum(4)=' + sum(4));
 alert('sum(6)=' + sum(6));
 alert('sum(10)=' + sum(10));
 alert('sum(7)=' + sum(7));
