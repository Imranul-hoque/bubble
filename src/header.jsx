export const Header = () => {
  return (
    <header
      style={{
        position: "absolute",
        top: "5%",
        left: "40%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          fontSize: "25px",
                  fontWeight: "revert",
          listStyle : "none"
        }}
      >
        <li>
          {" "}
          <a>Home</a>{" "}
        </li>
        <li>
          {" "}
          <a>About</a>{" "}
        </li>
        <li>
          {" "}
          <a>Contact</a>{" "}
        </li>
        <li>
          {" "}
          <a>Project</a>{" "}
        </li>
      </div>
    </header>
  );
};
