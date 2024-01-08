import React from "react"
import Todo from "./Todo"
import { useActor } from "@ic-reactor/react"
import { TodoApp } from "pages/_app"

interface TodosProps {}

const Todos: React.FC<TodosProps> = ({}) => {
  const { useQueryCall } = useActor<TodoApp>()

  const { data, error, loading } = useQueryCall({
    functionName: "getAllTodos",
    autoRefresh: true
  })

  return (
    <div>
      <section>
        <label>Todos: &nbsp;</label>
        {loading ? <span>Loading...</span> : null}
        {error ? <span>Error: {JSON.stringify(error)}</span> : null}
        {data && data.length > 0
          ? data.map(([id, todo]) => <Todo {...todo} key={id} id={id} />)
          : null}
      </section>
    </div>
  )
}

export default Todos
