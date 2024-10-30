import React from "react";
export const HomePage = () => {
  const inputRef = React.useRef(null);
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    window.AragornEmbedder.initialize({
      widgetToken: "",
      widgetHeight: "60vh",
      primaryColor: "#434ce8",
    });
  }, []);
  React.useEffect(() => {
    if (token) {
      window.AragornEmbedder.updateWidget({
        widgetToken: token,
        widgetHeight: "60vh",
        primaryColor: "#434ce8",
      });
    }
  }, [token]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          padding: 24,
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter token returned from partner api call and press enter"
        />
        <button
          onClick={() => {
            if (inputRef.current) {
              setToken(inputRef.current.value);
            }
          }}
        >
          Load embeddable
        </button>
      </div>
      {/* Within this comment is the html code you will insert at the location you want the embeddable to show */}
      <div id="aragorn-embeddable" />
      {/* ---------------------------------------------------------------------------------------------------------- */}
    </div>
  );
};
