const rootElement = document.getElementById('root');

const element = (
  <React.Fragment>
    <h1>Hi</h1>
    <h3>Bye</h3>
    <h5>Children</h5>
  </React.Fragment>
);

ReactDOM.render(element, rootElement);