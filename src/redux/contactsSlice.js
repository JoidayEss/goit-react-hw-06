import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts(state, action) {
      console.log("Додаємо контакт до state:", action.payload);
      state.items.push(action.payload);
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
