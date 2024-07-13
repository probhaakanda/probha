'use client'
import React, { CSSProperties, useState } from "react";


export default function Page({params}:{params:{slug:string}}) {
    
    const containerCSSI : CSSProperties = {
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'monospace',
    }
    var [containerStyle, setContainerStyle] = useState(containerCSSI)

    return(
        <div className={`container`} style={containerStyle}>
            Page for the availablity check of the profile name {params.slug} <br />
            still <br />
            Under development '_'
        </div>
    )
}