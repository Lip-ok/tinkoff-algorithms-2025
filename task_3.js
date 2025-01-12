function solve(input){
    const lines = input.trim().split('\n')

    const t = parseInt(lines[0])
    let output = []
    let index = 1

    for(let test = 0; test<t; test++){
        const n = parseInt(lines[index++])
        const h = lines[index++].split(' ').map(Number)
        const g = lines[index++].split(' ').map(Number)
        const p = lines[index++].split(' ').map(Number)

        const isPossible =(day)=> {
            const heights = h.map((height, i)=> height + day*g[i])
            const sorted = [...heights].sort((a,b)=> a-b)

            for(let i=0; i<n; i++){
                const currentHeight = heights[i]
                const countHigher = sorted.length - sorted.indexOf(currentHeight)-1
                if(countHigher !== p[i]){
                    return false
                }
            }
             return true
        }
        let left = 0, right = 1e9, result= -1

        while (left<=right){
            const mid = Math.floor((left + right)/2)
            if(isPossible(mid)){
                result = mid
                right = mid-1
            } else {
                left = mid + 1
            }
        }
        output.push(result)
       
    }
    return output.join('\n')
}
const input = `6 1 10 1 0 2 7 3 8 10 1 0 2 3 6 10 8 0 1 2 7 3 8 9 1 0 2 7 7 8 8 0 1 2 7 3 8 8 1 0`;
console.log(solve(input));
