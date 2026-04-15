import React, { useState } from "react";
import "./style.css";
// Vanilla JS task: Build an n x m grid. When a user clicks a cell, highlight the entire row and column in red

const GridHighLight = () => {
  const [gridDimension, setGridDimension] = useState({
    row: null,
    column: null,
  });

  const [genrate, setGenrate] = useState([]);
  const [highlight, setHighlight] = useState({ row: null, col: null });

  const handleGrid = () => {
    const newGrid = Array.from({ length: gridDimension.row }, () =>
      Array.from({ length: gridDimension.column }, () => 0)
    );
    setGenrate(newGrid);
    setHighlight({ row: null, col: null });
  };

  const handleCellClick = (rowIndex, colIndex) => {
    setHighlight({ row: rowIndex, col: colIndex });
  };

  return (
    <>
      <div>
        Row{" "}
        <input
          type="number"
          value={gridDimension.row}
          onChange={(e) =>
            setGridDimension((prev) => ({
              ...prev,
              row: Number(e.target.value),
            }))
          }
        />
        Column{" "}
        <input
          type="number"
          value={gridDimension.column}
          onChange={(e) =>
            setGridDimension((prev) => ({
              ...prev,
              column: Number(e.target.value),
            }))
          }
        />
        <button onClick={handleGrid} style={{ marginLeft: "1rem" }}>
          Genrate
        </button>
      </div>
      <div className="grid-container">
        {genrate.map((row, rowIndex) => (
          <div className="grid-row" key={rowIndex}>
            {row.map((_, colIndex) => (
              <div
                key={colIndex}
                className={`grid-cell ${
                  rowIndex === highlight.row || colIndex === highlight.col
                    ? "highlight"
                    : ""
                }`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {(rowIndex, colIndex)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GridHighLight;
