'use strict';
import './index.sass';
import { addListeners } from './scripts/listeners.js';
import { addPhoneMask } from './scripts/imask.js';

(function () {
  addListeners();
  addPhoneMask();
}());