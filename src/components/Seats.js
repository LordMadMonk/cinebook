import React from 'react'
import SeatPicker from 'react-seat-picker';
import "./Seats.css"
function Seats({setSelected}) {
    const rows = [
      [
        { id: 1, number: "A1", tooltip: 'Cost: Rs. 250' },
        { id: 2, number: "A2", tooltip: 'Cost: Rs. 250' },
        { id: 3, number: "A3", tooltip: 'Cost: Rs. 250' },
        { id: 4, number: "A4", tooltip: 'Cost: Rs. 250' },
        { id: 24, number: "A5", tooltip: 'Cost: Rs. 250' },
        { id: 34, number: "A6", tooltip: 'Cost: Rs. 250' },
        { id: 44, number: "A7", tooltip: 'Cost: Rs. 250' },
        { id: 54, number: "A8", tooltip: 'Cost: Rs. 250' },
        null,
        { id: 5, number: "A9", tooltip: 'Cost: Rs. 250' },
        { id: 6, number: "A10", tooltip: 'Cost: Rs. 250' },
        { id: 7, number: "A11", tooltip: 'Cost: Rs. 250' },
        { id: 8, number: "A12", tooltip: 'Cost: Rs. 250' },
        { id: 9, number: "A13", isReserved: true },
      ],
      [
        { id: 11, number: "B1", tooltip: 'Cost: Rs. 250' },
        { id: 12, number: "B2", tooltip: 'Cost: Rs. 250' },
        { id: 13, number: "B3", isReserved: true },
        { id: 14, number: "B4", tooltip: 'Cost: Rs. 250' },
        { id: 74, number: "B5", tooltip: 'Cost: Rs. 250' },
        { id: 84, number: "B6", tooltip: 'Cost: Rs. 250' },
        { id: 34, number: "B7", tooltip: 'Cost: Rs. 250' },
        { id: 94, number: "B8", tooltip: 'Cost: Rs. 250' },
        null,
        { id: 15, number: "B9", tooltip: 'Cost: Rs. 250' },
        { id: 16, number: "B10", tooltip: 'Cost: Rs. 250' },
        { id: 17, number: "B11", tooltip: 'Cost: Rs. 250' },
        { id: 18, number: "B12", tooltip: 'Cost: Rs. 250' },
        { id: 19, number: "B13", tooltip: 'Cost: Rs. 250' },
      ],
      [
        { id: 21, number: "C1", tooltip: 'Cost: Rs. 250' },
        { id: 22, number: "C2", tooltip: 'Cost: Rs. 250' },
        { id: 23, number: "C3", tooltip: 'Cost: Rs. 250' },
        { id: 24, number: "C4", tooltip: 'Cost: Rs. 250' },
        { id: 29, number: "C5", tooltip: 'Cost: Rs. 250' },
        { id: 20, number: "C6", tooltip: 'Cost: Rs. 250' },
        { id: 99, number: "C7", tooltip: 'Cost: Rs. 250' },
        { id: 98, number: "C8", tooltip: 'Cost: Rs. 250' },
        null,
        { id: 25, number: "C9", tooltip: 'Cost: Rs. 250' },
        { id: 26, number: "C10", tooltip: 'Cost: Rs. 250' },
        { id: 27, number: "C11", isReserved: true },
        { id: 28, number: "C12", tooltip: 'Cost: Rs. 250' },
        { id: 29, number: "C13", tooltip: 'Cost: Rs. 250' },
        null,
      ],
      [
        { id: 11, number: "D1", tooltip: 'Cost: Rs. 250' },
        { id: 12, number: "D2", tooltip: 'Cost: Rs. 250' },
        { id: 13, number: "D3", isReserved: true },
        { id: 14, number: "D4", tooltip: 'Cost: Rs. 250' },
        { id: 74, number: "D5", tooltip: 'Cost: Rs. 250' },
        { id: 84, number: "D6", tooltip: 'Cost: Rs. 250' },
        { id: 34, number: "D7", tooltip: 'Cost: Rs. 250' },
        { id: 94, number: "D8", tooltip: 'Cost: Rs. 250' },
        null,
        { id: 15, number: "D9", tooltip: 'Cost: Rs. 250' },
        { id: 16, number: "D10", tooltip: 'Cost: Rs. 250' },
        { id: 17, number: "D11", tooltip: 'Cost: Rs. 250' },
        { id: 18, number: "D12", tooltip: 'Cost: Rs. 250' },
        { id: 19, number: "D13", tooltip: 'Cost: Rs. 250' },
      ],
      [
        { id: 11, number: "E1", tooltip: 'Cost: Rs. 250' },
        { id: 12, number: "E2", tooltip: 'Cost: Rs. 250' },
        { id: 13, number: "E3", tooltip: 'Cost: Rs. 250' },
        { id: 14, number: "E4", tooltip: 'Cost: Rs. 250' },
        { id: 74, number: "E5", tooltip: 'Cost: Rs. 250' },
        { id: 84, number: "E6", tooltip: 'Cost: Rs. 250' },
        { id: 34, number: "E7", tooltip: 'Cost: Rs. 250' },
        { id: 94, number: "E8", tooltip: 'Cost: Rs. 250' },
        null,
        { id: 15, number: "E9", tooltip: 'Cost: Rs. 250' },
        { id: 16, number: "E10", tooltip: 'Cost: Rs. 250' },
        { id: 17, number: "E11", tooltip: 'Cost: Rs. 250' },
        { id: 18, number: "E12", tooltip: 'Cost: Rs. 250' },
        { id: 19, number: "E13", tooltip: 'Cost: Rs. 250' },
      ],
      [
        { id: 11, number: "F1", tooltip: 'Cost: Rs. 250' },
        { id: 12, number: "F2", tooltip: 'Cost: Rs. 250' },
        { id: 13, number: "F3", tooltip: 'Cost: Rs. 250' },
        { id: 14, number: "F4", tooltip: 'Cost: Rs. 250' },
        { id: 74, number: "F5", tooltip: 'Cost: Rs. 250' },
        { id: 84, number: "F6", tooltip: 'Cost: Rs. 250' },
        { id: 34, number: "F7", tooltip: 'Cost: Rs. 250' },
        { id: 94, number: "F8", tooltip: 'Cost: Rs. 250' },
        null,
        { id: 15, number: "F9", tooltip: 'Cost: Rs. 250' },
        { id: 16, number: "F10", tooltip: 'Cost: Rs. 250' },
        { id: 17, number: "F11", tooltip: 'Cost: Rs. 250' },
        { id: 18, number: "F12", tooltip: 'Cost: Rs. 250' },
        { id: 19, number: "F13", tooltip: 'Cost: Rs. 250' },
      ],
      [
        { id: 11, number: "G1", tooltip: 'Cost: Rs. 250' },
        { id: 12, number: "G2", tooltip: 'Cost: Rs. 250' },
        { id: 13, number: "G3", tooltip: 'Cost: Rs. 250' },
        { id: 14, number: "G4", tooltip: 'Cost: Rs. 250' },
        { id: 74, number: "G5", tooltip: 'Cost: Rs. 250' },
        { id: 84, number: "G6", tooltip: 'Cost: Rs. 250' },
        { id: 34, number: "G7", isReserved: true },
        { id: 94, number: "G8", tooltip: 'Cost: Rs. 250' },
        null,
        { id: 15, number: "G9", tooltip: 'Cost: Rs. 250' },
        { id: 16, number: "G10", tooltip: 'Cost: Rs. 250' },
        { id: 17, number: "G11", tooltip: 'Cost: Rs. 250' },
        { id: 18, number: "G12", tooltip: 'Cost: Rs. 250' },
        { id: 19, number: "G13", tooltip: 'Cost: Rs. 250' },
      ],
    ];
    const  addSeatCallback = ({ row, number, id }, addCb) => {
       setSelected((prevItems) => [...prevItems, number]);
       const newTooltip = `selected by you`;
       addCb(row, number, id, newTooltip);
     };

     const removeSeatCallback = ({ row, number, id }, removeCb) => {
       setSelected((list) => list.filter((item) => item !== number));
       removeCb(row, number);
     };
    return (
      <div className="seats">
        <h3>Screen this way</h3>
        <div className="box"></div>
        <SeatPicker
          addSeatCallback={addSeatCallback}
          removeSeatCallback={removeSeatCallback}
          rows={rows}
          alpha
          maxReservableSeats={10}
          visible
        />
      </div>
    );
}

export default Seats;