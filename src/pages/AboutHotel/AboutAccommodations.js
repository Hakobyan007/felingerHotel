import React from "react";
import { accommodations } from "../../lists/accommodations";

export default function AboutAccommodations() {
  return (
    <div className="about__accommodations__container">
      <h5>Accommodations</h5>
      <p>Welcome to the Felinger Hotel</p>
      <div className="about__accommodations__section">
        {accommodations.map((item, index) => {
          return (
            <div
              className="every__accommodations"
              key={item.id}
              style={{
                borderBottom:
                  index === accommodations.length - 1
                    ? "2px solid var(--attention)"
                    : "",
              }}
            >
              <h6>{item.accommodation}</h6>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
