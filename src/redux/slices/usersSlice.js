import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  usersLoading: false,
  postUserLoading: false,
  nextUrl: '',
  totalPages: 0,
  currentPage: 0,
  isUserRegisteredSucces: 0,
  isNameFieldValid: false,
  isEmailFieldValid: false,
  isPhoneFieldValid: false,
  isFileFieldValid: false,
  userProfile: {
    name: '',
    email: '',
    phone: '',
    profilePic: {},
    positionId: 0,
  },
};

export const fetchUsers = createAsyncThunk('usersSlice/fetchUsers', () => {
  return axios
    .get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
    .then((response) => response.data);
});

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.usersLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersLoading = false;
      state.users = action.payload.users;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.nextUrl = action.payload.links.next_url;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.usersLoading = false;
      state.users = [];
      console.log(action.payload.message);
    });
  },
  reducers: {
    setUsersLoading: (state, action) => {
      state.usersLoading = action.payload;
    },
    addUserName: (state, action) => {
      state.userProfile.name = action.payload;
    },
    addUserEmail: (state, action) => {
      state.userProfile.email = action.payload;
    },
    addUserPhone: (state, action) => {
      state.userProfile.phone = action.payload;
    },
    addProfilePic: (state, action) => {
      state.userProfile.profilePic = action.payload;
    },
    addUserPositionId: (state, action) => {
      state.userProfile.positionId = action.payload;
    },
    validateNameField: (state, action) => {
      state.isNameFieldValid = action.payload;
    },
    validateEmailField: (state, action) => {
      state.isEmailFieldValid = action.payload;
    },
    validatePhoneField: (state, action) => {
      state.isPhoneFieldValid = action.payload;
    },
    validateFileField: (state, action) => {
      state.isFileFieldValid = action.payload;
    },
    newUsersData: (state, action) => {
      state.nextUrl = action.payload.url;
      state.currentPage = action.payload.page;
      state.users = action.payload.users;
    },
    setUserRegisteredSuccess: (state, action) => {
      state.isUserRegisteredSucces = action.payload;
    },
    setUserPostLoading: (state, action) => {
      state.postUserLoading = action.payload;
    },
  },
});

export const {
  setUsersLoading,
  validateNameField,
  validateEmailField,
  validatePhoneField,
  validateFileField,
  addUserName,
  addProfilePic,
  addUserEmail,
  addUserPhone,
  addUserPositionId,
  setUserRegisteredSuccess,
  newUsersData,
  setUserPostLoading,
} = usersSlice.actions;
export default usersSlice;
