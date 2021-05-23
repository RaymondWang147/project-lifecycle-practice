import React from 'react';
import ReactDOM from 'react-dom';
import BasicTable from './components/basic-table/basic-table';
import VideoContainer from './components/video/video';
import Button from './components/button/button';
import ButtonWrapper from './components/button-wrapper/button-wrapper';

require('./index.scss');

export const sum = (a: number, b: number) => {
  return a + b;
};

class App extends React.Component {
  render() {
    return (
      <div>
        123
        {/* <VideoContainer />; */}
        <ButtonWrapper>
          <Button variant="secondary">click me</Button>
        </ButtonWrapper>
        {/* <BasicTable /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
