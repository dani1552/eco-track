import { useState } from "react";
import { styled } from "styled-components";
import moment from "moment";

const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin-bottom: 10px;
  }

  .arrow {
    cursor: pointer;
    font-size: 20px;
  }

  .month-label {
    font-size: 18px;
    font-weight: bold;
  }

  .week-container {
    display: flex;
    overflow-x: scroll;
    width: 100%;
    padding: 10px;
    gap: 10px;
  }

  .day {
    width: 70px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .selected-day {
    background-color: #f87171;
    color: white;
  }

  .today {
    border: 2px solid var(--color-blue);
  }
`;

function TaskCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentMonth = moment(selectedDate).format("MMMM YYYY");

  // 현재 날짜를 기준으로 42일의 날짜 배열 생성
  const startOfWeek = moment(selectedDate).startOf("week");
  const weekDays = Array.from({ length: 42 }, (_, i) =>
    startOfWeek.clone().add(i, "days")
  );

  const handlePrevMonth = () => {
    setSelectedDate(moment(selectedDate).subtract(1, "month").toDate());
  };

  const handleNextMonth = () => {
    setSelectedDate(moment(selectedDate).add(1, "month").toDate());
  };

  const handleDayClick = (day) => {
    setSelectedDate(day.toDate());
  };

  return (
    <CalendarWrapper>
      <div className="header">
        <div className="arrow" onClick={handlePrevMonth}>
          {"<"}
        </div>
        <div className="month-label">{currentMonth}</div>
        <div className="arrow" onClick={handleNextMonth}>
          {">"}
        </div>
      </div>

      <div className="week-container">
        {weekDays.map((day) => (
          <div
            key={day.format("YYYY-MM-DD")}
            className={`day ${
              day.isSame(selectedDate, "day") ? "selected-day" : ""
            } ${day.isSame(new Date(), "day") ? "today" : ""}`}
            onClick={() => handleDayClick(day)}
          >
            <div>{day.format("ddd")}</div>
            <div>{day.format("DD")}</div>
          </div>
        ))}
      </div>
      <div>{moment(selectedDate).format("YYYY년 MM월 DD일")}</div>
    </CalendarWrapper>
  );
}

export default TaskCalendar;
