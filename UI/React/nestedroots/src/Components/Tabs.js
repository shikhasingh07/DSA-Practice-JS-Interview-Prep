import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div role="tablist">
        <button
          id="tab-1"
          role="tab"
          aria-controls="panel-1"
          aria-selected={activeTab === 1 ? true : false}
          style={{ color: activeTab === 1 ? "blue" : "black" }}
          onClick={() => setActiveTab(1)}
        >
          HTML
        </button>
        <button
          id="tab-2"
          role="tab"
          aria-controls="panel-2"
          aria-selected={activeTab === 2 ? true : false}
          style={{ color: activeTab === 2 ? "blue" : "black" }}
          onClick={() => setActiveTab(2)}
        >
          CSS
        </button>
        <button
          id="tab-3"
          role="tab"
          aria-controls="panel-3"
          aria-selected={activeTab === 3 ? true : false}
          style={{ color: activeTab === 3 ? "blue" : "black" }}
          onClick={() => setActiveTab(3)}
        >
          JavaScript
        </button>
      </div>
      <div  role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
        {activeTab === 1 && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {activeTab === 2 && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {activeTab === 3 && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}
