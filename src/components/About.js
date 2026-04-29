import React from "react";
// ,{ useState }
export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  //   })
  // ;

  let myStyle= {
    color: props.mode==='dark'?'white':'rgb(36 74 104)',
    backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
   
  }

  // const [btntext, setBtnText] = useState("Enable Light  Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: '2px solid whight'
  //     });
  //     setBtnText("Enable Light  Mode");
  //   }
  // };

  return (
    <div
      className="container"
      style={myStyle}
    >
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={myStyle}
            >
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count,character count or Preview.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={myStyle}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={myStyle}
            >
              Textutils is a free character conter tool that provides instant
              character count & word count statistics for a given text.Textutils
              reports the number of words and characters. Thus it is suitable
              for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={myStyle}
            >
              This word counter software works in any web browsers such as
              Chrome,Firefox,Internet Explore, Safari,Opera.It suits to count
              characters in facebook, blog, books, excel document, pdf document,
              essays,etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
