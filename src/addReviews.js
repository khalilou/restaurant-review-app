import React, { useState } from "react";
// import Rater from "react-rater";
// import "./AddReviews.css";

function AddReviews() {
  const [review, setReview] = useState("");
  const [fullReview, setFullReview] = useState([]);

  function getReview(event) {
    setReview(event.target.value);
  }

  function addReview() {
    if (review === "") {
      alert("You should submit a real feedback review");
    } else {
      setFullReview((fullReview) =>
        fullReview.concat({
          text: review,
          id: Math.random() * 100,
        })
      );
      setReview("");
    }
  }

  return (
    <React.Fragment>
      <div className="review">
        {fullReview.map(({ id, text }) => (
          <ul key={id}>
            <li>
              <span>Feedback: {text}</span>
            </li>
          </ul>
        ))}

        <input
          type="text"
          onChange={getReview}
          className="input-text"
          placeholder="leave a review"
          value={review}
        />
        <button onClick={addReview} className="submit-review">
          {" "}
          Submit a review
        </button>
      </div>
    </React.Fragment>
  );
}

export default AddReviews;