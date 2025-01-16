
const TodoList = ({todos,onChecked}) => {
  console.log(onChecked);
  return (
    <div className="todo-list">
      <ul>
        {
          todos.map((list)=>{
            const {id,text,checked} = list;
            return (
                      <li key={id}>
                      <input 
                        type='checkbox' 
                        checked={checked}
                        onChange={()=>{onChecked(id)}} />
                      <label className={checked ? 'checkedLine' : ''}>{text}</label>
                      <button>ⓧ</button>
                    </li>
                    )
          })
        }
      </ul>
    </div>
  );
};

export default TodoList;