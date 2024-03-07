function containsDuplicate(tempArr: number[]) {

    let hash = new Map<number, number>();

    for (let i = 0; i < tempArr.length; i++) {
        if (hash.has(tempArr[i]))
            return true;
        else
            hash.set(tempArr[i], i)
    }
    return false;
}

const arr: number[] = [1, 2, 3, 1]
containsDuplicate(arr);

