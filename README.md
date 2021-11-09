# React Basic

## DOM 다루기 / Element 생성하기

> 자바스크립트로 DOM 생성하기

```jsx
// Root Element 선택
const rootElement = document.getElementById('root');

// <h1> Element 생성
const element = document.createElement('h1');

// <h1> Element의 textContent로 'Hello World'라는 문자열 추가
element.textContent = 'Hello World';

// Root Element에 새로 생성한 <h1> Element를 자식으로 추가
rootElement.appendChild(element);
```

> 리액트로 Element 생성하기

```React.createElement()``` 와 ```ReactDOM.render()``` 를 이용해서 Element를 생성할 수 있다.

> React, ReactDOM CDN

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

```jsx
// Select Root Element
const rootElement = document.getElementById('root');

// Create <h1> Element by React.createElement()
// Append 'Hello World' by children
const element = React.createElement('h1', { children: 'Hello World' });
// Equal
// const element = React.createElement('h1', null, 'Hello World');


// Append <h1> Element to Root Element by ReactDOM.render()
ReactDOM.render(element, rootElement);
```

> React.createElement()

```
React.createElement(type, [props], [...children]);
```

Example

```jsx
// 3번째 인자인 children을 우선한다
React.createElement(
  'h1',
  {
    className: 'title',
    children: 'Strawberries'
  },
  'Cranberries'
);
```
```jsx
React.createElement(
  'h1',
  {
    className: 'title',
    children: ['Strawberry', ' Oolong', ' Tea']
  }
);
```
```jsx
React.createElement(
  'h1',
  { className: 'title' },
  ['Strawberry', ' Oolong', ' Tea']
);
```

> ReactDOM.render()

```
ReactDOM.render(element, container[, callback]);
```

## JSX 다루기

> JSX로 Element 생성하기

컴파일러(babel)가 JSX 표현을 자바스크립트 형식으로 컴파일 해준다.

script type을 ```text/babel``` 로 설정한다.

> babel CDN

```html
<script src="https://unpkg.com/@babel/standalone@7.16.2/babel.min.js"></script>

<script type="text/babel">
  // your code here
</script>
```

JSX를 사용하면 React.createElement() 보다 쉽고 명시적으로 Element를 생성할 수 있다.

```jsx
const element = <h1 className="title">Hello World</h1>
// Equal
// const element = <h1 className="title" children="Hello World" />
```

자바스크립트를 사용할 수 있기 때문에 변수도 활용할 수 있다.

```jsx
const text = 'Cranberries';
const title = 'Strawberries';
const element = <h1 className={title}>{text}</h1>;

// 아래와 같이 표현될 수 있다.
// const element = <h1 className={title} children={text} />;

// 아래와 같은 Element가 생성된다.
// <h1 class="Strawberries">Cranberries</h1>
```

spread 연산자를 사용해 다음과 같이 표현할 수 있다.

```jsx
const props = { className: 'Strawberries', children: 'Cranberries' };
const element = <h1 {...props} />

// 아래와 같이 표현될 수 있다.
// const element = <h1 className={props.className} children={props.children} />
```

## 멀티 Element 생성하기

> HTML에서 여러 Element를 생성하는 방식

```html
<div id="root">
  <h1>Heading 1</h1>
  <h3>Heading 2</h3>
  <h5>Children</h5>
</div>
```

> React.createElement()를 사용하는 방식

```jsx
const rootElement = document.getElementById('root');

const element = (
  <div
    className="box"
    children={[
      React.createElement('h1', null, 'Heading 1'),
      React.createElement('h3', null, 'Heading 2'),
      React.createElement('h5', null, 'Children'),
    ]}
  />
  // 리액트에서는 하나의 Element만 리턴해야되기 때문에
  // rootElement에 바로 <h1>, <h3>, <h5> Element를 넣을 수 없고
  // 이를 <div> Element로 감싸야 한다.
  // 감싸는 역할을 하는 <div> 없이 리턴하고 싶은 경우
  // React.Fragment를 사용할 수 있다.

  // const element = (
  //   <React.Fragment
  //     className="box"
  //     children={[
  //       React.createElement('h1', null, 'Heading 1'),
  //       React.createElement('h3', null, 'Heading 2'),
  //       React.createElement('h5', null, 'Children'),
  //     ]}
  //   />
  // );
);

ReactDOM.render(element, rootElement);
```

> React.createElement()는 JSX로 표현될 수 있다.

```jsx
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
```
```jsx
const element = (
  <React.Fragment>
    <h1>Heading 1</h1>
    <h3>Heading 2</h3>
    <h5>Children</h5>
  </React.Fragment>
);
```
```jsx
const element = (
  <>
    <h1>Heading 1</h1>
    <h3>Heading 2</h3>
    <h5>Children</h5>
  </>
)
```

## Element 찍어내기 (Custom Element)

> Root Element

```jsx
const rootElement = document.getElementById('root');
```
> Render 함수 실행

```jsx
// rootElement에 element를 render한다.
ReactDOM.render(element, rootElement);
```

> ```Function``` = 재사용 가능한 Element

함수를 이용해서 재사용 가능한 element를 생성할 수 있다

