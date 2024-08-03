import { Search } from "./components/Search.jsx";
import "./App.css";
import { useState } from "react";

export const App = () => {

    const [areaName, setAreaName] = useState("");

    return(
        <div className="weather-wrapper">
            <Search areaName={areaName} setAreaName={setAreaName}/>
        </div>
    );
}