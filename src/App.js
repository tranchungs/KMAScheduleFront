import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Details from "./Component/Details";
function App() {
  const [subject, setSubject] = useState([]);
  const [value, onChange] = useState(new Date());
  const [date, setDatess] = useState(() => {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let dataTime = new Date(year, month, date).getTime();
    return dataTime;
  });
  function ShowDataFind(year, month, day) {
    let date = new Date(year, month, day).getTime();
    let result = {
      name: "",
      data: [],
    };
    let resultSchedule = JSON.parse(localStorage.getItem("result"));
    if (resultSchedule.user == "") {
    } else {
      resultSchedule.data.map((subject) => {
        let name = subject.name;
        subject.time.map((item) => {
          if (date == item.time) {
            let subj = {
              name: name,
              details: item,
            };
            result.data.push(subj);
          }
        });
      });
    }
    return result;
  }
  let onClickDays = (datetime) => {
    let date = datetime.getDate();
    let month = datetime.getMonth();
    let year = datetime.getFullYear();
    let data = ShowDataFind(year, month, date);
    let dataTime = new Date(year, month, date).getTime();
    setDatess(dataTime);
    setSubject(data.data);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={(datetime) => {
          onClickDays(datetime);
        }}
      />
      <Details value={date} subject={subject}></Details>
    </div>
  );
}
export default App;
