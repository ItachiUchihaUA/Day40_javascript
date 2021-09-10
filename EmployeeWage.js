function isPresent() {
    return Math.floor(Math.random() * 3)
}

const fullSal = 1600;
const halfSal = 800;

let arr = [];
let sal, total = 0, count = 0;
for (let i = 0; i < 30; i++) {
    sal = isPresent();
    arr[i] = sal == 0 ? 0 : sal == 1 ? 800 : 1600;
    total = arr[i] + total;
}

let EmpWage = arr.map(function (a, b) { return { key: b + 1, value: a } })
console.log(EmpWage)


console.log("Toatl wage: " + total)


console.log("Full time day :");
arr.forEach(function (a, b) { if (a == 1600) { console.log(b + 1) } });

console.log("First time Full wage: on Day" + (arr.findIndex(a => a == 1600) + 1))

arr.forEach(n => { if (n > 0) { count++ } });
console.log("\nNumber days Emp Worked: " + count);


console.log("\nPart time Day Is present: ")
console.log(arr.find((n => n == 800)) > -1) ? true : false;
