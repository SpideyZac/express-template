export function createLogFunction(fileName: string): (...args: any[]) => void {
    return function log(functionNameInfo: string, ...args: any[]) {
        if (args.length > 0) {
            console.log(`[${fileName}-${functionNameInfo}]`, ...args);
        } else {
            throw Error(`[${fileName}-log] The number of args has to be greater than 1!`);
        }
    }
}