import React from "react";

function Spinner() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-secondary" role="status">
                {/* spinner-grow  spinner-border */}
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;

