import { useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import Chart from "react-google-charts";

const Axiousexp = () => {
  const [post, setPost] = useState([]);
  // API call here
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/assigment-data-get")
      .then((responseData) => {
        console.log(responseData.data.data);
        setPost(responseData.data.data);
      });
  }, []);
  // eslint-disable-next-line array-callback-return
  let data = [];
  post.map((item) => {
  
    data = [
      ["intensity", "likelihood", "Relevance", "countty", "topic"],
      [
        item.intensity,
        item.likelihood,
        item.relevance,
        item.country,
        item.topic,
      ],
    ];
    return true
  });


  const options = {
    chart: {
      title: "Important variables to be visualized",
      subtitle: "Intensity, Likelihood, Relevance, Country and Topic",
    },
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          marginLeft: "10px",
        }}
      >
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
      <br />{" "}
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ms-5"
        onClick={() => {
          let intensityFilter = post.filter((res) => res.intensity > 3);
          setPost(intensityFilter);
          console.log(intensityFilter);
        }}
      >
        Filter intensity
      </button>
      <button
        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ms-5"
        onClick={() => {
          let likelihoodFilter = post.filter((res) => res.likelihood > 3);
          setPost(likelihoodFilter);
          
        }}
      >
        Filter Likelihood
      </button>
      <button
        className="bg-red-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ms-5"
        onClick={() => {
          let relevanceFilter = post.filter((res) => res.relevance > 4);
          setPost(relevanceFilter);
        }}
      >
        Filter Relevence
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ms-5"
        onClick={() => {
          let countryFilter = post.filter((res) => res.country === "United States of America");
          setPost(countryFilter);

        }}
      >
        Filter Country
      </button>
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ms-5"
        onClick={() => {
          let topicFilter = post.filter((res) => res.topic === "oil");
          setPost(topicFilter);

        }}
      >
        Filter Topic
      </button>
      
      <CSVLink
        data={post}
        className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ms-5"
      >
        Download CSV
      </CSVLink>
      <br />
      <div className="">
        <table className="table-fixed hover:table-fixed bg-blue-300 border-separate border-spacing-2 border border-slate-400 text-center rounded-lg">
          <thead className="rounded">
            <tr className="bg-gray-200 rounded">
              <th className="rounded">S.No</th>
              <th className="rounded">_id</th>
              <th className="rounded">added</th>
              <th className="rounded">country</th>
              <th className="rounded">end_year</th>
              <th className="rounded">impact</th>
              <th className="rounded">insight</th>
              <th className="rounded">intensity</th>
              <th className="rounded">likelihood</th>
              <th className="rounded">pestle</th>
              <th className="rounded">published</th>
              <th className="rounded">region</th>
              <th className="rounded">relevance</th>
              <th className="rounded">sector</th>
              <th className="rounded">source</th>
              <th className="rounded">start_year</th>
              <th className="rounded">title</th>
              <th className="rounded">topic</th>
              <th className="rounded">url</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item, key) => {
              return (
                <tr key={key} className="bg-green-100">
                  <td className="rounded">{key + 1}</td>
                  <td className="rounded">{item._id}</td>
                  <td className="rounded">{item.added}</td>
                  <td className="rounded">{item.country}</td>
                  <td className="rounded">{item.end_year}</td>
                  <td className="rounded">{item.impact}</td>
                  <td className="rounded">{item.insight}</td>
                  <td className="rounded">{item.intensity}</td>
                  <td className="rounded">{item.likelihood}</td>
                  <td className="rounded">{item.pestle}</td>
                  <td className="rounded">{item.published}</td>
                  <td className="rounded">{item.region}</td>
                  <td className="rounded">{item.relevance}</td>
                  <td className="rounded">{item.sector}</td>
                  <td className="rounded">{item.source}</td>
                  <td className="rounded">{item.start_year}</td>
                  <td className="rounded">{item.title}</td>
                  <td className="rounded">{item.topic}</td>
                  <td className="rounded">{item.url}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Axiousexp;
