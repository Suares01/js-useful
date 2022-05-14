import { SinglyLinkedList } from '../SinglyLinkedList';

let singlyLinkedList: SinglyLinkedList;

describe('SinglyLinkedList', () => {
  beforeEach(() => {
    singlyLinkedList = new SinglyLinkedList();
  });

  describe('insert values', () => {
    it('should insert a value in the list tail', () => {
      singlyLinkedList.insertHead('teste1').insertTail('teste2');

      expect(singlyLinkedList.values()[1]).toBe('teste2');
    });

    it('should insert a value in the list head', () => {
      singlyLinkedList
        .insertTail('teste1')
        .insertTail('teste2')
        .insertHead('teste3');

      expect(singlyLinkedList.values()[0]).toBe('teste3');
    });

    it('should insert a value in the specific index', () => {
      singlyLinkedList
        .insertTail('teste1')
        .insertTail('teste2')
        .insertHead('teste3')
        .insertIndex('teste4', 1);

      expect(singlyLinkedList.values()[1]).toBe('teste4');
    });

    it('should throw an Error if the given index is greater than the length of the list', () => {
      singlyLinkedList
        .insertTail('teste1')
        .insertTail('teste2')
        .insertHead('teste3');

      expect(() => singlyLinkedList.insertIndex('teste4', 10)).toThrowError(
        new Error('Provided index out of bounds'),
      );
    });
  });

  describe('remove values', () => {
    it('should remove a value in the list tail', () => {
      singlyLinkedList
        .insertHead('teste1')
        .insertTail('teste2')
        .insertTail('teste3')
        .removeTail();

      expect(singlyLinkedList.values()).toEqual(['teste1', 'teste2']);
    });

    it('should remove a value in the list head', () => {
      singlyLinkedList
        .insertTail('teste1')
        .insertTail('teste2')
        .insertHead('teste3')
        .removeHead();

      expect(singlyLinkedList.values()).toEqual(['teste1', 'teste2']);
    });

    it('should remove a value in the specific index', () => {
      singlyLinkedList
        .insertTail('teste1')
        .insertTail('teste2')
        .insertHead('teste3')
        .removeIndex(1);

      expect(singlyLinkedList.values()).toEqual(['teste3', 'teste2']);
    });

    it('should throw an Error if the given index is greater than the length of the list', () => {
      singlyLinkedList
        .insertTail('teste1')
        .insertTail('teste2')
        .insertHead('teste3');

      expect(() => singlyLinkedList.removeIndex(10)).toThrowError(
        new Error('Provided index out of bounds'),
      );
    });

    it('should clear the linked list', () => {
      singlyLinkedList
        .insertTail('teste1')
        .insertTail('teste2')
        .insertHead('teste3')
        .clear();

      expect(singlyLinkedList.values()).toEqual([]);
      expect(singlyLinkedList.length).toEqual(0);
      expect(singlyLinkedList.head).toEqual(null);
      expect(singlyLinkedList.tail).toEqual(null);
    });
  });
});
