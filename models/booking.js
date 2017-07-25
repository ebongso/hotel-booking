class Booking {
  constructor(id, location_id, startDate, endDate, type, finalPrice, guest_id, parent_id, order) {
    this.id = id;
    this.location_id = location_id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = type;
    this.finalPrice = finalPrice;
    this.guest_id = guest_id;
    this.parent_id = parent_id;
    this.order = order;
  }
}