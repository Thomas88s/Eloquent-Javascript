


const go = (direction, mph) => {
   let output = "The car is moving  ${direction} at ${mph} mph."
   if (mph > 75) {
       console.log(output, "Slow Down!")
   }
   else console.log(output)

}
 
go("forward", 80)
go("backwards", 5)
go("circles", 35)


console.log(truck)