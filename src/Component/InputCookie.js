import React, { useState, useEffect } from "react";
import axios from "axios";

function InputCookie() {
  const [cookie, setCookie] = useState();

  let onChange = (events) => {
    console.log(events.target.value);
    localStorage.setItem("cookie", events.target.value);
  };

  let onClick = () => {
    let cookie = localStorage.getItem("cookie");
    if (cookie != null) {
      let data = {
        cookie: cookie,
      };
      axios
        .post(
          "http://198.199.86.89:8000/api/schedule/getdata",
          data,
          "application/json"
        )
        .then((data) => {
          console.log(data.data);
          if (data.data.status) {
            localStorage.setItem("result", JSON.stringify(data.data));
            localStorage.removeItem("cookie");
            window.location.replace("/schedule");
          } else {
            alert(data.data.message);
            localStorage.removeItem("cookie");
          }
        });
    } else {
      alert("Cookie not found");
    }
  };
  if (localStorage.getItem("result") == null) {
  } else {
    window.location.replace("/schedule");
  }
  return (
    <div>
      <input
        id="cookie"
        type={"text"}
        placeholder={"Input cookie KMA"}
        name="cookie"
        onChange={(event) => {
          onChange(event);
        }}
        value={cookie}
      ></input>
      <button
        onClick={() => {
          onClick();
        }}
      >
        Crawl TKB
      </button>
    </div>
  );
}
export default InputCookie;
