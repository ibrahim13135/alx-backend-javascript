


function varFun() {
    var x = 1;

    if (true) {
        var x = 2;
        console.log(x);
    }

    console.log(x);

    return 'Donee';
}
console.log(varFun)
