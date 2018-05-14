import React from 'react';
import './loaders.css';

function rect(props) {
  const {ctx, x, y, width, height} = props;
  ctx.fillRect(x, y, width, height);
}


class MagicLoader extends React.Component {
  componentDidMount() {
      this.updateCanvas();
  }
  componentDidUpdate() {
      this.updateCanvas();
  }
  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      ctx.clearRect(0,0, 300, 300);
      // draw children “components”
      rect({ctx, x: 10, y: 10, width: 50, height: 50});
      rect({ctx, x: 110, y: 110, width: 50, height: 50});
  }
  render() {
       return (
           <canvas ref="canvas" width={300} height={300}/>
       );
  }
}


export default MagicLoader;