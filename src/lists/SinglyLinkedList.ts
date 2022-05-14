export type SinglyLinkedListNode = {
  value: any;
  next: SinglyLinkedListNode | null;
};

export type ValuesList = any[];

class Node {
  public value: any;
  public next: SinglyLinkedListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  public head: SinglyLinkedListNode | null = null;

  public tail: SinglyLinkedListNode | null = null;

  public length = 0;

  public insertTail(value: any): SinglyLinkedList {
    this.length++;
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }

    this.head = this.tail = newNode;
    return this;
  }

  public insertHead(value: any): SinglyLinkedList {
    this.length++;
    const newNode = new Node(value);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }

    this.head = this.tail = newNode;
    return this;
  }

  public insertIndex(value: any, index: number): SinglyLinkedList {
    if (index >= this.length) throw new Error('Provided index out of bounds');

    if (index === 0) return this.insertHead(value);

    let previousNode: SinglyLinkedListNode | null = null;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode?.next as SinglyLinkedListNode | null;
    }

    const newNode = new Node(value);

    newNode.next = currentNode;
    previousNode!.next = newNode;

    this.length++;
    return this;
  }

  public removeTail(): SinglyLinkedList {
    if (this.tail) {
      this.length--;

      const tailNode = this.tail;
      let currentNode = this.head;

      while (currentNode?.next != tailNode) {
        currentNode = currentNode?.next as SinglyLinkedListNode | null;
      }

      const beforeTail = currentNode;
      this.tail = beforeTail;
      this.tail.next = null;

      return this;
    }

    return this;
  }

  public removeHead(): SinglyLinkedList {
    if (this.head) {
      this.length--;

      this.head = this.head.next;

      return this;
    }

    return this;
  }

  public removeIndex(index: number): SinglyLinkedList {
    if (index >= this.length) throw new Error('Provided index out of bounds');

    if (index === 0) return this.removeHead();

    let previousNode: SinglyLinkedListNode | null = null;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode?.next as SinglyLinkedListNode | null;
    }

    previousNode!.next = currentNode!.next;

    this.length--;
    return this;
  }

  public clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public values(): ValuesList {
    let current = this.head;

    const valuesList: ValuesList = [];

    while (current) {
      valuesList.push(current.value);

      current = current.next;
    }

    return valuesList;
  }
}
