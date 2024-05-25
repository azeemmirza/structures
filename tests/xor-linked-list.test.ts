import { XORLinkedList } from '../src/modules/linked-list/xor-linked-list/xor-linked-list';

describe('XORLinkedList', () => {
    it('should initialize empty', () => {
        const list = new XORLinkedList<number>();
        expect(list.toArray()).toEqual([]);
    });

    it('should add elements', () => {
        const list = new XORLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.toArray()).toEqual([1, 2, 3]);
    });
});
