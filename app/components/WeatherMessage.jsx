var React = require('react');

var WeatherMessage = ({location, temp }) => (
    <p>It's {temp} in {location}</p>
    );

module.exports = WeatherMessage;
