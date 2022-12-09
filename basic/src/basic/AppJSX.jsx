import "./App.css";

function AppJSX() {
    const name = "siyeon";
    const list = ["apple", "banana", "milk", "cookie"];

    return (
        <>
            <h1 className="orange">{`hello! ${name}`}</h1>
            <h2>{name}</h2>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <img
                // javascriptコードをObjectとして扱っているので、{}が2つである
                style={{ width: "200px", height: "200px" }}
                src="https://images.unsplash.com/photo-1670348283436-ca7f570483c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="road"
            />
        </>
    );
}

export default AppJSX;
