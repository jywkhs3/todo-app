import { useState } from "react";

const TodoInsert = ({onInsert}) => {
  const [value,setValue] = useState(null);
  const handleSubmit = (e)=>{
    e.preventDefault();
    onInsert(value);
  }
  const handleInput = (e) => {
    setValue(e.target.value);
  }
  return (
    <form className='todo-insert' onSubmit={handleSubmit}>
      <input type='text' 
      placeholder='할일을 입력하세요'
      onChange={handleInput}
      ></input>
      <button type='submit'>+</button>
    </form>
  );
};

export default TodoInsert;