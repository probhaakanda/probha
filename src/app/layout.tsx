'use client'
import { CSSProperties, useEffect, useState } from "react";
import { color } from "./data";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { MenuBar } from "./components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  var [device,setDevice] = useState('noIntegration')

useEffect(()=>{

  const getDevice = () => {
    var width = window.innerWidth

    if (768 <= width && width <= 1440){
      return 'desktop'
    }else{
      return 'noIntegration'
    }
  }

  setDevice(getDevice())

  window.addEventListener('resize',() => {
    setDevice(getDevice)
  })


},[])

var bodyCSSI : CSSProperties = {
  height:'100vh',
  width:'100vw',
  margin:'0px',
  padding:'0px',
  background:color('grey-.1'),
  // color:color('grey-1'),
  color:color('black-.6'),
  display:'flex',
  flexDirection:'column',
}

var pageCSSI : CSSProperties = {
  flexGrow:'1',
}

var [bodyStyle, setBodyStyle] = useState(bodyCSSI)
var [pageStyle, setPageStyle] = useState(pageCSSI)
  return (
    <html lang="en">
      <title>Probha | Get Inspired</title>
      <body style={bodyStyle}>
        <MenuBar Floating="off"/>
        <div className="page" style={pageStyle}>{children}</div>
        {/* {device == 'desktop' && (children || <Skeleton height={'100%'} width={'100%'} />)} */}
      </body>
    </html>
  );
}

