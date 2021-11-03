const rootElement = document.getElementById('root');

const elementA = React.createElement(
  'h1',
  { className: 'title' },
  ['Strawberry', ' Oolong', ' Tea']
);

const text = 'Cranberries';
const title = 'Strawberries';
const spread = { className: title, children: text };

const elementB = <h1 className="title" children="Strawberries"></h1>
const elementC = <h1 {...spread} />
const elementD = (
  <div
    className="box"
    children={[
      React.createElement('h1', null, 'Heading 1'),
      React.createElement('h3', null, 'Heading 2'),
      React.createElement('h5', null, 'Children'),
    ]}
  />
);
const element = (
  <React.Fragment
    className="box"
    children={[
      <h1>Heading 1</h1>,
      <h3>Heading 2</h3>,
      <h5>Children</h5>,
    ]}
  />
);

const print = (title, description) => (
  <React.Fragment>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </React.Fragment>
);

const Print = ({ title, description, children }) => (
  <>
    <h1>{title}</h1>
    <h3>{description}</h3>
    {children}
  </>
);

const elementL = (
  <>
    <Print title="Title 1" description="Description is ... one">
      {/* children */}
      <div>
        <h1>Heading 1</h1>
        <p>Paragraph ...</p>
      </div>
    </Print>
    {print('Hello', 'World')}
    {print('Strawberry', 'Oolong Tea')}
    {print('Coffee', 'Shop')}
  </>
)

ReactDOM.render(element, rootElement);