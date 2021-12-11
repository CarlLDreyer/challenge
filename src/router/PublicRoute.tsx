import { Route, Redirect } from 'react-router-dom'

interface Props {
  path?: string
  children?: any
  isAuthenticated?: boolean
}

const PublicRoute = ({ children, isAuthenticated, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PublicRoute
