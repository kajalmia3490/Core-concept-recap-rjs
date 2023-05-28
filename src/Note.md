## Conceptual, How react works:
* npm: Node Package Manager (It works of package managing)
* npx: Node Package Execute (It works of npm runner)
* noscript: It checkout, Have js file active or not deactive.

## Jsx, React component, Babel transpiler:
* JSX: Javascript XML(Extensive Markup Language)
* Babel: Free & open source transpiler (Translate Compiler), Converting the new version to the old version for ease of use.

## Components, Props, Unidirectional data flow:
* Components: is working split and isolation. It is independent and reuseable bits of code. Components come in two types: 
1. Function component, 
2. Class component.
* Class: React class components have a built in state object.
* Props: Send data as needed with props and attributes. Actually, Props stands for passing data from one component to another. Components use for similar in look, different in data. Props value not changeable, It only readable.
* Unidirectional: is a one way data binding. (GrandFather - Father - Children) 

## How states work, Asynchronous, State console:
* State: change the data. useState(initialValue) means to Hook. For example state declaraion: const [getValue, setValue] = useState(0), 0 = initialValue
* Asynchronous: Data updating is called Asynchronous. Asynchronous does not work seriallize. When the work comes, He finished his work first. This is called asynchronous.
* useEffect: It is side effect activities of UI. useEffect(anonymousArrowFunction, []). This function takes two parameters. FIrst: anonymousArrowFuncion - () => {}, Second: emptyArray - [] and this formal name: DependencyList
* State console: State update is asynchronously. State means to Data changes and update.

## How react hook works, Send state via props, Props vs State:
* Hook: This is a special function. 
* Hook functins: 
useState() - Data change and UI updated, 
useEffect() - It works manipulate out of code and side effect activity, 
useContext(), useReducer(), useRef(), useMemo(), useTransition(), useId(), useCallback() etc.
* React hook functions implements functionality.
* Props: can't be changed the value. 
1. Props are read only, 
2. Props can't be modified.
* State: 
1. State changes can be asynchronous,
2. State can be modified using this.useState()

## What is react, When to use it, React vs Angular vs Vue:
* React: 
React is a javascript based UI development library. 
React is declarative, efficient and flexible.  
It is fast and component based. 
It was initially developed and maintained by facebook.
* React works:
React breaks web elements down into reuseable components making it easy to manage complex web interfaces.
React's virtual dom is a javascript representation of the actual dom. When updates are made react compares the current dom to the virtual dom and only updates the difference between the two. 

## How react works, render, virtual dom, diff algorithm, fiber:
# React works: 
React is virtual dom. Which is javascript representation of actual dom. The virtual dom is lightweight tree that contains only the necessary information to render a UI. When a user interacts with react application. React updates the virtual dom. React then compares the virtual dom with the actual dom. 
# Render: 
Render is the technic that can redirect a page with the help of the function render(). Most importantly, render a function we can use to define to the html code within the html element. It helps to display certain views in the UI using certian logic defined in the render function and returns the output.
# Virtual dom: 
The virtual dom provides a machanism that abstract manual dom manipulations away from the developer, helping us to write more predictable code. It does so by comparing two render trees to determine exactly what has changed, only updating what is necessary on the actual dom. 
# Diff algorithm:
Diffing is a heuristic algorithm based on two assumptions, two elements of different types will produce different trees.
# Fiber:
React fiber is a backwards compatible, complete rewrite the react core. In other words, it is reimplementaion of older versions of react reconciler. Introduced from react 16. Fiber reconciler is the new reconciliation algorithm in react.

## React class components, Components lifecycle, Re-render:
# Class components: 
It means to class based components.
# Component lifecycle:
Mounting: Documantation ready. It works on 4steps: 
1. constructor()
2. getDerivedStateFromProps()
3. render() - It works of shown the html documentaion.
4. componentDidMount()
# Updating: 
This is don when a props and state changes. Gradually, there 5steps: 
1. getDerivedStateFormProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()
# Unmounting: 
When as needed remove any componen. Then unmounting is complete and it has a method:
1. componentWillMount()

## Module summary, Recap, Properties vs Attributes:
# JSX:
Javascript XML. Jsx is a syntax extension for react js. Easier to read and write. Gets transpiled to javascript with babel. 
# Props: 
We use props in react to pass data from one component to another (Like as: parent component to child compnonent). Then I have a ICT

### Module introduction ES6 modules simple import, export:
#  import, export, create api, fake api create and use.

### How to create eventHanlder with parameters: 
# const added = () => addToCart(id);

### Inro to local storage to store data just one item:
# 