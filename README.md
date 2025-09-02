### 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
GetElementById gives us a single specific element that matches the id. whereas getElementsByClassName gives us an array-like HTMLCollection and the elements can access by index call. getElementsByClassName gives us the array-like collection of elements that matches the classname, but querySelector and querySelectorAll allows css-selector. the difference between querySelector and querySelectorAll is that querySelector gives only the first element.
### 2.How do you create and insert a new element into the DOM?
To insert a new element into dom, first i will create a new element using document.createElement('div/or which element i want to create') and place it inside a variable, the i will use .appendChild(variableName) to the desired parent.
### 3.What is Event Bubbling and how does it work?
Event bubbling is refers to the propagations of events in the dom tree. when a event occurs, it is targeted through capturing phasse, meaning the event moves from the root to the targeted element down, then in the bubbling phase it backs to the root like the bubbles in water.
### 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a way for technique where instead of using multiple event listener to evey child we use a single event listener to the parent and then use event's target to specify the child 
### 5. What is the difference between preventDefault() and stopPropagation() methods?
PreventDefault() is used to stop the default browser action like form submit button, and stopPropagation() stops the event bubble. 
