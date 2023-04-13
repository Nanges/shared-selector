export function idGenerator(prefix: string) {
    let _uniqueId: number = 0;
    return function () {
        return `${prefix}-${++_uniqueId}`;
    };
}
