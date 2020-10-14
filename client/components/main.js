import React from 'react'
import { Link } from "react-router-dom"

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Main </div>
          <Link to="/dashboard/profile/7e6c249a-9f98-4872-a8aa-a158a2515083"> Go To Profile</Link>
          <div><Link to="/dashboard"> Go To Root</Link></div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main