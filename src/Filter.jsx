import { useState } from "react";
import "./Filter.css"

function Filter({setFilterValue}) {
    // const [filter_value, setFilterValue] = useState('')

    return (
        
        <div className="input-group mb-3">
            <input type="text" className="form-control filter-bar" name="filterText" onChange={e => {e.preventDefault(); setFilterValue(e.target.value)}} aria-describedby="button-filter"/>
            <button className="btn btn-outline-secondary" type="button" id="button-filter" disabled><i className="bi bi-funnel-fill"></i></button>
      </div>
    )
}

export default Filter
