function countLtterOccurences(s) {
    const counts = {}
    const n=s.length

    for(let i = 0; i<n; i++) {
        const char = s[i]
        const startCount = i+1
        const endCount = n -i
        const occurences = startCount * endCount

        if(counts[char]) {
            counts[char] += occurences
        } else {
            counts[char] = occurences
        }
    }
    const sortedLetters = Object.keys(counts).sort()

    const result = sortedLetters.map(letter => `${letter}: ${counts[letter]}`).join('\n')
    console.log(result)
}


const i = 'hello'
countLtterOccurences(i)
