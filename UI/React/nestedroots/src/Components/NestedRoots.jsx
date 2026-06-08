import React, { useState } from "react";

const NestedRoots = () => {
  const [folder, setFolder] = useState({
    public: {
      files: [{ name: "index.html", size: "1KB", type: "html" }],
      folders: {
        assets: {
          files: [{ name: "logo.png", size: "25KB", type: "image" }],
          folders: {}
        }
      }
    },
    src: {
      files: [
        { name: "App.js", size: "3KB", type: "js" },
        { name: "utils.js", size: "1KB", type: "js" }
      ],
      folders: {}
    }
  });

  const [expandedFolders, setExpandedFolders] = useState({});
  const [openFolderFile, setOpenFolderFile] = useState("");
  const [option, setOption] = useState("");
  const [newFileName, setNewFileName] = useState("");

  const handleExpand = (path) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const handleFolderFile = (path) => {
    setOpenFolderFile(path);
  };

  const updateFolderStructure = (structure, pathArr, option, fileName) => {
    if (pathArr.length === 0) return structure;
    const [current, ...rest] = pathArr;

    if (rest.length === 0) {
      const currentNode = structure[current];
      if (option === "File") {
        return {
          ...structure,
          [current]: {
            ...currentNode,
            files: [
              ...(currentNode.files || []),
              { name: fileName || "newFile.js", size: "1KB", type: "js" }
            ]
          }
        };
      } else {
        return {
          ...structure,
          [current]: {
            ...currentNode,
            folders: {
              ...currentNode.folders,
              [fileName || "newFolder"]: { files: [], folders: {} }
            }
          }
        };
      }
    }

    //main logic 
    return {
      ...structure,
      [current]: {
        ...structure[current],
        folders: updateFolderStructure(
          structure[current].folders,
          rest,
          option,
          fileName
        )
      }
    };
  };

  const handleAdd = (currentPath) => {
    if (!option || !newFileName) return;
    const pathArr = currentPath.split("/");
    const updated = updateFolderStructure(folder, pathArr, option, newFileName);
    setFolder(updated);
    setOption("");
    setNewFileName("");
    setOpenFolderFile("");
  };

  const renderTree = (node, parentPath = "") => {
    return Object.entries(node).map(([key, value]) => {
      const currentPath = parentPath ? `${parentPath}/${key}` : key;
      const isExpanded = expandedFolders[currentPath];

      return (
        <React.Fragment key={currentPath}>
          <tr>
            <td>
              <button onClick={() => handleExpand(currentPath)}>
                {key} {isExpanded ? "-" : "+"}
              </button>
              <button onClick={() => handleFolderFile(currentPath)}>
                Add folder/file
              </button>
            </td>
          </tr>

          {isExpanded && (
            <>
              {/* Render Files */}
              {value.files &&
                value.files.map((file, idx) => (
                  <tr key={`${currentPath}/file/${idx}`}>
                    <td style={{ paddingLeft: "20px" }}>
                      📄 {file.name} ({file.size}, {file.type})
                    </td>
                  </tr>
                ))}

              {/* Render Folders */}
              {value.folders && renderTree(value.folders, currentPath)}
            </>
          )}

          {openFolderFile === currentPath && (
            <tr>
              <td>
                <select
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Folder">Folder</option>
                  <option value="File">File</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                />
                <button onClick={() => handleAdd(currentPath)}>Add</button>
              </td>
            </tr>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <h3>File Explorer with Metadata</h3>
      <table>
        <tbody>{renderTree(folder)}</tbody>
      </table>
    </div>
  );
};

export default NestedRoots;
