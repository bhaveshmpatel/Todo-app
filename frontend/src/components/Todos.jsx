/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
import { useState } from "react";

export function Todos({ todos }) {
  const [complete, setComplete] = useState("");

  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                // axios
                fetch("http://localhost:3000/todo", {
                  method: "POST",
                  body: JSON.stringify({
                    title: title,
                    description: description,
                  }),
                  headers: {
                    "Content-type": "application/json", // contentType
                  },
                });
              }}
            >
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
