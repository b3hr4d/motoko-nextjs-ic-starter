import { ActorProvider, AgentProvider } from "@ic-reactor/react"
import { canisterId, todo, idlFactory } from "declarations/todo"
import { AppProps } from "next/app"
import React from "react"
import "styles/global.css"

export type TodoApp = typeof todo

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AgentProvider host="http://127.0.0.1:4943">
      <ActorProvider
        canisterId={canisterId}
        idlFactory={idlFactory}
        withDevtools
      >
        <Component {...pageProps} />
      </ActorProvider>
    </AgentProvider>
  )
}

export default App
