# STRATOS-DASHBOARD-REACT

This project is a react rewrite of the stratos-dashboard which is used by the htw saar stratos
team to track the live data of the stratos balloon flight.

For a demo version with fake data [click here] (https://itshallrun.github.io/dashboard)


## This project is based on:

- [REACT JS] (https://reactjs.org/)
- [REACT ROUTER v5] (https://reacttraining.com/react-router/web/guides/quick-start)
- [Create React App] (https://github.com/facebook/create-react-app)
- [Highcharts] (https://www.highcharts.com/)
- [Google Maps API] (https://developers.google.com/maps/documentation/javascript/tutorial?hl=de)
- [react-timeline-scribble] (https://github.com/project-cemetery/react-timeline-scribble#readme)

- styling is based on plain JS and CSS, inspired by the inspinia theme, which was used for the original project.

## Before use in production

In order to use this APP in production you need to specify the access to your own:

- data API
- google maps API key
- imprint if required

### DATA API FORMAT
(wip)

### Google maps API key
set `GoogleMapsApiKey` in /src/config.js

### imprint
adjust the `src/components/imprint/imprint.js`to your needs
