import {getFocusedRouteNameFromRoute, Route} from '@react-navigation/native';

export function setHomeScreenHeaderTitle(
  route: Route<'Home', object | undefined>,
) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Notifications':
      return 'Notifications';
    case 'ShoppingCart':
      return 'Cart';
  }
}

export function setHomeScreenHeaderColor(
  route: Route<'Home', object | undefined>,
) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return '#843cc7';
    case 'Notifications':
      return '#34a5c2';
    case 'ShoppingCart':
      return '#4a3cc7';
  }
}
