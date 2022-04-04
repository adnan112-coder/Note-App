import React from "react"

const dateNow = new Date()
const year = dateNow.getFullYear()

function Footer(){
    return <p>
    Created By Adnan On {year}
    </p>
}

export default Footer