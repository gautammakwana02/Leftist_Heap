class Node {
    constructor(element, left = null, right = null) {
        this.element = element;
        this.left = left;
        this.right = right;
        this.sValue = 0;
    }
}

const heap1 = []
const heap2 = []

class LeftHeap {
    constructor() {
        this.head = null;
    }
    
    isEmpty() {
        return this.head == null;
    }
    
    clear() {
        this.head = null;
    }
    
    merge(rhs) {
        if (this === rhs) {
            return;
        }
        this.head = this.mergeNodes(this.head, rhs.head);
        rhs.head = null;
    }
    
    mergeNodes(a, b) {
        if (a === null) {
            return b;
        }

        if (b === null) {
            return a;
        }

        if (a.element > b.element) {
            [a, b] = [b, a];
        }
      
        a.right = this.mergeNodes(a.right, b);
      
        if (a.left == null) {
            a.left = a.right;
            a.right = null;
        } else {
            if (a.left.sValue < a.right.sValue) {
                [a.left, a.right] = [a.right, a.left];
            }
            a.sValue = a.right.sValue + 1;
        }
        return a;
    }

    insert(a) {
        this.head = this.mergeNodes(new Node(a), this.head);
        // sigmaObject();
        // printer(this.head,100,10,0,100);
    }
    
    del() {
        if (this.isEmpty()) {
            return -1;
        }
        const min = this.head.element;
        this.head = this.mergeNodes(this.head.left, this.head.right);

        // sigmaObject();
        // printer(this.head,100,10,0,100);
        return min;
    }

    order() {
        this.orderNodes(this.head);
        console.log();
    }

    orderNodes(r) {
        if (r != null) {
            console.log(r.element);
            this.orderNodes(r.left);
            this.orderNodes(r.right);
        }
    }
}

function printer(root,x_cord,y_cord,depth,f,obj) {
    if(root==null) return;
    console.log(root.element);
    
    addNode(root.element.toString(), root.element.toString()+" ("+(root.sValue+1)+")", x_cord, y_cord, obj);

    if(root.left!=null) {
        printer(root.left, x_cord - (f/2), y_cord + (f/2),depth+1,f/2, obj);
        console.log(".", root.element, root.left.element);
        addEdge(root.element.toString(), root.left.element.toString(), obj);
    }

    if(root.right!=null) {
        printer(root.right, x_cord + (f/2), y_cord + (f/2),depth+1,f/2,obj);
        console.log(".", root.element, root.right.element);
        addEdge(root.element.toString(), root.right.element.toString(), obj);
    }
}

function selectText() {
    const textbox = document.getElementById('insrt');
    if(heap2.indexOf(textbox.value)!=-1)
        return;
    heap1.push(textbox.value);
    leftHeap.insert(parseInt(textbox.value));
    textbox.value = "";
    sigmaObject1();
    printer(leftHeap.head,50,10,0,50,s1);
  }

function mindel() {
    heap1.sort(function(a, b){return a - b});
    console.log("Sorted"+heap1);
    heap1.shift();
    console.log("Rem"+heap1);

    leftHeap.del();
    sigmaObject1();
    printer(leftHeap.head,50,10,0,50,s1);
}

function selectText2() {
    const textbox2 = document.getElementById('insrt2');
    if(heap1.indexOf(textbox2.value)!=-1)
        return;
    heap2.push(textbox2.value);
    leftHeap2.insert(parseInt(textbox2.value));
    textbox2.value = "";
    container2.innerHTML = "";
    sigmaObject2();
    printer(leftHeap2.head,150,10,0,50,s2);
 }

function mindel2() {
    leftHeap2.del();
    heap2.sort(function(a, b){return a - b});
    console.log("Sorted"+heap2);
    heap2.shift();
    console.log("Rem"+heap2);
    sigmaObject2();
    printer(leftHeap2.head,50,10,0,50,s2);
}

function merge() {
    leftHeap.merge(leftHeap2);
    leftHeap2.head = null;
    
    sigmaObject1();
    printer(leftHeap.head,50,10,0,50,s1);
    sigmaObject2();
    printer(leftHeap2.head,50,10,0,50,s2);
}


function reset() {
    leftHeap.head = null;
    leftHeap2.head = null;
    
    sigmaObject1();
    printer(leftHeap.head,50,10,0,50,s1);
    sigmaObject2();
    printer(leftHeap2.head,50,10,0,50,s2);
}



// textbox.setSelectionRange(0, textbox.value.length);

// Example usage:
const leftHeap = new LeftHeap();
const leftHeap2 = new LeftHeap();
// leftHeap.insert(10);
// leftHeap.insert(20);
// leftHeap.insert(5); 
// leftHeap.insert(15);
// leftHeap.insert(12);
console.log("................................................");
// leftHeap.insert(18);
// console.log(leftHeap.del()); // Output: 2
leftHeap.order(); // Output: 3 4