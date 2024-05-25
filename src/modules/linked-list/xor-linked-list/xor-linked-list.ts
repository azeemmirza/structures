import { Node } from './node';

function xor(a: number, b: number): number {
    return a ^ b;
}

export class XORLinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private nodes: Map<number, Node<T>>;
    private idCounter: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.nodes = new Map<number, Node<T>>();
        this.idCounter = 1;
    }

    private getNodeId(node: Node<T> | null): number {
        if (!node) return 0;
        for (let [id, n] of this.nodes.entries()) {
            if (n === node) return id;
        }
        const newId = this.idCounter++;
        this.nodes.set(newId, node);
        return newId;
    }

    private getNodeById(id: number): Node<T> | null {
        return this.nodes.get(id) || null;
    }

    add(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const tailId = this.getNodeId(this.tail);
            newNode.xorPointer = tailId;
            if (this.tail) {
                this.tail.xorPointer = xor(this.tail.xorPointer, this.getNodeId(newNode));
            }
            this.tail = newNode;
        }
        this.getNodeId(newNode);
    }

    toArray(): T[] {
        const result: T[] = [];
        if (!this.head) return result;

        let current: Node<T> | null = this.head;
        let prevId = 0;
        let nextId: number;

        while (current !== null) {
            result.push(current.data);
            nextId = xor(prevId, current.xorPointer);
            prevId = this.getNodeId(current);
            current = this.getNodeById(nextId);
        }

        return result;
    }
}
