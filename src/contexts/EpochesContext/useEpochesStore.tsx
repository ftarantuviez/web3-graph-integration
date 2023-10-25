import { useEffect, useMemo } from 'react'
import { getEpochesInfo } from '../../store/epoches'

import { useAppDispatch } from '../../store'

import { FilterValues } from '../../types/filters'

const useEpochesStore = (filters: FilterValues) => {
  const dispatch = useAppDispatch()
  const filtersUsed = useMemo(() => filters, [filters])

  const getEpoches = async () => {
    try {
      await Promise.all([dispatch(getEpochesInfo(filtersUsed))])
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getEpoches()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersUsed])
}

export default useEpochesStore
