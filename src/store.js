import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice'; // Import formSlice ที่คุณสร้างขึ้น

const store = configureStore({
  reducer: {
    form: formSlice, // ตั้งชื่อ reducer ให้ตรงกับ slice ที่เราสร้าง
  },
});

export default store;
