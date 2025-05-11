function augmentingPath(graph, start, target) {
    var graphSize = Object.keys(graph).length;
    
    //No need to do anything if we start at the target
    if(start == target){
        return [start];
    }

    //Array for the path we follow
    var path = [];

    //Keep track of nodes that have been visited so far
    var visited = {};
    for (var i = 0; i < graphSize; i++) {
        
        //Get keys to keep track of which nodes have been visited
        //Use temporary to initialize the visited list
        var tmpKey = Object.keys(graph)[i];
        var tmpObject = { [tmpKey] : false };
        Object.assign(visited, tmpObject);
    }   

    return findEnd(graph, start, visited, null, path, target);
}

function findEnd(graph, node, visited, parent, path, target) {
    path.push(node);

    //We visited this node, so mark it that way
    visited[node] = true;

    //If we can't access the node, then target cannot be reached
    if (node == undefined) {return [];}

    //Check if we are at the target node
    if (node === target) {
        return path;
    }

    //Iterate through all edges for a given node
    for (var i = 0; i < Object.keys(graph[node]).length; i++) {

        //See if we have visited the node at the end of a given edge yet;
        //If not, recursively travel down that path
        if (visited[Object.keys(graph[node])[i]] == false)  {
            return findEnd(graph, Object.keys(graph[node])[i], visited, node, path, target);
        }
    }
    
    //If we haven't hit the target, then the current node is not part of the right path
    path.pop();

    //Store previous node
    var prevNode = path.pop();

    //Follow the next possible path down the previous node
    return findEnd(graph, prevNode, visited, path[path.length-1], path, target);
}
