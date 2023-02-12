import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    usersLoading: false,
    tokenLoading: false,
    postUserLoading: false,
    error: '',
    nextUrl: "",
    totalPages: 0,
    currentPage: 0,
    token: '',
    positionsList: {},
    positionsLoading: false,
    isUserRegisteredSucces: 0,
    isNameFieldValid: false,
    isEmailFieldValid: false,
    isPhoneFieldValid: false,
    isFileFieldValid: false,
    userProfile: {
        name: "",
        email: "",
        phone: "",
        profilePic: {},
        positionId: 0

    }
}


export const fetchUsers = createAsyncThunk('usersSlice/fetchUsers', () => {
    return axios
        .get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
        .then((response) => response.data)
})

export const fetchToken = createAsyncThunk('usersSlice/fetchToken', () => {
    return axios
        .get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then((response) => response.data.token);
})

export const fetchPositions = createAsyncThunk('usersSlice/fetchPositions', () => {
    return axios
        .get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then((response) => response.data);
})


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.usersLoading = true;
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.usersLoading = false
            state.users = action.payload.users
            state.error = ''
            state.currentPage = action.payload.page
            state.totalPages = action.payload.total_pages
            state.nextUrl = action.payload.links.next_url
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.usersLoading = false
            state.users = []
            if (action.error.message) {
                state.error = action.error.message
            }
        })

        builder.addCase(fetchToken.pending, (state) => {
            state.tokenLoading = true;
        })

        builder.addCase(fetchToken.fulfilled, (state, action) => {
            state.tokenLoading = false
            state.token = action.payload
            state.error = ''
        })

        builder.addCase(fetchToken.rejected, (state, action) => {
            state.tokenLoading = false
            state.token = ""
            if (action.error.message) {
                state.error = action.error.message
            }
        })




        builder.addCase(fetchPositions.pending, (state) => {
            state.positionsLoading = true;
        })

        builder.addCase(fetchPositions.fulfilled, (state, action) => {
            state.positionsLoading = false
            state.positionsList = action.payload
            state.error = ''
        })

        builder.addCase(fetchPositions.rejected, (state, action) => {
            state.positionsLoading = false
            state.positionsList = {}
            if (action.error.message) {
                state.error = action.error.message
            }
        })


    },
    reducers: {
        setUsersLoading: (state, action) => {
            state.usersLoading = action.payload
        },
        addUserName: (state, action) => {
            state.userProfile.name = action.payload
        },
        addUserEmail: (state, action) => {
            state.userProfile.email = action.payload
        },
        addUserPhone: (state, action) => {
            state.userProfile.phone = action.payload
        },
        addProfilePic: (state, action) => {
            state.userProfile.profilePic = action.payload
        },
        addUserPositionId: (state, action) => {
            state.userProfile.positionId = action.payload
        },
        validateNameField: (state, action) => {
            state.isNameFieldValid = action.payload
        },
        validateEmailField: (state, action) => {
            state.isEmailFieldValid = action.payload
        },
        validatePhoneField: (state, action) => {
            state.isPhoneFieldValid = action.payload
        },
        validateFileField: (state, action) => {
            state.isFileFieldValid = action.payload
        },
        newUsersData: (state, action) => {
            state.nextUrl = action.payload.url
            state.currentPage = action.payload.page
            state.users = action.payload.users
        },
        setUserRegisteredSuccess: (state, action) => {
            state.isUserRegisteredSucces = action.payload
        },
        setUserPostLoading: (state, action) =>{
            state.postUserLoading = action.payload
        }

    }
})

export const { setUsersLoading, validateNameField, validateEmailField, validatePhoneField, validateFileField, addUserName, addProfilePic, addUserEmail, addUserPhone, addUserPositionId, setUserRegisteredSuccess, newUsersData, setUserPostLoading } = usersSlice.actions;
export default usersSlice;