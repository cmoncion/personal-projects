import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        
        addTask: (state, action) => {
            state.push(action.payload)
        },
        
        editTask: (state, action) => {
            const {id, title} = action.payload

            const taskFound = state.find(task => task.id === id)
            if(taskFound){
                taskFound.title = title
            }
        },

        completedTask: (state, action) =>{
            const {id, completed} = action.payload;
            const taskFound = state.find(task => task.id === id);
            if (taskFound) {
                taskFound.completed = completed
            }
        },

        removeTask: (state, action) => {
            const taskFound = state.find(task=> task.id === action.payload)
            if(taskFound){
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    } 
})

export const { addTask, editTask,completedTask, removeTask } = taskSlice.actions

export default taskSlice.reducer