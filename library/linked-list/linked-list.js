class LLNode {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.list = null;
        this.head = this.list
        this.tail = this.list;
        this.count = 0;
    }

    add(data) {
        if (!this.list) {
            this.list = new LLNode(data)
            this.head = this.list;
            this.tail = this.list;
            this.count = 1;
            return
        }
        const recursiveAdd = (node, prev) => {
            if (node == null) {
                prev.next = new LLNode(data);
                this.count += 1;
                return
            }
            recursiveAdd(node.next, node);
            return node;
        }
        return recursiveAdd(this.head);
    }

    update(data, index) {
        if (!this.head) throw new Error('LL is not initialised');
        const concernedNode = this.getNode(index);
        if (concernedNode !== null) {
            // we have the node, just update it
            concernedNode.data = data
        }

    }

    getNode(index = 0) {
        if (!this.head) throw new Error('LL is not initialised');
        if (index > this.count) throw new Error('index out of bounds');
        const recursiveGetNodeByIdx = (node, position) => {
            if (!node) return null;
            if (position == 0) return node;
            return recursiveGetNodeByIdx(node.next, position -1);
        }
        return recursiveGetNodeByIdx(this.head, index);
    }

    searchNode(data) {
        if (!this.head) throw new Error('LL is not initialised');
        const recursiveSearch = node => {
            if (!node) reurn -1;
            if (node.data == data) return node;
            return recursiveSearch(node.next);
        }
        return recursiveSearch(this.head);
    }

    traverse() {
        if (this.list) {
            const results = [];
            const recursiveTraverse = (node) => {
                if (node == null) return;
                results.push(node.data);
                return recursiveTraverse(node.next);
            }
            recursiveTraverse(this.head)
            console.log(results)
        } else throw new Error('List not initialised')
    }
}

module.exports = {
    LinkedList
}