class LinkList {
    constructor () {
        this.length = 0;
        this.head = null;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index Error')
        }
        const newNode = {value};
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let before = this._find(index-1);
            newNode.next = before.next;
            before.next = newNode;
        }
        this.length++;
    }

    _find(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    
} 