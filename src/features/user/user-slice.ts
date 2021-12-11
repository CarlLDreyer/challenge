import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { doc, getDoc, setDoc } from 'firebase/firestore'

import initialState from 'features/user/initialState'

import { auth, db } from 'services/firebase'

const provider = new GoogleAuthProvider()

export const signInWithGoogle = createAsyncThunk<UserState, Payload>(
  'signInWithGoogle',
  async (uid, { rejectWithValue }) => {
    try {
      if (uid === null) {
        const res = await signInWithPopup(auth, provider)
        const dbUser = await checkUserDb(res.user)

        return dbUser as Payload
      } else {
        const dbUser = await checkUserDb(uid)

        return dbUser as Payload
      }
    } catch (error: any) {
      return rejectWithValue({ error: error.message })
    }
  }
)

const checkUserDb = async (user: UserState) => {
  const { uid } = user

  if (!uid) return

  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)
  const userExists = docSnap.exists()

  if (!userExists) {
    const { displayName, email, photoURL } = user

    const dbUser = {
      uid,
      displayName,
      email,
      photoURL,
      matches: initialState.matches,
      brackets: initialState.brackets,
      matchHistory: initialState.matchHistory,
    }

    setDoc(doc(db, 'users', uid), dbUser)

    return dbUser
  } else {
    return docSnap.data()
  }
}

export const logout = createAsyncThunk('logout', (_, { rejectWithValue }) => {
  signOut(auth).catch((error: any) => {
    console.log('Logout error: ', error.code)
    return rejectWithValue(error)
  })
})

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.displayName = action.payload.displayName
        state.email = action.payload.email
        state.authenticated = true
        state.loading = false
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
      .addCase(logout.pending, (state) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.authenticated = false
        state.email = initialState.email
        state.displayName = initialState.displayName
        state.loading = true
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error
        state.loading = true
      })
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
