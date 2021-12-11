import React, { Suspense, useEffect, useCallback } from 'react'
import {
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
} from 'firebase/auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { logout, signInWithGoogle } from 'features/user/user-slice'

import PrivateRoute from 'router/PrivateRoute'
import ProtectedRoute from 'router/ProtectedRoute'
import PublicRoute from 'router/PublicRoute'

import { useAppDispatch, useAppSelector } from 'util/hooks'
import SignIn from 'views/sign-in/SignIn'

const Routes = () => {
  const { authenticated } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const refresh = useCallback(
    async (uid) => {
      return dispatch(signInWithGoogle({ uid }))
    },
    [dispatch]
  )

  useEffect(() => {
    const auth = getAuth()
    const f = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user && !authenticated) {
          return await refresh(user.uid)
        }
        if (!user && !authenticated) {
          dispatch(logout())
        }
      })
      await setPersistence(auth, browserLocalPersistence)
    }
    f()
  })

  if (authenticated === null) {
    return <div>Loading...</div>
  } else {
    return (
      <Router>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <PublicRoute path="/sign-in" isAuthenticated={authenticated}>
              <SignIn />
            </PublicRoute>
            <PublicRoute path="/register" isAuthenticated={authenticated}>
              {/* <Register /> */}
            </PublicRoute>
            <PublicRoute path="/forgot-pw" isAuthenticated={authenticated}>
              {/* <ForgotPassword /> */}
            </PublicRoute>
            <PrivateRoute path="/" isAuthenticated={authenticated}>
              <ProtectedRoute />
            </PrivateRoute>
            <Route path="*">
              <h2>Not found</h2>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default Routes
