// Taken and modified from https://dzone.com/articles/typescript-testing-tips-mocking-functions-with-jes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mockFunction<T extends (...args: any[]) => any>(fn: T): jest.MockedFunction<T> {
    return fn as jest.MockedFunction<T>;
}