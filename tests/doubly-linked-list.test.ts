import { DoublyLinkedList } from '../src/modules/linked-list/doubly-linked-list/doubly-linked-list';

describe('DoublyLinkedList', () => {
    it('should initialize empty', () => {
        const list = new DoublyLinkedList<number>();
        expect(list.toArray()).toEqual([]);
    });

    it('should add elements', () => {
        const list = new DoublyLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.toArray()).toEqual([1, 2, 3]);
    });
});
