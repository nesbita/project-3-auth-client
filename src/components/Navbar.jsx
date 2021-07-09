import { Link } from 'react-router-dom'

export default function Navbar(props) {
    // console.log('the props of Navbar:', props)
    // if the user is logged in

    const loggedIn = (
        <>
        <Link to='/Profile'>
        {/* if the user is logged in they'll see this */}
        Profile
    </Link>

    <Link to='/'>
        <span onClick={props.handleLogout}>Logout</span>
        </Link>  
        </>
    )

    // if the user is logged out 
    const loggedOut = (
        <>
        <Link to='/Login'>
            Login 
    </Link>

        <Link to='/Register'>
            new account
        </Link>
        </>
    )

    return(
        <nav>
            <Link to='/'>
                Home
            </Link>

           {props.currentUser ? loggedIn : loggedOut}
        </nav>
    )
}