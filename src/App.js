import React, { useState } from 'react';
import Folder from './components/Folder';
import useTraverseTree from './hooks/use-traverse-tree';
import './style.css';
import explorer from './data/data';

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId, isFolder) => {
    const finalTree = deleteNode(explorerData, folderId, isFolder);
    setExplorerData(finalTree);
  };

  
  return (
    <div className="App">
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        explorer={explorerData}
      />
    </div>
  );
}
