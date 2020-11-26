import React, { useState } from "react";

export default function FilterRes(props) {

    const [Value, setValue] = useState("");
    const [Min, setMin] = useState("");
    const [Max, setMax] = useState("");

    function getValue(event) {
        setValue(event.target.value);
      }
 
    return (
        <div>
            <input type="range"  min="0" max="5" step="0.5" value={Min} onChange={getValue} />
            <input type="range"  min="0" max="5" step="0.5" value={Max} onChange={getValue} />
            <input type="submit" value="Submit" Onclick={props.handleFilter} />
        </div>
    )
}
