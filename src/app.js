const MELBOURNE = [144.96, -37.81]
const NEW_YORK = [-74.0, 40.71]
const MANCHESTER = [-2.24, 53.48]

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

const setUpMap = center => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 13,
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav, 'top-right')

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving',
  })
  map.addControl(directions, 'top-left')
}

const successLocation = position => {
  console.log(position)
  setUpMap([position.coords.longitude, position.coords.latitude])
}

const errorLocation = () => {
  setUpMap(MELBOURNE)
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})
