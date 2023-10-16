import React from "react";
import Chart from "react-google-charts";
function Chartexp() {

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", margin: "20px", marginLeft: "10px" }}>
      <Chart
        data={[
          ["Year", "Sales", "Expenses"],
          ["2004", 1000, 400],
          ["2005", 1170, 460],
          ["2006", 660, 1120],
          ["2007", 1030, 540],
        ]}
        options={
          {
            title: "Company Performance",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
          }
        }
        chartType="LineChart"
        width="100%"
        height="400px"
        style={{
          width: "900px",
          height: "500px",
        }}
      />
      </div>
      <br />
    </div>
  );
}

export default Chartexp;
