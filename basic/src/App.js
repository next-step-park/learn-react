import './App.css';

function App() {
  const name = 'siyeon';

  return (
    <>
      <h1 className='orange'>hello</h1>
      <h2>{name}</h2>
      <ul>
        <li>林檎</li>
        <li>バナナ</li>
        <li>牛乳</li>
      </ul>
      <img
        // javascriptコードをObjectとして扱っているので、{}が2つである
        style={{width: '200px', height: '200px'}} 
        src='https://images.unsplash.com/photo-1670348283436-ca7f570483c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='road' />
    </>
  );
}

export default App;
