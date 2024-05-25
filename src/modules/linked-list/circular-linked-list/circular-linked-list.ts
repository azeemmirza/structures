import { Node } from './node';

export class CircularLinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    toArray(): T[] {
        const result: T[] = [];
        if (!this.head) return result;

        let current: Node<T> | null = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current && current !== this.head);

        return result;
    }

    getHead(): Node<T> | null {
        return this.head;
    }
}
