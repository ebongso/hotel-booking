const express = require('express');
const router = express.Router();

const Booking = require('../models/booking');
const bookingHelper = require('../helpers/bookingHelper');

router.get('/', (req, res, next) => {
  res.render('index.html', { name : 'World' });
});

router.post('/extend', (req, res, next) =>  {
  let booking1 = new Booking(1, 1, new Date('05/01/2017'), new Date('05/05/2017'), 'O', 100, 1, null, 0);
  bookingHelper.extendBooking(booking1, req.params.newDate);
});

router.post('/relocate', (req, res, next) => {
  let booking2 = new Booking(2, 1, new Date('07/20/2017'), new Date('07/31/2017'), 'O', 100, 1, null, 0);
  bookingHelper.relocateBooking(booking2, req.params.newLocation);
});

module.exports = router;