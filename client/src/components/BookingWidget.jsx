import React from "react";

const BookingWidget = ({ place }) => {
  return (
    <div>
      <div className="p-4 bg-white shadow rounded-2xl">
        <div className="text-2xl text-center">
          Price: ${place.price} / per night
        </div>
        <div className="mt-4 border rounded-2xl">
          <div className="flex">
            <div className="px-4 py-3">
              <label>Check in:</label>
              <input type="date" name="" />
            </div>
            <div className="px-4 py-3 border-l">
              <label>Check out:</label>
              <input type="date" name="" />
            </div>
          </div>
          <div className="px-4 py-3 border-t">
            <label>Number of guests:</label>
            <input type="number" value={1} name="" />
          </div>
        </div>
        <button className="primary">Book this place</button>
      </div>
    </div>
  );
};

export default BookingWidget;
