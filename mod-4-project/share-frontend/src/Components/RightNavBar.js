import React, { useState, useEffect } from "react";
// import Unsplash, { toJson } from 'unsplash-js';

function RightNavBar() {
  const date = new Date();
  const y = date.getFullYear();
  const d = date.getDate();
  const monthIndex = date.getMonth();
  const m = monthIndex + 1;
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch(`http://numbersapi.com/${m}/${d}/date`)
      .then((r) => r.text())
      .then((quoteOftheday) => {
        setQuote(quoteOftheday);
      });
  }, []);

  return (
    <>
      <div className="ui segment">
        <p>{quote}</p>
      </div>

      <div className="ui divided items">
        <div className="item">
          <div className="content">
            <a className="header">Header</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">Additional Details</div>
          </div>
          <div className="image ">
            <img src="https://images.unsplash.com/photo-1603259689643-52da3f1f5bea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>

        <div className="item">
          <div className="content">
            <a className="header">Header</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">Additional Details</div>
          </div>
          <div className="image">
            <img src="https://images.unsplash.com/photo-1603259689643-52da3f1f5bea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightNavBar;
