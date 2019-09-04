function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    let location = node.next
    return collection[location]
}

function nodeAt(index, linkedList, collection) {
    let first = collection[linkedList]

    if (index === 0) {
        return first
    } else {
        let counter = 0

        let currentNode = first 

        while (counter < index) {
            currentNode = next(currentNode, collection)

            counter += 1
        }
        return currentNode
    }
}

function addressAt(index, linkedList, collection) {
    let first = collection[linkedList]

    if (index === 0) {
        return linkedList
    } else {
        let counter = 0 

        let currentNode = first 
        let address
        while (counter < index) {
            address = currentNode.next
            currentNode = next(currentNode, collection)

            counter += 1
        }
        return address
    }
}

function indexAt(node, collection, linkedList) {
    let head = collection[linkedList]

    if (node === head) {
        return 0
    } else {
        let counter = 0 
        let currentNode = head 

        while (node != currentNode) {
            currentNode = next(currentNode, collection)
            counter += 1
        }

        return counter 
    }
}

function insertNodeAt(index, address, linkedList, collection) {
    let head = collection[linkedList]
    let counter = 0 

    let currentNode = collection[linkedList]
    while (counter < (index-1)) {
        currentNode = next(currentNode, collection)
        counter += 1
    }

    collection[address].next = currentNode.next
    currentNode.next = address
}

function deleteNodeAt(index, linkedList, collection) {
    let head = collection[linkedList]
    let counter = 0 
    let previousNode 
    let currentNode = collection[linkedList]
    while (counter < (index)) {
        previousNode = currentNode
        currentNode = next(currentNode, collection)
        counter += 1
    }

    previousNode.next = currentNode.next
}