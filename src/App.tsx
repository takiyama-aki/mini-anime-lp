import "./index.css";
import { PLANS, YT_SAMPLES } from "./data";
import { PlanCard } from "./components/PlanCard";

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>ミニアニメ制作事業</h1>
        <p>新人アニメーターの雇用と育成を目的としたプロジェクト</p>
        <p className="sub">
          「忘却バッテリー」の美術監督・船隠雄貴さんの背景美術で、
          あなただけのオリジナル・ミニアニメを制作します。
        </p>
      </header>

      <section>
        <h2>支援プラン</h2>
        <div className="grid">
          {PLANS.map((p) => (
            <PlanCard key={p.priceUsd} plan={p} />
          ))}
        </div>
      </section>

      <section>
        <h2>参考ミニアニメ</h2>
        <div className="videos">
          {YT_SAMPLES.map((src) => (
            <iframe
              key={src}
              src={src}
              title={src}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <small>© 2025 ミニアニメ制作事業</small>
      </footer>
    </div>
  );
}
