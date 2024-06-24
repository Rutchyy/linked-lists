class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    prepend(value) {
        const node = new Node(value);

        node.next = this.head;
        this.head = node;
    }

    size() {
        let i = 0;
        let node = this.head;
        while (node) {
            i++;
            node = node.next;
        }
        return node;
    }

    head() {
        return this.head;
    }

    tail() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    at(index) {
        if (index < 0) return null;
        if (index > this.size()) return null;
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (count === index) {
                return current;
            }
            current = current.next;
            count++;
        }
    }

    pop() {
        if (this.head === null) return null;
        if (this.head.nextNode === null) {
            this.head = null;
        }
        let current = this.head;
        while (current.nextNode.nextNode !== node) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return count;
            }
            current = current.nextNode;
            count++;
        }
        return null;
    }
}

let sample = new LinkedList()
sample.append("wazaaa")
sample.prepend("hazaaa")
sample.prepend("mazaa")

console.log(sample)