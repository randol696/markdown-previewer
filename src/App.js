import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      widthEditor: '45',
      widthPreviewer: '45'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event){
    this.setState({
      input: event.target.value
    })
  }

  handleSaveToFile = () => {
    const { input } = this.state;
    const blob = new Blob([input], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'file.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  editormax=() => {
    this.setState({
      widthEditor: '90'
    })
    this.setState({
      widthPreviewer: '10'
    })
  };

  editormin=() => {
    this.setState({
      widthEditor: '50'
    })
    this.setState({
      widthPreviewer: '40'
    })
  };

  newFile=() => {
    this.setState({
      input: ''
    })
  };
  render(){
  return (
    <div>
      <div className='main-container'>
        <div className='control-button'>
          <button id='button-full-width' onClick={this.newFile}>New File</button>
          <button id='button-full-width' onClick={this.handleSaveToFile}>Save to file</button>
          <button id='nav-button' onClick={this.editormin}>{'<<'}</button>
          <button id='nav-button' onClick={this.editormax}>{'>>'}</button>
        </div>
    
      <div className='editor-container' style={{width: this.state.widthEditor+"%" }}>
        <div className='editor-bar'><spam>Editor</spam></div>
        <textarea id="editor" value={this.state.input} onChange={this.handleChange} cols="30" rows="10" wrap="off"></textarea>
      </div>
     <div className='render-container' style={{width: this.state.widthPreviewer+"%" }}>
      <div className='editor-bar'><spam>Preview</spam></div>
        <div id="preview" dangerouslySetInnerHTML={{__html:this.state.input}}></div></div>
      </div>
    </div>
    );
  }
}
export default App;
