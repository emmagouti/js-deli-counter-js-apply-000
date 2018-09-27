 x = 0;
 
function takeANumber(array) {

  x++
 array.push(x);
 
 
  return ('Welcome, you are number ' + x )
}

let line = []

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(nowServing(line))
console.log(nowServing(line))
console.log(nowServing(line))
console.log(takeANumber(line))


function nowServing(current) {
  if (current.length === 0  ){
    return ("There is nobody waiting to be served!")
  }
  
  else {
    return ("Currently serving " +  current.shift() + "." );
  }
}

function currentLine(line) {
    
  if (line.length === 0  ){
    return ("The line is currently empty.")
  }
  
  
  else {
  
    var newline ="The line is currently:"
	 
		var	x=0
 		while (x < line.length){
 			if (x === line.length-1){
 				newline += ` ${x+1}. ${line[x]}`
 			}
 			else{
 				newline += ` ${x+1}. ${line[x]},`
  			
 			}
 			x++
		}
	return newline
 	}

}