
const TodoTemplate = ({children}) => {
  // console.log(children);
  return (
    <div className='todo-template'>
      <h1>일정관리</h1>
      <div>{children}</div>      
    </div>
  );
};

export default TodoTemplate;