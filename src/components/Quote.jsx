import React from "react";

function Quote({ quote }) {
    return (
        <div className="d-flex justify-content-center p-4">
            <div className="w-50">
                <blockquote className="blockquote">
                    <p>{quote.quoteText}</p>
                </blockquote>
                <div className="blockquote-footer">
                    <cite title="Source Title">
                        {quote.quoteAuthor}
                    </cite>
                </div>
            </div>
        </div>
    );
}

export default Quote;
