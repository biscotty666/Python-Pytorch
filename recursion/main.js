import { phi, sqrt } from 'mathjs'

const countToken = (num = 1) => {
  while (num <= 10) {
    console.log(num)
    num++
  }
}

// countToken()

// recursive functions have 2 parts:
// 1. the recursive call to the function
// 2. At least 1 condition to exit

const recurToTen = (num = 1) => {
  if (num > 10) return
  console.log(num)
  num++
  recurToTen(num)
}

const fibLoop = (num, array = [0,1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2)
    array.push(nextToLast + last)
    num--
  }
  return array
}

console.log(fibLoop(12).slice(-1)[0])

const fibRec = (num, array = [0,1]) => {
  if (num <= 2) return array
  const [nextToLast, last] = array.slice(-2)
  return fibRec(num-1, [...array, nextToLast + last])
}

console.log(fibRec(12))

const fibPosLoop = (pos) => {
  if (pos <= 1) return pos
  const seq = [0,1]
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2)
    seq.push(nextToLast + last)
  }
  return seq[pos]
}

console.log(fibPosLoop(8))

// const fibPosRec = (pos) => {
//   if (pos <= 1) return pos
//   return fibPosRec(pos - 1) + fibPosRec(pos - 2)
// }

const fibPosRec = pos => pos < 2 ? pos : fibPosRec(pos - 1) + fibPosRec(pos-2)

console.log(fibPosRec(8))