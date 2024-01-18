import React from 'react';

const DraggableImage = ({ src, type }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', src);
    e.dataTransfer.setData('type', type);
  };

  return <img src={src} alt="draggable" draggable onDragStart={handleDragStart} className="sideContainerIcon" />;
};

export default DraggableImage;
