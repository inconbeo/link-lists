'use strict';

class LinkList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Index Error');
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

  retrieve(index){
    if (index < 0 || index >= this.length) {
      throw new Error('Index Error');
    }
    const node = this._find(index);
    return node.value;
  }

  remove(index){
    if (index < 0 || index >= this.length) {
      throw new Error('Index Error');
    }

    //if HEAD
    if(index === 0){
      this.head = this.head.next;
    }

    //if not HEAD
    else {
      let before = this._find(index - 1);
      before.next = before.next.next;
    }
    this.length--;
  }
} 

const linkList = new LinkList();

linkList.insert(0, 'Eddie');
linkList.insert(1, 'Quang');
console.log(linkList);

console.log('retrieve', linkList.retrieve(1));
console.log('remove', linkList.remove(0));
console.log('retireve', linkList.retrieve(0));