import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_KEY, API_URL } from '../api';

axios.defaults.headers.common = {
  'x-api-key': API_KEY,
};

export interface IKittyboardProps {
  page: number;
}

export interface IKittyImageProps {
  id: string;
}

export const getKittyBreeds = createAsyncThunk(
  'kittyBoard/getKittyBreeds',
  async (args: IKittyboardProps) => {
    const { page } = args;

    try {
      const response = await axios.get(
        `${API_URL}/breeds?limit=10&page=${page}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw Error('Something went wrong!');
    }
  }
);

export const getRandomKitty = createAsyncThunk(
  'kittyBoard/getRandomKitty',
  async (args: IKittyImageProps) => {
    const { id } = args;

    try {
      const response = await axios.get(
        `${API_URL}/images/search?breed_ids=${id}`
      );

      return response.data[0];
    } catch (error) {
      console.error(error);
      throw Error('Something went wrong!');
    }
  }
);
