import { createStore } from 'redux';

import { mapReducers } from '../reducers/mapReducers.js';

const store = createStore(mapReducers);

export default store;