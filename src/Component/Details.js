import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
function Details(props) {
  const [valueSub, setValueSub] = useState("");
  let { value, subject } = props;
  console.log(subject);
  if (subject.length == 0) {
    return (
      <div>
        <h2>
          {" "}
          Lịch học ngày {JSON.stringify(new Date(value).getDate())}/
          {JSON.stringify(new Date(value).getMonth() + 1)}/
          {JSON.stringify(new Date(value).getFullYear())}
        </h2>
        <div>Không có lịch học</div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>
          {" "}
          Lịch học ngày {JSON.stringify(new Date(value).getDate())}/
          {JSON.stringify(new Date(value).getMonth() + 1)}/
          {JSON.stringify(new Date(value).getFullYear())}
        </h2>
        <div>
          {subject.map((item, key) => {
            return (
              <div key={key}>
                <h3>{item.name}</h3>
                <p>Tiết {item.details.tietHoc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Details;
