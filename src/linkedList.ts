class Node<T> {
    data: T;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    append(data: T): void {
        const newNode = new Node(data);
        
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    delete(data: T): boolean {
        if (this.head === null) {
            return false;
        }

        let current = this.head;
        
        while (current !== null) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                } else {
                    if (current.prev) {
                        current.prev.next = current.next;
                    }
                    if (current.next) {
                        current.next.prev = current.prev;
                    }
                }
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    search(data: T): T | null {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return current.data;
            }
            current = current.next;
        }
        return null;
    }

    printList(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    printListReverse(): T[] {
        const result: T[] = [];
        let current = this.tail;
        while (current !== null) {
            result.push(current.data);
            current = current.prev;
        }
        return result;
    }

    getFirst(): T | null {
        return this.head ? this.head.data : null;
    }

    getLast(): T | null {
        return this.tail ? this.tail.data : null;
    }

    size(): number {
        return this.length;
    }
}
