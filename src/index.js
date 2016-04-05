const $ = require('jquery');
const angular = require('angular');

const ReactDOM = require('react-dom');
const React = require('react');

const Link = require('./components/LinkComponent.jsx');

console.log(document.getElementById('appcontainer'));
ReactDOM.render(<Link url='http://' title='Hey' description='plop' />,
document.getElementById('appcontainer'));

$.get('/api/links').then(function(links) {
  console.log(links);
});