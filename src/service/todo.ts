import { createReActor } from "@ic-reactor/react"
import { ActorMethodField } from "@ic-reactor/store"
import { todo, canisterId, idlFactory } from "declarations/todo"
import { agentManager } from "./agent"

export type TodoApp = typeof todo

export const {
  useQueryCall,
  useUpdateCall,
  useAuthClient,
  useActorStore,
  useMethodFields
} = createReActor<TodoApp>({
  canisterId,
  idlFactory,
  withDevtools: true,
  agentManager
})

export type WalletDynamicField = ActorMethodField<TodoApp>
