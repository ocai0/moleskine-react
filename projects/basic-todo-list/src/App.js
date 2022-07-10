import Todo from "./components/Todo";

const todos = [
  {
    id: 152,
    data: 'Learn React Today!',
    completed: false
  },
  {
    id: 153,
    data: 'Learn Vue After',
    completed: true
  }
]

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <section className="todo-container">
        {todos.map(todo => <Todo key={todo.id} data={todo} />)}
      </section>
    </div>
  );
}

export default App;
