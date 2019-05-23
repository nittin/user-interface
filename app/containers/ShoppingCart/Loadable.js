/**
 *
 * Asynchronously loads the component for ShoppingCart
 *
 */

import loadable from 'loadable-components';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  LoadingComponent: LoadingIndicator,
});
