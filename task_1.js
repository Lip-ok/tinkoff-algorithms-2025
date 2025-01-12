function finishTalks(n, m, arrivalTimes) {
    let finishTimes = []
    let currentTime = 0

    for(let i =0; i<n; i++){
        const arrivalTime = arrivalTimes[i]
        currentTime = Math.max(currentTime, arrivalTime)
        finishTimes[i] = currentTime + m 
        currentTime += m;
    }
    return finishTimes
}

const input = "3 4 \n0 2 10"
const lines = input.split('\n')
const [n, m] = lines[0].split(' ').map(Number)
const arrivalTimes = lines[1].split(' ').map(Number)
const result = finishTalks(n, m, arrivalTimes)
console.log(result.join(' ')) 
