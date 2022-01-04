export const chapter3 =
    console.log("Eloquent Javascript \nChapter 4 Exercises")

function range(start, end, step) {
    let numbs = [];

    if (step)
    {
        if (Math.sign(step) === 1) {
            for (let i = start; i <= end; i += step) {
                numbs.push(i);   
            }
        }
        else if (Math.sign(step) === -1)
        {
            for (let i = start; i >= end; i += step) {
                numbs.push(i);   
            }     
        }
        else 
        {
            for (let i = start; i >= end; i++) {
                numbs.push(i);   
            }     
        }
    }
    else
    {
        for (let i = start; i <= end; i++) {
            numbs.push(i);   
        }
    }
    return numbs
}

console.log(range(5, 100, 0));
console.log(range(1, 25, 4));
console.log(range(25, 1, -4));

function sum(array) {
    let total = 0;
    for (const numb of array)
    {
        total += numb;
    }
    return total;
}

console.log(sum(range(1, 10)))