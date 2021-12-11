const initialState: UserState = {
  uid: null,
  displayName: null,
  email: null,
  authenticated: null,
  emailVerified: null,
  photoURL: null,
  loading: false,
  error: null,
  matches: {
    played: 0,
    won: 0,
    lost: 0,
    streak: 0,
  },
  brackets: [
    {
      type: 'single',
      rating: 0,
      rank: 0,
    },
    {
      type: 'duo',
      rating: 0,
      rank: 0,
    },
  ],
  matchHistory: [],
}

export default initialState
