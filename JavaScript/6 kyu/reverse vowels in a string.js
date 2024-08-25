const reverseVowels = (string) => {
    const characters = string.split('')
    const vowelsRegEx = /[aioueAIUOE]/gi

    const indices = characters.reduce((acc, character, index) => {
        if (character.match(vowelsRegEx)) {
            acc.push(index)
        }
        return acc
    }, [])

    const reorderedVowels = characters
        .filter((character) => character.match(vowelsRegEx))
        .reverse()

    return characters
        .map((character, index) => {
            return indices.includes(index)
                ? reorderedVowels[indices.indexOf(index)]
                : character
        })
        .join('')
}
