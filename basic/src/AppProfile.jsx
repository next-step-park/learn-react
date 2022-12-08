import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile'

function AppProfile() {
    const onClickHandler = (event) => {
        console.log(event);
        alert('button was clicked!!');
    };

    return (
        <>
            <button onClick={onClickHandler}>button</button>
            <Avatar isNew={true} image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'/>
            {/* propsの値としてtrueを返したい場合、JSXを利用すれば良い */}
            <Profile image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' name='SIYEON PARK' title='Frontend Developer'/>
            <Profile isNew={true} image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' name='SEOYEON KIM' title='Manager'/>
            <Profile image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' name='JOONGKYU PARK' title='Backend Developer'/>
        </>
    );
}

export default AppProfile;
