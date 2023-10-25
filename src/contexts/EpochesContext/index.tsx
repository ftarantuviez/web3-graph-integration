'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import useEpochesStore from './useEpochesStore'
import { FilterValues } from '../../types/filters'

type EpochesContextValues = {
  filters: FilterValues
  setFilters: Dispatch<SetStateAction<FilterValues>>
}

const EpochesContext = createContext<EpochesContextValues>({
  filters: {
    first: 3,
    orderBy: 'startBlock',
    orderDirection: 'asc',
  },
  setFilters: () => {},
})

const EpochesConsumer = EpochesContext.Consumer

const useEpoches = () => useContext<EpochesContextValues>(EpochesContext)

type EpochesProviderProps = {
  children: React.ReactNode
}

const EpochesProvider = ({ children }: EpochesProviderProps) => {
  const [filters, setFilters] = useState<FilterValues>({
    first: 3,
    orderBy: 'startBlock',
    orderDirection: 'asc',
  })

  useEpochesStore(filters)

  const values = {
    filters,
    setFilters,
  }

  return <EpochesContext.Provider value={values}>{children}</EpochesContext.Provider>
}

export default EpochesContext
export { EpochesConsumer, EpochesProvider, useEpoches }
