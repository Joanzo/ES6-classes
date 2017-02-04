var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} =  require('react-router');

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div>
    <ComponentOne/>
    <ComponentTwo/>
  </div>,
  document.getElementById('app')
);
