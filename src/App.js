import logo from "./logo.svg";
// import './App.css';
import "../node_modules/leaflet/dist/leaflet.css";
import { Select, Form } from "antd";
import { useState } from "react";
import Map from "./Map";
import "antd/dist/antd.css";
import { cities } from "./cities";
function App() {
  const [zoom, setZoom] = useState(6);
  const [position, setPosition] = useState([30, 70]);
  const onChange = (value) => {
    const city = cities[value];
    // console.log(city);
    setPosition([city.lat, city.lng]);
    setZoom(13);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const setCenter = () => {};

  return (
    <div
      style={{
        backgroundColor: "#efefef",
      }}
    >
      <Select
        placeholder="Cities"
        showSearch
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        style={{
          width: "20%",
          margin: "40px 30px",
        }}
      >
        {cities.map((city, index) => {
          return (
            <Select.Option key={index} value={index}>
              {city.name}
            </Select.Option>
          );
        })}
      </Select>
      <Map
        position={position}
        zoom={zoom}
        setZoom={setZoom}
        setPosition={setPosition}
      />
    </div>
  );
}

export default App;
