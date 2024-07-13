'use client'
import React, { CSSProperties, useState } from "react";
import { CheckDreamName } from "./components";

export default function Page() {
    
    const containerCSSI : CSSProperties = {
        boxSizing:'border-box',
        height:'100%',
        width:'100%',
        padding:'0 11.52rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'monospace',
    }
    var [containerStyle, setContainerStyle] = useState(containerCSSI)

    return(
        <div className={`container`} style={containerStyle}>
            {/* Under development '_' */}
            <CheckDreamName />
        </div>
    )
}