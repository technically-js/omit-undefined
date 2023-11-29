type Defined<T> = {
    [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
}

export function defined<T extends object>(value: T): Defined<T>;