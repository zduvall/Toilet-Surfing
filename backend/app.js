// Packages
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

// Import Routes
const routes = require('./routes');

// Environment
const { environment } = require('./config');
const isProduction = environment === 'production';

// App
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
  app.use(cors());
}
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

// Routes
app.use(routes);

// Export
module.exports = app;
