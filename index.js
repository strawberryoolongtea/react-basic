const rootElement = document.getElementById('root');

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
)

const element = (
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