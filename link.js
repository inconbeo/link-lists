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
const linkList = new LinkList();

linkList.insert(0, 'Eddie');
linkList.insert(1, 'Quang');
linkList.insert(2, 'Jesse');
linkList.insert(3, 'Sunny');
linkList.insert(4, 'Andy');
linkList.insert(5, 'Nathan');
linkList.insert(6, 'Adam');
// linkList.insert(7, 'Tauhida');

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
};
//O(n)
let findLast = linkList => {
  let node = linkList.head;
  while (node.next !== null) {
    node = node.next;
  }
  return node;
};
//O(n)

//console.log(linkList);
//console.log(display(linkList));
// print(linkList);
// console.log(size(linkList));
// console.log(isEmpty(linkList));
// console.log(findPrevious(linkList, 'abc'));
// console.log(findLast(linkList));

// console.log('retrieve', linkList.retrieve(1));
// console.log('remove', linkList.remove(0));
// console.log('retireve', linkList.retrieve(0));

//EXERCISE 3
// Write an algorithm to find the middle element of a linked list without using the .length property. 
// The lenght property is not a common property of linked list. 
// Although the curriculum implementation of Linked list has the length property so you can see how long your list is, 
// for this exercise, don't use the length property.

function findMiddle(list){
  let node = list.head;
  let node2 = list.head;
  while (node.next !== null && node2.next.next !== null) {
    node = node.next;
    node2 = node.next.next;
  }
  return node.value;
}
console.log(findMiddle(linkList));

let findThird = linkList => {
    let node = linkList.head;
    while (node.next.next.next !== null) {
        node = node.next;
    }
    return node.value;
}

console.log(findThird(linkList));



