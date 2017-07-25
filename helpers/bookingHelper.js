const Booking = require('../models/booking');

module.exports.extendBooking = (booking, newEndDate) => {
  let newBooking = new Booking(2, booking.location_id, booking.startDate, newEndDate, 'E', booking.finalPrice, 
    booking.guest_id, booking.id, booking.order + 1);
  return newBooking;
};


module.exports.relocateBooking = (booking, newLocationId) => {
  const request = new Date();
  if(request > booking.endDate) {
    return booking;
  }
  let newBooking = new Booking(3, newLocationId, request >= booking.startDate ? request : booking.startDate, booking.endDate,
    'R', booking.finalPrice, booking.guest_id, booking.id, booking.order + 1);
  return newBooking;
};
