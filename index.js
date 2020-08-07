const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arrObj){
  let output = arrObj.find(({result}) => {
    return result === "W"
  })
  return !!output ? output.year : undefined
}



const sampledata = [{ year: "1968", result: "N/A"},
{ year: "1967", result: "N/A"},
{ year: "1961", result: "N/A"},
{ year: "1960", result: "N/A"}];

console.log(superbowlWin(sampledata))