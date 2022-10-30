import React from 'react'
import Header from '../header'

const NotFound = ({message}) => {
  return (
    <>
        <Header/>
        <section className="notfond">
            <div className="container">
                <div className="notfoundError">
                    <h1>404</h1>
                    <p>{(!message)?"Page not found":message}</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default NotFound