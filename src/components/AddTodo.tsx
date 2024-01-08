import { useActor } from "@ic-reactor/react"
import { TodoApp } from "pages/_app"
import React, { useState } from "react"

interface AddTodoProps {}

const AddTodo: React.FC<AddTodoProps> = ({}) => {
  const { useUpdateCall } = useActor<TodoApp>()

  const { call, error, loading } = useUpdateCall({
    functionName: "addTodo"
  })

  const [name, setName] = useState("")

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value
    setName(newName)
  }

  return (
    <div>
      <section>
        <h2>AddTodo</h2>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input
          id="name"
          alt="Name"
          type="text"
          value={name}
          onChange={onChangeName}
        />
        <button onClick={() => call([name])}>Send</button>
      </section>
      <section>
        <label>Response: &nbsp;</label>
        {loading ? <span>Loading...</span> : null}
        {error ? <span>Error: {JSON.stringify(error)}</span> : null}
      </section>
    </div>
  )
}

export default AddTodo
