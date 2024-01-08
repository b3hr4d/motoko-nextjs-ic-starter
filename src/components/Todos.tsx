import { ToDo } from "declarations/todo/todo.did"
import React from "react"
import { useQueryCall } from "service/todo"
import Todo from "./Todo"
import ClearTodo from "./ClearTodo"

interface TodosProps {}

const Todos: React.FC<TodosProps> = ({}) => {
  const { data, error, loading } = useQueryCall({
    functionName: "getAllTodos",
    autoRefresh: true
  })

  return (
    <div>
      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px"
          }}
        >
          <label>Todos: &nbsp;</label>
          <ClearTodo />
        </div>
        {loading ? <span>Loading...</span> : null}
        {error ? <span>Error: {JSON.stringify(error)}</span> : null}
        {data && data[0] && data[0].length > 0
          ? data[0].map((todo: ToDo) => (
              <Todo {...todo} key={todo.id.toString()} />
            ))
          : null}
      </section>
    </div>
  )
}

export default Todos