```jsx
const print = (title, description) => (
  <React.Fragment>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </React.Fragment>
);

const element = (
  <> {/* <React.Fragment>는 다음과 같이 쓰일 수도 있다. */}
    {print('Title 1', 'Description is ... one')}
    {print('Title 2', 'Description is ... two')}
    {print('Title 3', 'Description is ... three')}
  </>
);
```

> ```Custom Component``` = Upper Case

```UpperCase``` 와 ```JSX``` 를 사용한 함수를 통해 Custom Element를 생성할 수 있다.

```jsx
const Print = ({ title, description }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </React.Fragment>
);

const element = (
  <>
    <print title="Title 1" description="Description is ... one" />
    <print title="Title 2" description="Description is ... two" />
    <print title="Title 3" description="Description is ... three" />
  </>
);
```

> ```Children``` 제한 = 없음

```children``` 을 이용해서 제약 없는 찍어내기가 가능하다

```jsx
const Print = ({ title, description, children }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <h3>{description}</h3>
    {children}
  </React.Fragment>
);

const element = (
  <>
    <Print title="Title 1" description="Description is ... one">
      {/* children */}
      <div>
        <h1>Heading 1</h1>
        <p>Paragraph ...</p>
      </div>
    </Print>
    <Print title="Title 2" description="Description is ... two" />
    <Print title="Title 3" description="Description is ... three" />
  </>
);
```

## JS와 JSX 섞어쓰기 (interpolation)

JS와 JSX를 섞어서 다음과 같이 표현할 수 있다.

```jsx
const Print({ title, description, children }) => {
  <React.Fragment>
    <h1>{title}</h1>
    <ul className={description}>
      <li>
        {children}
      </li>
    </ul>
  </React.Fragment>
};

const element = (
  <>
    <Print title="This is title 1" description="title 1">
      {Print({title: 'This is title 2', description: 'title 2', children: 'Read me ...'})}
    </Print>
  </>
)
```

자바스크립트 문법인 조건문과 반복문을 사용할 수 있다.

```jsx
const Text = ({ text }) => {
  if (text.charAt(0) === text.charAt(0).toUpperCase()) {
    return <h1>{text}</h1>
  } else {
    return <h3>{text}</h3>
  }
};

const Texts = (
  <>
    <Text text="Text" />
    <Text text="text" />
  </>
);
```

```jsx
function Number({ number, selected }) {
  return selected ? <h1>{number}</h1> : <h3>{number}</h3>;
}

const element = (
  <>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
      <Number number={number} selected={number === 3} />
    ))}
  </>
);
```

## 리액트와 리렌더링

Element 타입이 바뀌면 이전 Element는 버리고 새로 그린다.

Element 타입이 같다면 key를 먼저 비교하고, props를 비교해서 변경 사항을 반영한다.

> 바닐라 JS 리렌더링

1초마다 버튼을 다시 그리는 함수 randomButton

```jsx
const rootElement = document.getElementById("root");

function randomButton() {
  const number = Math.floor(Math.random() * (10 - 1) + 1);
  const element = `
    <button>${number}</button>
  `;

  rootElement.innerHTML = element;
}

setInterval(randomButton, 1000);
```

숫자가 랜덤하게 변경될 때마다 Element를 다시 그린다.

rootElement인 ```<div>``` 요소까지 다시 그리며

리렌더링할 때마다 ```tab``` 포커스를 잃는다.

> 리액트 리렌더링

```jsx
const rootElement = document.getElementById("root");

function randomButton() {
  const number = Math.floor(Math.random() * (10 - 1) + 1);
  const element = <button>{number}</button>;

  ReactDOM.render(element, rootElement);
}

setInterval(randomButton, 1000);
```

숫자가 랜덤하게 변경될 때마다 변경된 부분만 다시 그린다.

rootElement인 ```<div>``` 요소는 리렌더링하지 않으며

리렌더링할 때 ```tab``` 포커스를 잃지 않는다.

[> codesandbox](https://codesandbox.io/s/react-basic-rerender-tprsn?file=/index.html)

## 이벤트 핸들러 써보기

> JS에서의 이벤트 핸들러

- ```onclick```, ```onmouseout```, ```onfocus```, ```onblur``` ...

- ```addEventListener```

> 리액트에서의 이벤트 핸들러

- ```camelCase``` 를 사용한다

- ```onClick```, ```onMouseOut```, ```onFocus```, ```onBlur``` ...

```jsx
const rootElement = document.getElementById("root");

const handleClick = () => alert("Pressed!");

const element = <button onClick={handleClick}>Please press</button>;

ReactDOM.render(element, rootElement);
```

[> codesandbox](https://codesandbox.io/s/react-basic-handleevent-qn1gt?file=/index.html)

> 간단한 검색창 만들어 보기

- ```<input>```, ```<button>``` 엘리먼트를 사용한다
- ```onChange```, ```onClick``` 이벤트를 사용한다

https://codesandbox.io/embed/mini-search-bar-jl8l1?fontsize=14&hidenavigation=1&theme=dark

[> codesandbox](https://codesandbox.io/s/mini-search-bar-jl8l1?file=/index.html)