import React from 'react'

const Signup = () => {
    return (
        <>

            <div id="FormContainer">
                <div className="ImgContainer">
                </div>
                <form id="Form">
                    <h1 id="FormHeading">Sign Up</h1>
                    <div className="Name">
                        <li><label>Name</label>
                            <input type="text" placeholder="Name" />
                        </li>
                    </div>
                    <li>
                        <label>Email:</label>
                        <input type="email" placeholder="Email" />
                    </li>
                    <div className="Phone">
                        {/* <li><label>Country:</label>
                            <select>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>Japan</option>
                                <option>China</option>
                                <option>Shrilanka</option>
                                <option>Australia</option>
                                <option>USA</option>
                            </select>
                        </li> */}
                        <li>
                            <label>Phone No:</label><input type="pattern" placeholder="Phone Number" />
                        </li>
                    </div>
                    <div className="password">
                        {/* <li><label>Password:</label> <input type="password" /></li>
                        <li><label>Confirm Password:</label> <input type="password" /></li> */}
                        <li><label>Description</label><input type="Description"/></li>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>


        </>
    )
}

export default Signup