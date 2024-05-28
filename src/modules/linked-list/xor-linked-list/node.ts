export class Node<T> {
    data: T;
    xorPointer: number;

    constructor(data: T) {
        this.data = data;
        this.xorPointer = 0;
    }
}
