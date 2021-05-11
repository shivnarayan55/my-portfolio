
import React from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"
export default function NavBar() {
    return (
        <header className="bg-red-600" >
            <div className="container mx-auto flex justify-between">
                <nav className="flex" style={{marginLeft: "160px"}}>
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        SHIV
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6" style={{marginRight: "100px"}}>
                <SocialIcon url="https://www.linkedin.com/in/shivprakashnarayan/" className="mr-4"
                target="_blank" fgColor="#fff" style={{height: 35, width:35, marginTop:"2px"}}/>
                <SocialIcon url="https://github.com/shivnarayan55" className="mr-4"
                target="_blank" fgColor="#fff" style={{height: 35, width:35}} />
                <SocialIcon url="https://twitter.com/spnarayan26" className="mr-4"
                target="_blank" fgColor="#fff" style={{height: 35, width:35}} />

                </div>
            </div>
        </header>
    )
}