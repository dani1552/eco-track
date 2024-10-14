import { styled } from "styled-components";
import moment from "moment";
import { useEffect, useRef } from "react";

function TaskCalendar({ selectedDate, setSelectedDate }) {
  const currentMonth = moment(selectedDate).format("MMMM YYYY");
  const weekContainerRef = useRef(null);

  const startOfRange = moment(selectedDate).subtract(14, "days");
  const endOfRange = moment(selectedDate).add(14, "days");

  const totalDays = endOfRange.diff(startOfRange, "days") + 1;
  const dateRange = Array.from({ length: totalDays }, (_, i) =>
    startOfRange.clone().add(i, "days")
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

  useEffect(() => {
    if (weekContainerRef.current) {
      // 처음 렌더링 시 오늘 날짜를 중앙에 배치
      const todayIndex = dateRange.findIndex((day) =>
        day.isSame(new Date(), "day")
      );
      const containerWidth = weekContainerRef.current.offsetWidth;
      const scrollPosition = todayIndex * 60 - (containerWidth / 2 - 30);
      weekContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <div className="week-container" ref={weekContainerRef}>
        {dateRange.map((day) => (
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
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-left: 20px;

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
    scroll-behavior: smooth;
  }

  .day {
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 10px;
    box-sizing: border-box;
    transition: transform 0.2s ease, background-color 0.3s ease;
  }

  .selected-day {
    background-color: var(--color-blue);
    color: white;
    animation: fade-in 0.2s ease;
  }

  .today {
    border: 2px solid var(--color-blue);
  }

  @keyframes fade-in {
    from {
      background-color: transparent;
    }
    to {
      background-color: var(--color-blue);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default TaskCalendar;
