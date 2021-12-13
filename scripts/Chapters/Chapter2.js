export const chapter2 =
   console.log("Eloquent Javascript \nChapter 2 Exercises")


    console.log("\n                Looping a triangle \n                         ")
   let input = " ";

   for (let i = 1; i <= 7; i++)
   {
       console.log(input += "#")
   }

   console.log("\n                Looping a triangle \n                         ")
   for (let index = 1; index <= 100; index++) {
        if (index % 3 === 0 && index % 5 === 0)
        {
            console.log("FizzBuzz");
        }
        else if (index % 3 === 0)
        {
            console.log("Fizz")
        }
        else if (index % 5 === 0)
        {
            console.log("Buzz")
        }
        else 
        {
            console.log(index)
        }
   }
    
   console.log("\n                Chessboard \n                         ")

   let whiteSpace = " ";
   let blackSpace = "#";
   let output = " ";
   let output2 = " ";
   function ChessBoard(sizeOfBoard)
   {
         
        for (let i = 1; i < sizeOfBoard; i++) {
            if (i % 2 === 0)
            {
                output += blackSpace;
                output2 += whiteSpace;
            }
            else 
            {
                output += whiteSpace;
                output2 += blackSpace;
            }
        }        
        for (let j = 0; j < sizeOfBoard; j++) {
            if (j % 2 === 0)
            {
                console.log(output);
            }
            else
            {    
                console.log(output2);
            }
            
        }
            
    }
       
   
   ChessBoard(12);