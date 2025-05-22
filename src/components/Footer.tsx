import { Component } from "react";

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='w-full h-[15%] bg-black bottom-0 content-center fixed text-gray-300'>
                <div className="flex flex-row space-x-10 justify-center">
                    <div className="flex flex-col right-0">
                        <p>Pages</p>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/contacts'>Contacts</a></li>
                    </div>
                    <div className="flex flex-col">
                        <p>Info</p>
                        <li>Something</li>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;