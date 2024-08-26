// app/layout.tsx or app/_app.tsx (depending on your Next.js setup)
'use client'
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import type { ReactNode } from 'react';
import {motion} from 'framer-motion'
const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <motion.body
      initial={{opacity:0}}
      animate={{opacity:1}}
      style={{
        // border:'1px solid rgba(125,125,125,1)',
        height:'100vh',
        width:'100vw',
        boxSizing:'border-box',
        borderRadius:'.25rem',
        margin:'0px',
        background:'rgba(240,240,240,1)'
      }}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </motion.body>
    </html>
  );
};

export default RootLayout;
