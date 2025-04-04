import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/authSlice";
import profileReducer from "@/redux/slices/profileSlice";
import reuseableReducer from "@/redux/slices/reuseableSlice";
import resumeReducer from "@/redux/slices/resumeSlice";
import ImproveTextReducer from "@/redux/slices/improveTextSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        reuseable: reuseableReducer,
        resume: resumeReducer,
        ImproveText: ImproveTextReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
