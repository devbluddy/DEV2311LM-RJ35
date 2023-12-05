function add(num1, num2=1) {
    return num1 + num2;
}

console.log(add(100));
console.log(add(100,200));

function show(name) {
    name=name || "hieu";
    console.log("welcome ",name);
}

show();
show("minhhieu");