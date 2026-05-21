import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div>
        <button style={{color: activeTab === 1 ? 'blue' : 'black'}} onClick={() => setActiveTab(1)}>HTML</button>
        <button style={{color: activeTab === 2 ? 'blue' : 'black'}} onClick={() => setActiveTab(2)}>CSS</button>
        <button style={{color: activeTab === 3 ? 'blue' : 'black'}} onClick={() => setActiveTab(3)}>JavaScript</button>
      </div>
      <div>
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
