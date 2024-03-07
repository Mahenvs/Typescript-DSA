function isValidAnagram(s: string, t: string): boolean {

    const hash = new Map<string, number>();
    if (s.length != t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (hash.get(s.charAt(i)))
            hash.set(s.charAt(i), hash.get(s.charAt(i)) + 1)
        else
            hash.set(s.charAt(i), 1)
    }
    for (let j = 0; j < t.length; j++) {
        if (!hash.has(t.charAt(j))) {
            return false;
        }
        else {
            if (hash.get(t.charAt(j)) == 1)
                hash.delete(t.charAt(j));
            else
                hash.set(t.charAt(j), hash.get(t.charAt(j)) - 1)
       }
    }
    return true;
}

const input1: string = "hello";
const input2: string = "ollke";

isValidAnagram(input1, input2)