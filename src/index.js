import api from './api';

import $ from 'jquery';
import store from './store';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  shoppingList.bindEventListeners();
  shoppingList.render();

  const item = store.items[0];
  console.log(store.items[1], 'here');
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'foobar' });
  console.log('new name: ' + item.name);
};

$(main);