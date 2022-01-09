import React, { useState } from "react"
import axios from "axios"; 


function frontToken(){
    const queryParam = new URLSearchParams(window.location.search)
    const frontToken = queryParam.get('token')
    localStorage.setItem('FrontToken', frontToken == null ? "error" : frontToken) 
    window.location.replace('https://pedantic-booth-c38e89.netlify.app/create-playlist')
    const route = 'https://mellow-dy.tinker.ovh/'
    axios({ method: 'post', url: route, headers: { Authorization: `Bearer ${window.localStorage.getItem('FrontToken')}` } })

    return(
        <div>There's nothing here 😳</div>
    )
}
export default frontToken  