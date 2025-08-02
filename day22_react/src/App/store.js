import { configureStore } from "@reduxjs/toolkit";

import slicetodo from '../Features/todoslice'
export const store = configureStore({
    reducer:{
        todoRef: slicetodo
    },
})