import {getFocusedRouteNameFromRoute, Route} from '@react-navigation/native';
import {UserData} from '../models/User/userData';

export function setAccountScreenHeaderTitle(
  route: Route<'AccountUser', object | undefined>,
  user: UserData | null,
) {
  const routeName = user
    ? getFocusedRouteNameFromRoute(route) ?? 'Profile'
    : getFocusedRouteNameFromRoute(route) ?? 'SignIn';

  switch (routeName) {
    case 'SignIn':
      return 'Sign in';
    case 'SignUp':
      return 'Sign up';
    case 'Profile':
      return 'Profile';
    case 'ChangePassword':
      return 'Change password';
  }
}

export function setAccountScreenHeaderColor(
  route: Route<'AccountUser', object | undefined>,
  user: UserData | null,
) {
  const routeName = user
    ? getFocusedRouteNameFromRoute(route) ?? 'Profile'
    : getFocusedRouteNameFromRoute(route) ?? 'SignIn';

  switch (routeName) {
    case 'SignIn':
      return '#3cc753';
    case 'SignUp':
      return '#c5c73c';
    case 'Profile':
      return '#153e8a';
    case 'ChangePassword':
      return '#96434e';
  }
}
