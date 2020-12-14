import React, { useState } from "react";

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
      <div className="review mt-3 mb-3">
      <input
          type="text"
          onChange={getReview}
          className="input-text mb-3"
          placeholder="leave a review"
          value={review}
        />
        <button onClick={addReview} className="submit-review float-right">
          {" "}
          Submit a review
        </button>
        {fullReview.map(({ id, text }) => (
          <ul key={id}>
            <li>
              <span>Feedback: {text}</span>
            </li>
          </ul>
        ))}


      </div>
    </React.Fragment>
  );
}

export default AddReviews;