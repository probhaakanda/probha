'use client'
import React, { CSSProperties, useState } from "react";


export default function Layout({children,params}:{children: React.ReactNode,params:{slug:string}}){

    const containerCSSI : CSSProperties = {
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
    var [containerStyle, setContainerStyle] = useState(containerCSSI)

    return(
        <div className={`container`} style={containerStyle}>
            {children}
        </div>
    )
}