## Some ways to conditionally render something in React

One method
```jsx
fn() {
    if(isLoggedIn) return <foo />
    return <bar />
}
```
Another method
```jsx
fn() {
    button = <foo />
    if(!isLoggedIn) button = <bar />
    return button
}
```

One more method
```jsx
fn() {
    return (
        {isLoggedIn && <foo />}
        {!isLoggedIn && <bar />}
    )
}
```

Now, look at this method!
```jsx
fn() {
    return (
        <>
            {isLoggedIn 
                ? <foo />
                : <bar />
            }
        </>
    )
}
```

I'm tired to write 'method'...
```jsx
fn(props) {
    if(props.show === false) return null

    return (
        <>
            <h1>Test</h1>
        </>
    )
}
```