import {getFocusedRouteNameFromRoute, Route} from '@react-navigation/native';

export function setAccountScreenHeaderTitle(
  route: Route<'AccountUser', object | undefined>,
) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'SignIn';

  switch (routeName) {
    case 'SignIn':
      return 'Sign in';
    case 'SignUp':
      return 'Sign up';
  }
}

export function setAccountScreenHeaderColor(
  route: Route<'AccountUser', object | undefined>,
) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'SignIn';

  switch (routeName) {
    case 'SignIn':
      return '#3cc753';
    case 'SignUp':
      return '#c5c73c';
  }
}
