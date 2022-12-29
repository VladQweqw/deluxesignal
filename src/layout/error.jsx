import React from 'react'

import '../styles/error.css'

import {Link} from 'react-router-dom'

export default function Error() {

    return(
        <section className="error">
            <h1 id="errorTitle">Are you lost ?</h1>
            <div className="error-">
                <h1>404</h1>
            </div>
            <Link className="errorBtn" to={'/'}>Go back</Link>
        </section>
    )
}