import React from 'react'

function Button({newQuote}) {
    return (
        <div className="d-flex justify-content-center p-3">
            <button 
            className="btn-lg btn-warning fw-bold" 
            style={btnStyle} 
            onClick={newQuote}
            >New Quote</button>
        </div>
    )
}

const btnStyle = {
    // color: "#fff"
}
export default Button
