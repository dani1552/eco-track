import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment"; // 클릭한 날짜를 화면에 표시하는 라이브러리

function TaskCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar onChange={onChange} value={value} />
      <div>{moment(value).format("YYYY년 MM월 DD일")}</div>
    </>
  );
}

export default TaskCalender;
