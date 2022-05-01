const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
   this.root = null;
  }

  root() {
    
  }

  add(data) {
    this.root = addWithin(this.root, data);
    
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return searchWithin(this.root, data);
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true
      }
      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data)
    }
  }

  find(data) {
    return findWithin(this.root, data);
    function findWithin(node, data) {
      if (!node) {
        return null;
      } else {
        return node.data
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};