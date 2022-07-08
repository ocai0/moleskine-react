# Creating a Basic App

``LOG DATE 07-07-2022``

Well, after dealing with the fact that the node isn't supported on the windows 7, but made it work on my laptop i can safely use all of the new *bleeding edge* cool things that everybody uses. I think it's enough for me to be always in the 90's.

So yeah, i'm officially taking React for serious this time, and as a start i've chosen [Vite](https://vitejs.dev/, "check out this baby") to be my way to create React projects. Thanks to it's nature of using the new features of the browsers that support the `modules` for example, tools like `webpack` can be left behind in favor of more quick and light setups.

But this doesn't means that i will be overlooking other tools, in fact, some of the projects that ended up here will have to choose from two creational paths: `vite` or [create-react-app](https://create-react-app.dev/, "The Monster"). And i think it's totally understandable why: Many, **MANY** of the projects out there used ``create-react-app`` and various companies will have this as a requirements for your projects. That's exactly why i will deal with these two specifically.

Well, that being said i will write here the code that i've used to create the Vite's Proof Project, here we goes:

```cmd
    npm create vite@latest projects/vite-proof
    cd projects/vite-proof && npm i && nom dev
    npm dev
```
There it is a classical dev error, do you recognize it?
I've created this project mostly as a test to see if the workround that i've founded online actually solves the node out-of-date problem. Because of this problem, i couldn't use either vite, create-react-app or anything else really. It was, indeed, one of the reasons that i've lefted this crusade to understand and develop in this new world of Web Development. 

And after making all of this, i've caughted myself thinking:
 - [ ] What the hell are `modules`