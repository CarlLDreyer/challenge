interface AppState {
  loading?: boolean
  error?: any
}

interface Matches {
  played: number
  won: number
  lost: number
  streak: number
}

interface Bracket {
  type: string
  rating: number
  rank: number
}

interface Opponent {
  uid: string
  displayName: string
  photoURL: string
}

interface MatchHistoryItem {
  uid: string
  result: 'win' | 'loss'
  opponent: Opponent // should be reference to other user?
  ratingChange: number
}

interface UserState extends AppState {
  uid?: string | null
  displayName?: string | null
  email?: string | null
  photoURL?: string | null
  emailVerified?: boolean | null
  authenticated?: boolean | null
  matches?: Matches
  brackets?: Array<Bracket>
  matchHistory?: Array<MatchHistoryItem>
}

interface Payload {
  uid?: string | null
  displayName?: string | null
  email?: string | null
  photoURL?: string | null
  emailVerified?: boolean | null
}
