import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    updateBookmarks: (state, action) => {
      const { postId, isBookmarked } = action.payload;
      if (state.user) {
        if (isBookmarked) {
          state.user.bookmarks.push(postId);
        } else {
          state.user.bookmarks = state.user.bookmarks.filter(id => id !== postId);
        }
      }
    },
    updateOngoing: (state, action) => {
      const { postId } = action.payload;
      if (state.user) {
        if (!state.user.ongoing.includes(postId)) {
          state.user.ongoing.push(postId);
        }
      }
    },
    removeFromOngoing: (state, action) => {
      const { postId } = action.payload;
      if (state.user) {
        state.user.ongoing = state.user.ongoing.filter(id => id !== postId);
      }
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  setAuthUser,
  updateBookmarks,
  updateOngoing,
  removeFromOngoing,
  setUserProfile,
  setSelectedUser
} = authSlice.actions;

export default authSlice.reducer;
