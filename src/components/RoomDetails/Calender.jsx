import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="py-10">
      <div>
        <h2 className="text-2xl font-medium">Select check-in date</h2>
        <p className="text-sm text-gray-700">
          Add your travel dates for exact pricing
        </p>
      </div>
      <DayPicker
        mode="default"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
    </div>
  );
};

export default Calender;
