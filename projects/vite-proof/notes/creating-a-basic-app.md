# Creating a Basic App

``LOG DATE 07-07-2022``

Well, after dealing with the fact that the node isn't supported on the windows 7, but made it work on my laptop i can safely use all the new *bleeding edge* cool things that everybody uses and i don't. I think that's enough for me to be always in the 90's.

So yeah, i'm officially taking React for serious this time, and as a start i've chosen [Vite](https://vitejs.dev/, "check out this baby") to be my way to create new React apps. Thanks to it's nature of using the new functionalities of the browsers that support the `modules`, tools like `webpack` can be discarted in favor of more quick and light projects.

But that doesn't means that i will be overlooking other tools, in fact, some of the projects that ended up here will have two create paths: `vite` or [create-react-app](https://create-react-app.dev/, "The Monster"). And it's totally understandable why: Many, **MANY** of the projects out there used this tool and various companies will have this as a dependency for your projects. That's exactly why i will deal with these two.

Well, that being said i will write here the code that i've used to create the project, here we goes:

```cmd
    npm create vite@latest projects/vite-proof
    cd projects/vite-proof && npm i && nom dev
    npm dev
```
There it is a classical dev error, do you recognize it?

After all of that, i had to understand:
 - [ ] What the hell are `modules`