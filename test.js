function findMiddleElement(array) {
    if (array.length % 2 === 1) {
        return array[Math.floor(array.length / 2)];
    }
    else {
        return 0;
    }
}

let array = [78, 21, 12, 54, 45, 66, 99, 55, 22];
const result = findMiddleElement(array);
if (result != 0) {
    console.log(`Middle value in the Array [${array}] is ${result}`);
}
else {
    console.log(`Array [${array}] length is even, can't find the middle value`);
}