import React from 'react';
import ReactDOM from 'react-dom';
import BasicTable from './components/basic-table/basic-table';
import VideoContainer from './components/video/video';

require('./index.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <VideoContainer />; */}
        <BasicTable />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
