'use client'
import React, { CSSProperties, useState } from "react";


export default function Page() {
    
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
            Under development '_'
        </div>
    )
}