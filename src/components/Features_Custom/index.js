import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const Feature = ({ image, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--lg">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export const Features = ({ data, index }) => {
  return (
    <section key={index} className={styles.features}>
      <div className="container">
        <div className="row">
          {data.items.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
