import { Component } from "react";

class Header extends Component {
    render() {
        return(
            <div className="">
                <div className="flex-row space-x-[2%] bg-black text-orange-300 sticky">
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contacts'>Contact</a>
                <a href='/message'>Message</a>
                <a href='/login'>Login</a>
                <a href='/register'>Register</a>
                </div>
            </div>
        );
    }
}
 
export default Header;