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
/////////////////////////////////////////////////////////////////////////////////////////////////////////

let print = linkList => {
  let node = linkList.head;
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
};
//O(n);

let size = linkList => {
  let counter = 0;
  let node = linkList.head;
  while (node !== null) {
    counter++;
    node = node.next;
  }
  return counter;
};
//O(n);

let isEmpty = linkList => {
//   if (linkList.head === null) {
//     return true;
//   }
//   else return false;

return linkList.head === null;
};
//O(1);

const linkList = new LinkList();

let findPrevious = (linkList, value) => {
    let node = linkList.head;
    while (node.next.value !== value) {
        //We will come back later for edge case
        node = node.next;
    }
    // if (node.value) {
    //     return node.value;
    // }
    // console.log('NOT FOUND');
}
//O(n)
let findLast = linkList => {
    let node = linkList.head;
    while (node.next !== null) {
        node = node.next;
    }
    return node;
}
//O(n)

linkList.insert(0, 'Eddie');
linkList.insert(1, 'Quang');
linkList.insert(2, 'Jesse');
linkList.insert(3, 'Sunny');
linkList.insert(4, 'Andy');
linkList.insert(5, 'Nathan');
linkList.insert(6, 'Adam');

//console.log(linkList);
//console.log(display(linkList));
// print(linkList);
// console.log(size(linkList));
// console.log(isEmpty(linkList));
// console.log(findPrevious(linkList, 'abc'));
console.log(findLast(linkList));

// console.log('retrieve', linkList.retrieve(1));
// console.log('remove', linkList.remove(0));
// console.log('retireve', linkList.retrieve(0));



