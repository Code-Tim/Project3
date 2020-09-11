import React from "react";
// import "./charSelect.css";
import history from "../../utils/History";

function CharSelect() {
  return (
    <div className="charSelect">
      <h1>Pick character</h1>
      <form>
        <button
          variant="btn btn-success"
          onClick={() => history.push("/matchSetup")}
        >
          Remove this when we git the real page
        </button>
      </form>
    </div>
  );
}

export default CharSelect;
