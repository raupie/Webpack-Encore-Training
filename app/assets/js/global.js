// libraries
require('jquery');
require('what-input');
require('foundation-sites');

// css
require('../css/global.scss');
require('../css/main.css');

// initiate foundation framework
$(document).foundation();

// global js
$(document).ready(function() {
    $('#global').text('jquery global working!');
});
