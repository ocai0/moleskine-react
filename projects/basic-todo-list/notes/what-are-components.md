# What are Components?

Ah, components, the most important thing in React. In reality, in all the libraries/frameworks that are component-based. Vue and Angular are component-based too, well, as far as i remember.

The components act like the building blocks of a house. They are the pieces of your UI that can be reusable in many places of your application. When building a website, a Progressive Web App, or anything else, the designer will focus on bringing a consistent style and identity to the UI, preferably guided by a UX professional. The consistency of UI can be translated as a _defined color palette_ and the use of _parts that are alike_. Buttons, sections, interfaces, all of them follow a specific style, a consistent palette, and are ruled by the same guidelines. Observe that with this, you can actually group many of the objects that are used in different screens and compose them in such a way that you can actually define it in one place and let the properties fill the info needed to render and give the user the meaning that it has to pass.

But... React isn't the only one to have this approach. In fact, there is other famous ones that use the component-based idea. One of them is the [_Vue Framework_](https://vuejs.org/), that was created by Evan You, the same guy who created the Vite tool (remember?), and the other big-one is the [_Angular Framework_](https://angular.io/) created and maintained by the Angular Team on Google. Choosing among them can seem overwhelming at first, but i've come to a approach to choose between them: React is a Library, and is very condensed and small, have said that, by itself you will have to create many things in order to use in a big project that have many needs in order to function, in real life, you will be filling these gaps incuding more third-party libraries to do what you wanna do. The Vue Framework has more built on it, like the router module for example. You can still needs more modules and will be adding more libraries as your project grows, but it's less compared to the React. The Angular is like the opposite. A complete, structured, and has defined rules that guide the application from it's start. It's the most complete among the examples that i've wroted here, and the steeper learning curve among them.

There's no bad or good, it's the complexity of the tools and, in my eyes, how much you wanna depend on third-party libraries that will matter when making the decision of what you wanna put in your stack.

A component in React is basically a function or a class
```js
    function Foo() {
        return <div />;
    }
    class Bar {
        render() {
            return <span> I Exists </span>;
        }
    }
```
The official docs say that the class declarations have more possibilities than the function counterpart, mostly because you can code upon a hook in the lifecycle of the component like the `componentWillMount` for example, altough i think **i** need to dig more deep on this subject.

Another thing that i found interesting to note is the fact that the return of a function (or the return in the render method) needs to return only one 'thing'. That is, it cannot have two components like this:
```js
    import Foo from 'path/to/Foo'
    import Bar from 'path/to/Bar'
    function FooBar() {
        return (
            <Foo />
            <Bar />
        );
    }
```
In order to do this, we must encapsulate the arrangement of components inside a common parent or use a **fragment** that is just this: `<> {components goes here} </>`.

Another thing i've noticed it's the fact that the `return` encapsulation uses parenthesis `( and )` to delimit their scope. It was strange to me at first, but i've reached to the conclusion that this ocours because of the interpolation signal used in React. The signal used is the curly brackets (or braces) we developers knows it so well. By the way, i think is worth mentioning that the interpolation injects a inline javascript expression, but not a block statement like `ifs` or `switch cases`. 

[What is really happening underneath?]
Everything in React is a component, and the ones you created (that should be named uppercased), you have total control about what properties it will have, how it's going to react to the info passed and the style it will be presented onto the screen. You can see all the properties passed to your component with the first parameter of the component function/render method and it's usually called `props`. It's good to remember that `props` has a special key that is going to be important for you to know: `children`. It represent the content nested into the component. Take this as a example:
```js
    function Bar({ children, title }) {
        return (
            <>
                <h1>{ title.toUpperCase() }</h1>
                { children }
            </>
        )
    }

    // In Other File
    import Bar from 'path/to/Bar'

    function App() {
        return (
            <div>
                <Bar title="It must have">
                    Something here
                </Bar>
            </div>
        )
    }
```
`props.children` was chosen because that is the same way you can refer to the children elements of a parent element in vanilla JavaScript.
```js
    document.querySelector('header').children //See?
```
And this idea was brought again to name the property used to define the class name used in CSS. Wait, what?

Yeah, if you read it through, you knows that the component can also be declared as a `class`, and everuthing in React is a class. Remember? E V E R Y T H I N G. Which means that the HTML code used here and there are also components created by React. OH. MY. GOSH! I don't know about you, but i got mind blowned with this. The so called HTML tags that we've been using inside our own components we're also, components. That is, components that the React library has inside of itself that helps us to use mostly the same syntax when we're creating our own components. I said mostly because there is some properties that couldn't be broughted to the react syntax because it would cause confusion with the JavaScript itself. One of them is the `class` keyword, that in JS means the reation of a class (it's also a syntax-sugar that only exists in modern JS), and in HTML means the class name used to style in CSS or a way to select multiple elements in DOM using the JS. To segregate one from another, the default, HTML-like components will refer to the HTML class property as a `className` property. 
```js
//in JS
const foo = () => <div className="foo" />
```
it's the same as:
```html
<!-- In HTML -->
<div class="foo"></div>
```