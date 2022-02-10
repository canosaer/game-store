import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Store} from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faChevronRight, faChevronLeft, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart, faChevronRight, faChevronLeft, faPlay, faPause)

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);