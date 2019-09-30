import api from './api';

import $ from 'jquery';
import store from './store';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();

  const item = store.items[0];
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'foobar' });
  console.log('new name: ' + item.name);
};

$(main);