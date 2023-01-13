export function createLogFunction(fileName: string): (...args: any[]) => void {
    return function log(...args: any[]) {
        if (args.length > 1) {
            console.log(`[${fileName}-${args[0]}]`, ...args.slice(1));
        } else {
            throw Error(`[${fileName}-log] The number of args has to be greater than 1!`);
        }
    }
}