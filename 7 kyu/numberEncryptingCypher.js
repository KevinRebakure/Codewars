// Question: https://www.codewars.com/kata/57aa3927e298a757820000a8

function cypher(string) {
    let text = string.split('').map((value)=>{
        switch (value) {
            case 'I':
            case 'l':
                return 1
            case 'R':
            case 'z':
                return 2
            case 'E':
            case 'e':
                return 3
            case 'A':
            case 'a':
                return 4
            case 'S':
            case 's':
                return 5
            case 'G':
            case 'b':
                return 6
            case 'T':
            case 't':
                return 7
            case 'B':
                return 8
            case 'g':
                return 9
            case 'O':
            case 'o':
                return 0
            default:
                return value
        }
    })
    return text.join('')
}