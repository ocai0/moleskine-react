# What are Components?

Ah, components, the most important thing in React. In reality, in all the libraries/frameworks that are component-based. Vue and Angular are component-based too, well, as far as i remember.

The components act like the building blocks of a house. They are the pieces of your UI that can be reusable in many places of your application. When building a website, a Progressive Web App, or anything else, the designer will focus on bringing a consistent style and identity to the UI, preferably guided by a UX professional. The consistency of UI can be translated as a _defined color palette_ and the use of _parts that are alike_. Buttons, sections, interfaces, all of them follow a specific style, a consistent palette, and are ruled by the same guidelines. Observe that with this, you can actually group many of the objects that are used in different screens and compose them in such a way that you can actually define it in one place and let the properties fill the info needed to render and give the user the meaning that it has to pass.

But... React isn't the only one to have this approach. In fact, there is other famous ones that use the component-based idea. One of them is the [_Vue Framework_](https://vuejs.org/), that was created by Evan You, the same guy who created the Vite tool (remember?), and the other big-one is the [_Angular Framework_](https://angular.io/) created and maintained by the Angular Team on Google. Choosing among them can seem overwhelming at first, but i've come to a approach to choose between them: React is a Library, and is very condensed and small, have said that, by itself you will have to create many things in order to use in a big project that have many needs in order to function, in real life, you will be filling these gaps incuding more third-party libraries to do what you wanna do. The Vue Framework has more built on it, like the router module for example. You can still needs more modules and will be adding more libraries as your project grows, but it's less compared to the React. The Angular is like the opposite. A complete, structured, and has defined rules that guide the application from it's start. It's the most complete among the examples that i've wroted here, and the steeper learning curve among them.

There's no bad or good, it's the complexity of the tools and, in my eyes, how much you wanna depend on third-party libraries that will matter when making the decision of what you wanna put in your stack.

TODO:
[The anatomy of a component, [where it goes]]
[What is really happening underneath?]
[Why it's () and not {} on return, why it needs to have one encapsulating element?]
[class...Name? ]
[Some conventions by the Community [uppercase or not]]