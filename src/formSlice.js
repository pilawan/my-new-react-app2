// formSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prefix: '',
  firstName: '',
  lastName: '',
  birthdate: '', // Date stored as string
  nationality: '',
  idNumber: '',
  gender: '',
  phoneNumber: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPrefix: (state, action) => {
      state.prefix = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setBirthdate: (state, action) => {
      // Store received string or timestamp directly
      state.birthdate = action.payload;
    },
    setNationality: (state, action) => {
      state.nationality = action.payload;
    },
    setIdNumber: (state, action) => {
      state.idNumber = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const {
  setPrefix,
  setFirstName,
  setLastName,
  setBirthdate,
  setNationality,
  setIdNumber,
  setGender,
  setPhoneNumber,
} = formSlice.actions;

export default formSlice.reducer;
