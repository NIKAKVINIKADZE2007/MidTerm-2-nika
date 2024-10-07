import { useState } from 'react';

function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (text) => {
    setTodoText(text.target.value);
    console.log(todoText);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setTodos((prev) => [...prev, todoText]);
  };
  return (
    <>
      <form>
        <label htmlFor='todo'>enter Todo text</label>
        <input
          className='border-black border-[2px]'
          id='todo'
          type='text'
          onChange={(event) => handleChange(event)}
        />
        <button
          className='block  bg-red-500 w-[100px] h-[20px]'
          type='submit'
          onClick={(event) => {
            handleClick(event);
          }}
        >
          Add todo
        </button>
      </form>

      <div>
        {todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </div>
    </>
  );
}

export default App;
