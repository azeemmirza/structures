import { SinglyLinkedList } from '../src/modules/singly-linked-list/singly-linked-list';

describe('SinglyLinkedList', () => {
    it('should initialize empty', () => {
        const list = new SinglyLinkedList<number>();
        expect(list.toArray()).toEqual([]);
    });

    it('should add elements', () => {
        const list = new SinglyLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.toArray()).toEqual([1, 2, 3]);
    });
});

