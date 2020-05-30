var calculate = function(score, outOf){
    let percent = (score/outOf)*100
    return percent
}


console.log(`my percentage is: ${calculate(25, 60)}`)