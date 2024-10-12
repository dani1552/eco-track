import { useState } from "react";
import { styled } from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const CalendarWrapper = styled.div`
  /* 캘린더 기본 스타일 */
  .react-calendar {
    border-radius: 10px !important;
    border: none !important;
    overflow: hidden !important;
  }

  /* 선택된 날짜에 대한 기본 스타일 */
  .react-calendar__tile--active {
    background: none !important;
    box-shadow: none !important;
  }

  /* 선택된 날짜 커스터마이징 */
  .react-calendar__tile--active abbr {
    background: #f87171 !important;
    color: white !important;
    padding: 15% !important;
    font-size: 12px !important;
    border-radius: 50% !important;
  }

  /* 오늘 날짜에 대한 커스터마이징 */
  .react-calendar__tile--now {
    position: relative;
    background: none !important;
    background: var(--color-lightgray) !important;
    border-radius: 10%;
  }
`;

function TaskCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locate, date) => moment(date).format("DD")} // 날짜 뒤 "일" 텍스트 제거
      />
      <div>{moment(value).format("YYYY년 MM월 DD일")}</div>
    </CalendarWrapper>
  );
}

export default TaskCalender;
