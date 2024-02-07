import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userBioData } from './Services/userBioData';
import { userPostData } from './Services/userPostData';
import { postComment } from './Services/postComment';
import { userlogout } from './Services/logout';
import { friendsResquest } from './Services/friendsResquest';
import { exceptFriend } from './Services/exceptFriend';
import messanger from '../Store/lib/features/messanger';
import Audio from "../Store/lib/features/audio";
import { messangers } from '../Store/Services/messangers';
import  Loader  from './lib/features/loaderSlice';
import { Story } from './Services/Story';

// Combine the reducers
const rootReducer = combineReducers({
  Loader:Loader,
  messanger: messanger,
  Audio:Audio,
  messangers:messangers.reducer,
  userBioData: userBioData.reducer,
  userPostData: userPostData.reducer,
  postComment: postComment.reducer,
  userlogout: userlogout.reducer,
  friendsResquest: friendsResquest.reducer,
  exceptFriend: exceptFriend.reducer,
  Story:Story.reducer
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userBioData.middleware,
      userPostData.middleware,
      postComment.middleware,
      userlogout.middleware,
      friendsResquest.middleware,
      exceptFriend.middleware,
      messangers.middleware,
      Story.middleware
    ),
});


setupListeners(store.dispatch);
