# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

**The worst case complexity of this implementation would be $\theta(|V| + |E|)$. More specifically, it would be $\theta(3|V| + 2|E|)$. In the worst case scenario, the target node would not be accessible from the starting node, and each subsequent node from the start would just be linked in a line, and then back, similar to provided example with nodes 'foo', 'boo', and 'bar'. This would result in the algorithm iterating over every edge in every node, giving $|V| + |E|$. Then it would iterate back to the starting node, again going through every node and edge except the target node, giving another $|V| + |E|$. These together net $2|V| + 2|E|$, however at the start of the algorithm an object is created for every node in the graph. This ends up adding another $|V|$ to the total complexity in almost any case, which includes the worst case. Adding everything together nets the final runtime complexity of $\theta(3|V| + 2|E|)$, or also just $\theta(|V| + |E|)$**

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I recieved a ton of help from Natalie Sleight, pretty much my whole understanding of the assignment was because of her help. 
