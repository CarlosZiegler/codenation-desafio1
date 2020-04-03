const alphabetic = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function newIndex(index, offset, alphabetic ){
    
    if (index - offset > -1) {
        return index - offset
    }

    const rest = index - offset
       
    return alphabetic.length - Math.abs(rest)
    
}

function crypto (word){
    const arrayWord = word.split('')
    
    const newArrayWord = arrayWord.map(letter => {
        if (letter ==='.') {
            return letter
        }
        const index = alphabetic.indexOf(letter)
        const newIndexAlphabet = newIndex(index, 5, alphabetic)       
        const newLetter = alphabetic[newIndexAlphabet]
        
        return newLetter
    })
    
    return newArrayWord.join('')
}

module.exports = crypto