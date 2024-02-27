export function choiceToString(c: string){
    let regex = /'.*?',\s*'(.*)'/; // Regular expression to match the substring between the second pair of single quotes
    let match = c.match(regex);

    if (match && match.length >= 2) {
        let result = match[1];
        return result
    } else {
        return ''
    }
}
