export function CreateTodo() {
    const handleClick = () => {
      alert("You clicked");
    };
  
    return (
      <div>
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="Title" /><br />
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="Description" /><br /><br />
        <button style={{ padding: 10, margin: 10 }} onClick={handleClick}>Add a todo</button>
      </div>
    );
  }
  