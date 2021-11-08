const rootElement = document.getElementById('root');

const Text = ({ text }) => {
  if (text.charAt(0) === text.charAt(0).toUpperCase()) {
    return <h1>{text}</h1>
  } else {
    return <h3>{text}</h3>
  }
};

const Unicorn = ({ text }) => {
  if (text === 'unicorn') {
    console.log(text.charAt(0))
    return <h1>🦄</h1>
  } else {
    console.log(text.charAt(0))
    return <h3>{text}</h3>
  }
}

const Texts = (
  <>
    <Unicorn text="unicorn" />
    <Unicorn text="strawberry" />
  </>
);

function Number({ number, selected }) {
  return selected ? <h1>{number}</h1> : <h3>{number}</h3>;
}

const element = (
  <>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
      <Number number={number} selected={number % 2 === 0} key={number} />
    ))}
  </>
);

ReactDOM.render(element, rootElement);