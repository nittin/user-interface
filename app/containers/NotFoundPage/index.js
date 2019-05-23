/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import CheckOut from '../../components/CheckOutStep/CheckOut';

export default function NotFound() {
  return (
    <article>
      <div>
        <FormattedMessage {...messages.header} />
        <CheckOut />
      </div>
    </article>
  );
}
