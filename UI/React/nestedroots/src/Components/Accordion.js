import { useState } from "react";

export default function Accordion({ sections }) {
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);

        return (
          <div className="accordion-item" key={value}>
            <button
              id={value}
              className="accordion-item-title"
              type="button"
              aria-expanded={isExpanded}
              aria-controls={`panel-${value}`}
              onClick={() => {
                const newOpenSections = new Set(openSections);
                newOpenSections.has(value)
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value);
                setOpenSections(newOpenSections);
              }}
            >
              {title}
              <span
                aria-hidden={true}
                className={[
                  "accordion-icon",
                  isExpanded && "accordion-icon--rotated",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
            <div
              id={`panel-${value}`}
              className="accordion-item-contents"
              role="region"
              aria-labelledby={value}
              hidden={!isExpanded}
            >
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}
