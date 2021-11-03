# React Basic

## DOM 다루기 / Element 생성하기

## 멀티 Element 생성하기


## Element 찍어내기

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