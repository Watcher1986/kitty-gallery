import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getKittyBreeds, getRandomKitty } from '../thunk/cats-thunk';
import { IBreed, IKittyState, IKittyRandomImage } from '../types';

const initialState = {
  catsBreedsList: [],
  isLoading: false,
  randomImage: {
    breed_id: '',
    url: '',
  },
};

const KittyboardSlice = createSlice({
  name: 'kittyBoard',
  initialState,
  reducers: {},
  extraReducers: {
    [getKittyBreeds.pending.type]: (state: IKittyState) => {
      state.isLoading = true;
    },
    [getKittyBreeds.fulfilled.type]: (
      state: IKittyState,
      action: PayloadAction<IBreed[]>
    ) => {
      state.catsBreedsList = [...state.catsBreedsList, ...action.payload];
      state.isLoading = false;
    },
    [getKittyBreeds.rejected.type]: (state: IKittyState) => {
      state.isLoading = false;
    },
    [getRandomKitty.pending.type]: (state: IKittyState) => {
      state.isLoading = true;
    },
    [getRandomKitty.fulfilled.type]: (
      state: IKittyState,
      action: PayloadAction<IKittyRandomImage>
    ) => {
      (state.randomImage = {
        url: action.payload.url,
        breed_id: action.payload?.breeds[0].id,
      }),
        (state.isLoading = false);
    },
    [getRandomKitty.rejected.type]: (state: IKittyState) => {
      state.isLoading = false;
    },
  },
});

export default KittyboardSlice.reducer;
