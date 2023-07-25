const container1 = document.getElementById("tree-container1");
const container2 = document.getElementById("tree-container2");

const black = "#000000";
const blue = "#2a9d8f";
const yellow = "#b8af09";

let s1;
let s2;

function sigmaObject1() {
    container1.innerHTML = "";
    s1 = new sigma({
        renderer: {
            container: container1,
            type: "canvas"
        },
        settings: {
            minNodeSize: 10,
            maxNodeSize: 10,
            minEdgeSize: 2,
            maxEdgeSize: 2,
            edgeColor: "#000000",
            defaultNodeColor: "#2a9d8f",
            labelThreshold: 0,
            // rendererEdgeLabels: true
        }
    });

    s1.cameras[0].goTo({ x: 0, y: 0, angle: 0, ratio: 1.2 });
    s1.refresh();
}

function sigmaObject2() {
    container2.innerHTML = "";
    s2 = new sigma({
        renderer: {
            container: container2,
            type: "canvas"
        },
        settings: {
            minNodeSize: 10,
            maxNodeSize: 10,
            minEdgeSize: 2,
            maxEdgeSize: 2,
            edgeColor: "#000000",
            defaultNodeColor: "#2a9d8f",
            labelThreshold: 0,
            // rendererEdgeLabels: true
        }
    });

    s2.cameras[0].goTo({ x: 0, y: 0, angle: 0, ratio: 1.2 });
    s2.refresh();
}

sigmaObject1();
sigmaObject2();

function addNode(data, lbl, pos_x, pos_y, obj) {
    console.log("addNode", data);
    obj.graph.addNode({
        id: data,
        label: lbl,
        x: pos_x,
        y: pos_y,
        size: 10
    });

    obj.refresh();
}

function addEdge(from, to, obj) {
    console.log("edge", from, to);
    obj.graph.addEdge({
        id: `${from}-${to}`,
        source: from,
        target: to
    });

    obj.refresh();
}