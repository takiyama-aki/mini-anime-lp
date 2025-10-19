import type { FC } from "react";
import type { Plan } from "../data";

type Props = { plan: Plan };

export const PlanCard: FC<Props> = ({ plan }) => {
  return (
    <article className="plan">
      <header>
        <h3>${plan.priceUsd.toLocaleString()}</h3>
        <p className="muted">{plan.title}</p>
      </header>
      <ul className="steps">
        {plan.steps.map((s) => (
          <li key={s.no}>
            <span className="no">{s.no.toString().padStart(2, "0")}</span>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
      <footer>
        <p className="muted">{plan.cadence}</p>
        <p className="muted">想定期間：{plan.years}年</p>
        <button className="cta">相談してみる</button>
      </footer>
    </article>
  );
};
