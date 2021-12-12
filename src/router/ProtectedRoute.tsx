import { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import AppHeader from 'components/app/AppHeader'
// import Navigation from 'components/navigation/Navigation'
import authRoutes from 'router/authRoutes'

const ProtectedRoute = () => (
  <Switch>
    <Redirect
      exact
      from="/"
      to="/home"
    />

    <Redirect
      exact
      from="/players"
      to="/players/all"
    />

    <Suspense fallback={<h2>Loading...</h2>}>
      {authRoutes.map(({ component: Component, path, exact }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
        >
          {/* { header && <AppHeader />} */}

          <Component />

          {/* { nav && <Navigation />} */}
        </Route>
      ))}
    </Suspense>
  </Switch>
)

export default ProtectedRoute
