import { useEffect } from 'react'
import { getEpochesInfo, setEpoches } from '../../store/epoches'

import { useAppDispatch } from '../../store'

const useEpochesStore = () => {
  const dispatch = useAppDispatch()

  const getEpoches = async () => {
    try {
      await Promise.all([dispatch(getEpochesInfo())])
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getEpoches()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useEpochesStore
