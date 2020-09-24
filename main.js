import {ascii_values} from "./values.js"

export let interpreter = (tape) => {
   let data = tape.split("")
   let count = 0
   let result = []
   data.forEach( e => {
    if (e === "i") {
      count += 1
    } else if (e === "d") {
      count -= 1
    } else if (e === "s") {
      count = count ** 2
    } else if (e === "o") {
      result.push(ascii_values[`${count}`])
    } else if (e === "c") {
      count = 0
    }
  })
  return result
}
