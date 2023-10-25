import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppDispatch, RootState } from './index'
import { Epoch } from '../types/epoch'
import { getEpoches } from '../services'

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

export const getEpochesInfo = () => async (dispatch: AppDispatch) => {
  try {
    const epoches = await getEpoches()
    await dispatch(setEpoches({ epoches }))
  } catch (error) {}
}

export const { setEpoches } = epochesSlice.actions

export const epochesSelector = (state: RootState) => state.epoches

export default epochesSlice.reducer
