import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppDispatch, RootState } from './index'
import { Epoch, EpochColumns } from '../types/epoch'
import { getEpoches } from '../services'
import { FilterValues, TSortingOrder } from '../types/filters'

export interface EpochesState {
  isLoading: boolean
  epoches: Epoch[]
}

const initialState: EpochesState = {
  isLoading: false,
  epoches: [],
}

export const epochesSlice = createSlice({
  name: 'epoches',
  initialState,
  reducers: {
    setEpoches: (state, action: PayloadAction<Partial<EpochesState>>) => {
      Object.entries(action.payload).map(([key, value]) => {
        // @ts-ignore
        state[key as keyof EpochesState] = value
      })
    },
  },
})

export const getEpochesInfo =
  ({ first, orderBy, orderDirection }: FilterValues) =>
  async (dispatch: AppDispatch) => {
    try {
      const initialData = {
        first,
        orderBy,
        orderDirection,
      }
      const epoches = await getEpoches(initialData)
      await dispatch(setEpoches({ epoches }))
    } catch (error) {}
  }

export const { setEpoches } = epochesSlice.actions

export const epochesSelector = (state: RootState) => state.epoches

export default epochesSlice.reducer
