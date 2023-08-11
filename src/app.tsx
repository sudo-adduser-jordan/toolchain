import "./app.css";
import react from "./assets/react.png";
import typescript from "./assets/typescript.png";
import esbuild from "./assets/esbuild.png";
import eslint from "./assets/eslint.png";
import prettier from "./assets/prettier.png";

export default function App() {
  return (
    <>
      <main className="container">
        <div className="title">Toolchain</div>
        <section className="image-container">
          <img src={react} alt="" style={{ width: "5rem", height: "5rem" }} />
          <img src={typescript} alt="" style={{ width: "5rem", height: "5rem" }} />
          <img src={esbuild} alt="" style={{ width: "5rem", height: "5rem" }} />
          <img src={eslint} alt="" style={{ width: "5rem", height: "5rem" }} />
          <img src={prettier} alt="" style={{ width: "5rem", height: "5rem" }} />
        </section>
      </main>
    </>
  );
}
