//let Booking = require('booking');

(() => {
  let booking1 = new Booking(1, 1, new Date('05/01/2017'), new Date('05/05/2017'), 'O', 100, 1, null, 0);
  let booking2 = new Booking(2, 1, new Date('07/20/2017'), new Date('07/31/2017'), 'O', 100, 1, null, 0);

  console.log(booking1);
  console.log(extendBooking(booking1, new Date('05/10/2017')));

  console.log(booking2);
  console.log(relocateBooking(booking2, 2));
})();