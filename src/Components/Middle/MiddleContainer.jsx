import React, { useEffect, useState } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';

export default function MiddleContainer({setObjectType}) {
  const { editor, onReady } = useFabricJSEditor();
  const [canvasIm, setCanvas] = useState();
  const [selectedObject, setSelectedObject] = useState(null);
 

  const [activeObj, setActiveObj] = useState(false);

  const jsonData = {
    "version": "5.3.0",
    "objects": [
        {
            "type": "image",
            "version": "5.3.0",
            "originX": "left",
            "originY": "top",
            "left": 210.34,
            "top": 98,
            "width": 100,
            "height": 100,
            "fill": "rgb(0,0,0)",
            "stroke": "Server",
            "strokeWidth": 0,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeDashOffset": 0,
            "strokeLineJoin": "miter",
            "strokeUniform": false,
            "strokeMiterLimit": 4,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "fill",
            "globalCompositeOperation": "source-over",
            "skewX": 0,
            "skewY": 0,
            "cropX": 0,
            "cropY": 0,
            "src": "http://localhost:5173/src/Components/Left/assets/img/server.png",
            "crossOrigin": null,
            "filters": []
        },
        {
            "type": "image",
            "version": "5.3.0",
            "originX": "left",
            "originY": "top",
            "left": 108.34,
            "top": 54,
            "width": 100,
            "height": 85,
            "fill": "rgb(0,0,0)",
            "stroke": "Workstation",
            "strokeWidth": 0,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeDashOffset": 0,
            "strokeLineJoin": "miter",
            "strokeUniform": false,
            "strokeMiterLimit": 4,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "fill",
            "globalCompositeOperation": "source-over",
            "skewX": 0,
            "skewY": 0,
            "cropX": 0,
            "cropY": 0,
            "src": "http://localhost:5173/src/Components/Left/assets/img/workstation.png",
            "crossOrigin": null,
            "filters": []
        },
        {
            "type": "image",
            "version": "5.3.0",
            "originX": "left",
            "originY": "top",
            "left": 112.34,
            "top": 182,
            "width": 100,
            "height": 100,
            "fill": "rgb(0,0,0)",
            "stroke": "Server",
            "strokeWidth": 0,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeDashOffset": 0,
            "strokeLineJoin": "miter",
            "strokeUniform": false,
            "strokeMiterLimit": 4,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "fill",
            "globalCompositeOperation": "source-over",
            "skewX": 0,
            "skewY": 0,
            "cropX": 0,
            "cropY": 0,
            "src": "http://localhost:5173/src/Components/Left/assets/img/server.png",
            "crossOrigin": null,
            "filters": []
        },
        {
            "type": "image",
            "version": "5.3.0",
            "originX": "left",
            "originY": "top",
            "left": 328.34,
            "top": 79,
            "width": 100,
            "height": 100,
            "fill": "rgb(0,0,0)",
            "stroke": "Network",
            "strokeWidth": 0,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeDashOffset": 0,
            "strokeLineJoin": "miter",
            "strokeUniform": false,
            "strokeMiterLimit": 4,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "fill",
            "globalCompositeOperation": "source-over",
            "skewX": 0,
            "skewY": 0,
            "cropX": 0,
            "cropY": 0,
            "src": "http://localhost:5173/src/Components/Left/assets/img/network.png",
            "crossOrigin": null,
            "filters": []
        },
        {
            "type": "image",
            "version": "5.3.0",
            "originX": "left",
            "originY": "top",
            "left": 274.34,
            "top": 248,
            "width": 100,
            "height": 85,
            "fill": "rgb(0,0,0)",
            "stroke": "Workstation",
            "strokeWidth": 0,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeDashOffset": 0,
            "strokeLineJoin": "miter",
            "strokeUniform": false,
            "strokeMiterLimit": 4,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "fill",
            "globalCompositeOperation": "source-over",
            "skewX": 0,
            "skewY": 0,
            "cropX": 0,
            "cropY": 0,
            "src": "http://localhost:5173/src/Components/Left/assets/img/workstation.png",
            "crossOrigin": null,
            "filters": []
        },
        {
            "type": "image",
            "version": "5.3.0",
            "originX": "left",
            "originY": "top",
            "left": 172.34,
            "top": 363,
            "width": 100,
            "height": 85,
            "fill": "rgb(0,0,0)",
            "stroke": "Workstation",
            "strokeWidth": 0,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeDashOffset": 0,
            "strokeLineJoin": "miter",
            "strokeUniform": false,
            "strokeMiterLimit": 4,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "fill",
            "globalCompositeOperation": "source-over",
            "skewX": 0,
            "skewY": 0,
            "cropX": 0,
            "cropY": 0,
            "src": "http://localhost:5173/src/Components/Left/assets/img/workstation.png",
            "crossOrigin": null,
            "filters": []
        },
        {
            "type": "image",
            "version": "5.3.0",
            "originX": "left",
            "originY": "top",
            "left": 373.34,
            "top": 199,
            "width": 100,
            "height": 100,
            "fill": "rgb(0,0,0)",
            "stroke": "Server",
            "strokeWidth": 0,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeDashOffset": 0,
            "strokeLineJoin": "miter",
            "strokeUniform": false,
            "strokeMiterLimit": 4,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "paintFirst": "fill",
            "globalCompositeOperation": "source-over",
            "skewX": 0,
            "skewY": 0,
            "cropX": 0,
            "cropY": 0,
            "src": "http://localhost:5173/src/Components/Left/assets/img/server.png",
            "crossOrigin": null,
            "filters": []
        }
    ],
    "backgroundImage": {
        "type": "image",
        "version": "5.3.0",
        "originX": "left",
        "originY": "top",
        "left": 0,
        "top": 0,
        "width": 826,
        "height": 472,
        "fill": "rgb(0,0,0)",
        "stroke": null,
        "strokeWidth": 0,
        "strokeDashArray": null,
        "strokeLineCap": "butt",
        "strokeDashOffset": 0,
        "strokeLineJoin": "miter",
        "strokeUniform": false,
        "strokeMiterLimit": 4,
        "scaleX": 1.2,
        "scaleY": 1.5,
        "angle": 0,
        "flipX": false,
        "flipY": false,
        "opacity": 1,
        "shadow": null,
        "visible": true,
        "backgroundColor": "",
        "fillRule": "nonzero",
        "paintFirst": "fill",
        "globalCompositeOperation": "source-over",
        "skewX": 0,
        "skewY": 0,
        "cropX": 0,
        "cropY": 0,
        "src": "https://img.freepik.com/free-vector/abstract-horizontal-grid-lines-graph-style-graphic-design_1017-39918.jpg?size=626&ext=jpg&ga=GA1.1.13355597.1699520156&semt=ais",
        "crossOrigin": null,
        "filters": []
    }
}
  const loadCanvas = (editor) => {
    setCanvas(editor);
  };

  useEffect(() => {
    if (canvasIm) {
      
      // const gridSize = 20;
      // const gridColor = '#ddd';

     
      // for (let i = gridSize; i < canvasIm.width; i += gridSize) {
      //   const line = new fabric.Line([i, 0, i, canvasIm.height], {
      //     stroke: gridColor,
      //     selectable: false,
      //     evented: false,
      //   });
      //   canvasIm.add(line);
      // }

     
      // for (let i = gridSize; i < canvasIm.height; i += gridSize) {
      //   const line = new fabric.Line([0, i, canvasIm.width, i], {
      //     stroke: gridColor,
      //     selectable: false,
      //     evented: false,
      //   });

      //   canvasIm.add(line);
      // }

      const backgroundImageUrl = 'https://img.freepik.com/free-vector/abstract-horizontal-grid-lines-graph-style-graphic-design_1017-39918.jpg?size=626&ext=jpg&ga=GA1.1.13355597.1699520156&semt=ais'; 
    fabric.Image.fromURL(backgroundImageUrl, (img) => {
      const scaleFactor = Math.min(
        canvasIm.width / img.width,
        canvasIm.height / img.height
      );

      img.scale(scaleFactor);
      canvasIm.setBackgroundImage(img, canvasIm.renderAll.bind(canvasIm), {
        scaleX: 1.2,
        scaleY: 1.5,
      });
    });

      
      canvasIm.loadFromJSON(jsonData, () => {
      
        canvasIm.renderAll();
      
       
        canvasIm.getObjects().forEach(obj => {
          obj.set({
            selectable: true,
            hasControls: false,
            hasBorders: true,
           
          });
        });
      
        canvasIm.renderAll();
      });
      
      // Event listener for object selection
      canvasIm.on({
        'selection:updated': handleObjectSelected,
        'selection:created': handleObjectSelected
      });

      canvasIm.selection = false;

      // Event listener for canvas click
      canvasIm.on("mouse:down",function(){
 
     

        if(canvasIm.getActiveObject() !==undefined && canvasIm.getActiveObject() !==null){
      
          setActiveObj(true);
        
        }
  
        else {
          
          setActiveObj(false);
        }
      
      });

      // Event listener for drop
      canvasIm.on('drop', handleDrop);

   
    
        return () => {
         
          canvasIm.off('object:selected', handleObjectSelected);
        canvasIm.off('mouse:down', handleCanvasClick);
        canvasIm.off('drop', handleDrop);
      };
    }


  
  }, [canvasIm]);








  const handleObjectSelected = (event) => {

    const selected = event.selected;
    const selectedObject = selected[0];
  setObjectType(selected[0].stroke);
  selectedObject.set({
    
    borderColor: 'blue', 
    cornerColor: 'blue', 
    cornerSize: 10,
     
    padding: 10, 
  });
//    setSelectedObject(selected);

  };

  const handleCanvasClick = () => {
    
  
  };
  const deleteActiveObject = () =>{ 

    if(canvasIm)
    {
      setActiveObj(false)
    if(canvasIm.getActiveObject() !==undefined && canvasIm.getActiveObject() !==null){
      const activeObject = canvasIm.getActiveObject()
      canvasIm.remove(activeObject)
      canvasIm.renderAll();
    }
  
  }
  }
  const handleDrop = (options) => {

    const { e } = options;
    const imageUrl = e.dataTransfer.getData('text/plain');
    const type = e.dataTransfer.getData('type');
  
  
  
    setObjectType(type);
  
    fabric.Image.fromURL(imageUrl, (img) => {
    
      img.set({
        left: e.clientX - canvasIm._offset.left,
        top: e.clientY - canvasIm._offset.top,
        scaleX: 0.5,
        scaleY: 0.5,
        selectable: true,
        hasControls: false,
        hasBorders: true,
        stroke: type

       
      });
     
      
      canvasIm.add(img);
    });
  };
  
const downloadJson = ()=>{
  if (canvasIm) {
    const jsonData = canvasIm.toJSON();
    console.log(jsonData);
    
  }
}
  return (
    <>
     <button onClick={downloadJson}>Download JSON</button>
      <div style={{ border: '2px solid #ccc', height: '90vh', width: '100%' }}>
        {/* <button onClick={deleteActiveObject}>Click</button> */}
       
      <FabricJSCanvas
        className="sample-canvas"
        onReady={loadCanvas}
        options={{ width: '100%', height: '100%' }}
      />


    </div>
     </>
   
  );
}
