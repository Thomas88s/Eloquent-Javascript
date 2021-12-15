export const chapter3 =
    console.log("Eloquent Javascript \nChapter 3 Exercises")

    console.log("\n                Minimum\n                  ")

    function min(numb1, numb2) {
        if (numb1 < numb2)
        {
            console.log(numb1)
        }
        else
        {
            console.log(numb2)
        }
    }

    min(144, 1000)
    min(890, 524)
    min(14412341, 19127)
    min(12, 88)

    console.log("\n               Recursion\n                 ")

    function isEven(numb) {
        if (numb % 2 == 0)
        {
            return true
        }
        else if (numb % 2 == 1)
        {
            return false
        }
        else
        {
            isEven(numb - 2)
        }
    }

    console.log(isEven(34));
    console.log(isEven(77));

    console.log("\n               Bean Counting\n                 ")

    function countBs(string) {
        let count = 0;
        for (let i = 0; i < string.length; i++)
        {
            if(string[i] === "B")
            {
                count += 1           
            }
        }
        return count
    }

    console.log(countBs("BUBBLE GUM"))
    console.log(countBs("BB Gun"))

    function countChar(string, varChar) {
        let count = 0;
        for (let i = 0; i < string.length; i++)
        {
            if(string[i] === varChar)
            {
                count += 1           
            }
        }
        return count
    }

    console.log(countChar("happy", "p"))
    console.log(countChar("amanaplanacanalpanama", "a"))

    function superCountBs(string) {
       return countChar(string, "B");
    }

    console.log(superCountBs("Bubbly"));
    console.log(superCountBs("Big Bodacious Bangin' Bertha" ))
