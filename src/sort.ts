export function simpleSort<T>(arr: T[], direction: 'asc' | 'desc' = 'asc'): T[] {
    if (arr.length <= 1) {
        return arr;
    }
    
    const sorted = [...arr];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            const dirCond: boolean = direction === 'desc' 
                ? sorted[j] < sorted[j + 1]
                : sorted[j] > sorted[j + 1];
                
            if (dirCond) {
                const temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    return sorted;
}