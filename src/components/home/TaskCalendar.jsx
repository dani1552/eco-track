import { styled } from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import { useEffect, useRef } from "react";
import LeftArrowIcon from "/src/assets/icons/arrow-left-icon.svg?react";
import RightArrowIcon from "/src/assets/icons/arrow-right-icon.svg?react";

moment.locale("ko");

function TaskCalendar({ selectedDate, setSelectedDate }) {
  const currentMonth = moment(selectedDate).format("MMMM YYYY");
  const weekContainerRef = useRef(null);

  const startOfRange = moment(selectedDate).subtract(365, "days");
  const endOfRange = moment(selectedDate).add(365, "days");

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
          <LeftArrow />
        </div>
        <div className="month-label">{currentMonth}</div>
        <div className="arrow" onClick={handleNextMonth}>
          <RightArrow />
        </div>
      </div>

      <div className="week-container" ref={weekContainerRef}>
        {dateRange.map((day) => (
          <div
            key={day.format("YYYY-MM-DD")}
            className="day"
            onClick={() => handleDayClick(day)}
          >
            <div className="day-name">{day.format("ddd")}</div>
            <div
              className={`day-number ${
                day.isSame(selectedDate, "day") ? "selected-day" : ""
              } ${day.isSame(new Date(), "day") ? "today-circle" : ""}`}
            >
              {day.format("DD")}
            </div>
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
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin-bottom: 10px;
    gap: 20px;
    justify-content: center;
  }

  .arrow {
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 0 5px;
  }

  .month-label {
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
  }

  .week-container {
    display: flex;
    overflow-x: scroll;
    width: 100%;
    height: 100px;
    padding: 20px;
    gap: 10px;
    scroll-behavior: smooth;
  }

  .day {
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    justify-content: center;
    border-radius: 10px;
    box-sizing: border-box;
    transition: transform 0.2s ease, background-color 0.3s ease;
  }

  .day-name {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .day-number {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: fade-background 0.6s ease-in-out;
  }

  @keyframes fade-background {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    50% {
      opacity: 0.5;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  .selected-day {
    background-color: #216dff;
    width: 30px;
    height: 30px;
    color: white;
  }

  .today-circle {
    border: 2px solid #216dff;
    width: 30px;
    height: 30px;
  }

  @keyframes fade-in {
    from {
      background-color: transparent;
    }
    to {
      background-color: var(--color-blue);
    }
  }
`;

const LeftArrow = styled(LeftArrowIcon)`
  width: 20px;
`;

const RightArrow = styled(RightArrowIcon)`
  width: 20px;
`;

export default TaskCalendar;
