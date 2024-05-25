import { CircularLinkedList } from '../src/modules/linked-list/circular-linked-list/circular-linked-list';
import { Node } from '../src/modules/linked-list/circular-linked-list/node';

describe('CircularLinkedList', () => {
    it('should initialize empty', () => {
        const list = new CircularLinkedList<number>();
        expect(list.toArray()).toEqual([]);
    });

    it('should add elements', () => {
        const list = new CircularLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it('should maintain circular link', () => {
        const list = new CircularLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);

        const head = list.getHead();
        if (head) {
            let current = head;
            let count = 0;
            do {
                current = current.next as Node<number>;
                count++;
            } while (current && current !== head && count <= 3);

            expect(count).toEqual(3);
            expect(current).toBe(head);
        }
    });
});
