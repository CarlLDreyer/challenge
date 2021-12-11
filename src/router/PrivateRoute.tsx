import { Route, Redirect } from 'react-router-dom'

interface Props {
  path?: string
  children?: any
  isAuthenticated?: boolean
}

const PrivateRoute = ({ children, isAuthenticated, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
