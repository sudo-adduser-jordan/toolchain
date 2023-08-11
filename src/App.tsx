import "./styles/App.css";
import logo from "./assets/react.png";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="title">Toolchain</div>
        <div className="add">+</div>
        <img className="image" src={logo} alt="" />
      </div>
    </>
  );
}
