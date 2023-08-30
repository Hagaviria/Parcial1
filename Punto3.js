class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

  
}

function combinarListas(list1, list2) {
    const cambiarlista = new LinkedList();
    let primero = list1.head;
    let segundo= list2.head;

    while (primero && segundo) {
        if (primero.val < segundo.val) {
            const nextNode = new ListNode(primero.val);
            cambiarlista.append(nextNode);
            primero = primero.next;
        } else {
            const nextNode = new ListNode(current2.val);
            cambiarlista.append(nextNode);
            segundo= segundo.next;
        }
    }

    while (primero) {
        const nextNode = new ListNode(primero.val);
        cambiarlista.append(nextNode);
        primero = primero.next;
    }

    while (segundo) {
        const nextNode = new ListNode(segundo.val);
        cambiarlista.append(nextNode);
        segundo= segundo.next;
    }

    return cambiarlista;
}

const list1 = new LinkedList();
list1.append(new ListNode(1));
list1.append(new ListNode(3));
list1.append(new ListNode(5));

const list2 = new LinkedList();
list2.append(new ListNode(2));
list2.append(new ListNode(4));
list2.append(new ListNode(6));

const cambiarlista = combinarListas(list1, list2);


let current = cambiarlista.head;
while (current) {
    console.log(current.val);
    current = current.next;
}
  



