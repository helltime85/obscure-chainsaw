import image from './logo192.png';

export const EXAMPLES = {
    components: {
        title: 'Components',
        decription: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.",
        code: `
        function Welcome() {
            return <h1>Hello, world!</h1>;
        }
        `
    },
    jsx: {
        title: 'JSX',
        decription: "JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like.",
        code: `<div>
    <h1>Hello, world! {userName}</h1>
</div>`
    },
    props: {
        title: 'Props',
        decription: "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation.",
        code: `
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }`
    },
    state: {
        title: 'State',
        decription: "State is a built-in object that is used to contain data or information about the component.",
        code: `
        function Counter() {
            const [count, setCount] = useState(0);
        
            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
            );
        }`
    }
}

export const CORE_CONCEPTS = [
    {
        title: "Component",
        description: "The core UI building block of a React app. Components describe a part of the user interface.",
        image: 'logo192.png'
    },
    {
        title: "JSX",
        descriptions: "JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like.",
        image: 'logo192.png'
    },
    {
        title: "Props",
        description: "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation.",
        image: 'logo192.png'
    },
    {
        title: "State",
        description: "State is a built-in object that is used to contain data or information about the component.",
        image: 'logo192.png'
    },

]    