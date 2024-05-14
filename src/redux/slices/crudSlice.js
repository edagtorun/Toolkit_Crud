import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
  tasks: [
    {
      title: "Navbar Animasyonu",
      author: "Furkan",
      assigned_to: "Eda",
      end_date: "2024-05-15",
      id: "4ab5805b-022a-4f9c-b693-4d47051c8993",
    },
    {
      title: "Header Duzenlemesi",
      author: "Eda",
      assigned_to: "Sena",
      end_date: "2024-05-17",
      id: "d91df574-1e19-4420-9394-d8fb35116e72",
    },
    {
      title: "Sayfa Dizayni",
      author: "Ali",
      assigned_to: "Defne",
      end_date: "2024-05-22",
      id: "6ffc28e7-97c1-4659-87d1-0eac63c3ccfe",
    },
  ],

  // toolkit ile birlikte slice'daki state'de tutulan herhangi bir veriyi digrudan guncelleyebiliyoruz.     Ornegin dizideki bir elemani guncellememiz gerektiginde map yerine "splice" ekleme gerektiginde concat yerine "push" gibi methodlari kullanmamizi saglar.
};
const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //a) tasl'a id ekle
      action.payload.id = v4();
      //b) veriye dizi ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      //   // 1. Yontem

      //   const filtered = state.tasks.filter(
      //     (tasks) => tasks.id !== action.payload
      //   );

      //   state.tasks = filtered;

      //2. Yontem
      //a)Silinecek elamanun sirasini bul.
      const index = state.tasks.findIndex((i) => i.id === action.payload);
      //b) elemani sil
      state.tasks.splice(index, 1);
    },

    editTask: (state, action) => {
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);

      //elemani guncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

//store'a tanitmak icin reducer'i export et

export default crudSlice.reducer;

//porjede kullanabilmek icin actionlari export et

export const { addTask, deleteTask, editTask } = crudSlice.actions;
