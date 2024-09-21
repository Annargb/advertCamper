import { useState } from 'react';

import DatePicker from 'react-datepicker';
import * as c from './CustomDataPicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CustomDataPicker = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  return (
    <>
      <DatePicker
        placeholderText="Booking Date"
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 3)}
      />
      <c.CalendarGlobalStyles />
    </>
  );
};
