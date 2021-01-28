module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mapsApi: {
    key: process.env.MAPS_API_KEY,
    url: `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap&libraries=&v=weekly`,
  },
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
};
