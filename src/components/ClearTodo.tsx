import { useUpdateCall } from "service/todo"

interface ClearTodoProps {}

const ClearTodo: React.FC<ClearTodoProps> = ({}) => {
  const { call, error, loading } = useUpdateCall({
    functionName: "clearComplete"
  })

  return (
    <div>
      <button onClick={() => call()} disabled={loading}>
        Clear Complete
      </button>
      {error ? <span>Error: {JSON.stringify(error)}</span> : null}
    </div>
  )
}

export default ClearTodo
