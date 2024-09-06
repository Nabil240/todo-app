import { Todo } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
      todoList: Todo[]
}

const initialState: TodoState = {
      todoList: []
}


export const todoSlice = createSlice({
      // name
      name: "todo",
      // initialState
      initialState,

      reducers: {
            addtodo: (state, action: PayloadAction<Todo>) => {
                  state.todoList.push(action.payload)
            },
            deleteTodo: (state, action) => {
                  state.todoList = state.todoList.filter((item) => item._id !== action.payload)
            },
            removeTodo: (state) => {
                  state.todoList = []
            }
      }
})

export const { addtodo, deleteTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;