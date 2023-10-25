'use client'
import { createContext, useContext } from 'react'
import useEpochesStore from './useEpochesStore'

const EpochesContext = createContext({})

const EpochesConsumer = EpochesContext.Consumer

const useEpoches = () => useContext(EpochesContext)

type EpochesProviderProps = {
  children: React.ReactNode
}

const EpochesProvider = ({ children }: EpochesProviderProps) => {
  useEpochesStore()

  return <EpochesContext.Provider value={{}}>{children}</EpochesContext.Provider>
}

export default EpochesContext
export { EpochesConsumer, EpochesProvider, useEpoches }
