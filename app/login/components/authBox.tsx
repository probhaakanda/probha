"use client";
import { fontNoto } from "@/app/fonts";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ImageWithLoader from "./imageLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MaterialSymbol } from "material-symbols";
import "material-symbols";

const Probha: React.FC = () => {
  return (
    <Link href={"/"} style={{ textDecoration: "none" }}>
      <motion.div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            margin: "1rem 0rem",
            borderRadius: ".rem",
            background: "rgba(250,250,250,0)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0px 1px 3px rgba(220,220,220,0)",
          }}
        >
          <motion.img
            src="/peacock.png"
            height={32}
            width={32}
            style={{
              margin: "0rem .5rem",
            }}
          ></motion.img>
          <motion.h4
            style={{
              margin: "0rem .5rem 0rem 0",
              color: "rgba(122,122,122,1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: fontNoto.style.fontFamily,
              fontWeight: "bold",
            }}
          >
            Probha Foundation
          </motion.h4>
        </motion.div>
      </motion.div>
    </Link>
  );
};

const SocialNav: React.FC = () => {
  return (
    <motion.div
      style={{
        margin: ".5rem",
        display: "flex",
        flexDirection: "row",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        style={{
          margin: ".5rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5rem",
          border: "1px solid rgba(230,230,230,1)",
          background: "rgba(250,250,250,1)",
          borderRadius: ".2rem",
        }}
        whileHover={{
          // boxShadow:'0px 1px 3px rgba(240,240,240,1)',
          background: "rgba(240,240,240,1)",
        }}
        whileTap={{
          background: "rgba(255,255,255,0)",
        }}
        onClick={() => {
          signIn("google");
        }}
      >
        <ImageWithLoader
          alt="Google"
          src="/google.png"
          height={48}
          width={48}
          loader={<Skeleton height={48} width={48} />}
        />
      </motion.div>
      <motion.div
        style={{
          margin: ".5rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5rem",
          border: "1px solid rgba(230,230,230,1)",
          background: "rgba(250,250,250,1)",
          borderRadius: ".2rem",
        }}
        whileHover={{
          // boxShadow:'0px 1px 3px rgba(240,240,240,1)',
          background: "rgba(240,240,240,1)",
        }}
        whileTap={{
          background: "rgba(255,255,255,0)",
        }}
        onClick={() => {
          signIn("github");
        }}
      >
        <ImageWithLoader
          alt="Github"
          src="/github.png"
          height={48}
          width={48}
          loader={<Skeleton height={48} width={48} />}
        />
      </motion.div>
      {/* <motion.div
        style={{
          margin: ".5rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5rem",
          border: "1px solid rgba(230,230,230,1)",
          background: "rgba(250,250,250,1)",
          borderRadius: ".2rem",
        }}
        whileHover={{
          // boxShadow:'0px 1px 3px rgba(240,240,240,1)',
          background: "rgba(240,240,240,1)",
        }}
        whileTap={{
          background: "rgba(255,255,255,0)",
        }}
        onClick={() => {
          signIn("twitter");
        }}
      >
        <ImageWithLoader
          alt="Twitter"
          src="/twitter.jpg"
          height={48}
          width={48}
          loader={<Skeleton height={48} width={48} />}
        />
      </motion.div> */}
    </motion.div>
  );
};

const EmailNav: React.FC = () => {
  return (
    <motion.h5
      style={{
        height: "64px",
        margin: ".5rem",
        padding: ".25rem",
        fontFamily: fontNoto.style.fontFamily,
        display: "flex",
        alignItems: "center",
        color: "rgba(100,100,100,1)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Upcoming feature. Stay Tuned!
    </motion.h5>
  );
};

const PhoneNav: React.FC = () => {
  return (
    <motion.h5
      style={{
        height: "64px",
        margin: ".5rem",
        padding: ".25rem",
        fontFamily: fontNoto.style.fontFamily,
        display: "flex",
        alignItems: "center",
        color: "rgba(100,100,100,1)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Upcoming feature. Stay Tuned!
    </motion.h5>
  );
};

const AuthTypeButton: React.FC<{
  name: string;
  index: string;
  currentFocus: string;
  onClick?: any;
}> = ({ name, index, currentFocus, onClick }) => {
  const [isActive, isActiveTo] = useState(index == currentFocus);

  useEffect(() => {
    isActiveTo(index == currentFocus);
  }, [currentFocus]);

  return (
    <motion.h5
      onClick={onClick}
      style={{
        // height:'1.5rem',
        borderRadius: ".5rem",
        boxSizing: "border-box",
        padding: ".25rem .5rem",
        height: "2rem",
        margin: ".25rem",
        // fontSize: "14px",
        // fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: isActive ? "rgba(255,255,255,1)" : "rgba(240,240,240,0)",
        fontFamily: fontNoto.style.fontFamily,
        // border:'1px solid rgba(245,245,245,1)',
        boxShadow: isActive
          ? "1px 1px 3px rgba(200,200,200,1)"
          : "1px 1px 3px rgba(200,200,200,0)",
        cursor: "pointer",
      }}
      whileTap={{
        background: "rgba(245,245,245,0)",
        boxShadow: "1px 1px 3px rgba(240,240,240,0)",
      }}
      whileHover={{
        background: "rgba(255,255,255,1)",
        boxShadow: "1px 1px 3px rgba(200,200,200,1)",
      }}
    >
      {name}
    </motion.h5>
  );
};

const UnauthenticatedNav: React.FC = () => {
  const [authType, authTypeTo] = useState<"email" | "social" | "phone">(
    "social"
  );
  return (
    <motion.div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0rem 0rem",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "2rem",
          margin: ".5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // fontSize: "16px",
          // fontWeight: "bold",
          // border:'1px solid rgba(240,240,240,1)'
        }}
      >
        <motion.h4
          style={{
            fontFamily: fontNoto.style.fontFamily,
            color: "rgba(115,115,115,1)",
          }}
        >
          Authenticate
        </motion.h4>
        <motion.div
          className="material-symbols-outlined"
          style={{
            color: "rgba(100,100,100,1)",
            margin: ".5rem",
          }}
        >
          {"key" as MaterialSymbol}
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: ".5rem",
          padding: ".125rem .25rem",
          borderRadius: ".5rem",
          color: "rgba(125,125,125,1)",
          background: "rgba(240,240,240,1)",
          // border:'1px solid rgba(245,245,245,1)',
          boxShadow: "1px 1px 3px rgba(200,200,200,1) inset",
        }}
      >
        <AuthTypeButton
          name="Email"
          index="email"
          currentFocus={authType}
          onClick={() => {
            authTypeTo("email");
          }}
        />
        <AuthTypeButton
          name="Social"
          index="social"
          currentFocus={authType}
          onClick={() => {
            authTypeTo("social");
          }}
        />
        <AuthTypeButton
          name="Phone"
          index="phone"
          currentFocus={authType}
          onClick={() => {
            authTypeTo("phone");
          }}
        />
      </motion.div>
      <motion.div>
        {authType == "email" && <EmailNav />}
        {authType == "social" && <SocialNav />}
        {authType == "phone" && <PhoneNav />}
      </motion.div>
    </motion.div>
  );
};

const AuthenticatedNav: React.FC = () => {
  const { data: session } = useSession();
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <motion.h4
          style={{
            fontFamily: fontNoto.style.fontFamily,
            color: "rgba(110,110,110,1)",
            margin: ".5rem .5rem .25rem .5rem",
          }}
        >
          Authenticated
        </motion.h4>
        <motion.div
          className="material-symbols-outlined"
          style={{
            color: "rgba(100,100,100,1)",
          }}
        >
          {"check" as MaterialSymbol}
        </motion.div>
      </motion.div>
      <motion.p
        style={{
          fontFamily: fontNoto.style.fontFamily,
          color: "rgba(120,120,120,1)",
          margin: ".25rem .5rem .5rem .5rem",
          width: "80%",
          fontSize: "12px",
        }}
      >
        It looks like you are already authenticated with a account. If it's not
        you try logining out and login with a new account.
      </motion.p>
      <motion.div
        style={{
          borderRadius: ".5rem",
          width: "60%",
          background: "rgba(250,250,250,1)",

          border: "1px solid rgba(230,230,230,1)",
          cursor: "pointer",
        }}
        whileHover={{
          border: "1px solid rgba(245,245,245,1)",
        }}
      >
        <Link
          href={"/account"}
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            style={{
              margin: ".5rem",
              height: "2rem",
              width: "2rem",
            }}
          >
            <ImageWithLoader
              style={{ borderRadius: "100%" }}
              src={session?.user?.image ? session?.user?.image : ""}
              alt="User"
              height={32}
              width={32}
              loader=""
            />
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: ".5rem .5rem .5rem 0 ",
            }}
          >
            <motion.h4
              style={{
                fontFamily: fontNoto.style.fontFamily,
                margin: "0",
                color: "rgba(100,100,100,1)",
              }}
            >
              {session?.user?.name}
            </motion.h4>
            <motion.p
              style={{
                fontFamily: fontNoto.style.fontFamily,
                margin: "0",
                color: "rgba(140,140,140,1)",
                fontSize: "13px",
              }}
            >
              {session?.user?.email}
            </motion.p>
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: ".5rem",
          width: "60%",
          background: "rgba(250,250,250,1)",
          margin: ".5rem",
          border: "1px solid rgba(230,230,230,0)",
          cursor: "pointer",
        }}
        whileHover={{
          border: "1px solid rgba(230,230,230,1)",
        }}
        onClick={() => {
          signOut();
        }}
      >
        <motion.h4
          style={{
            fontFamily: fontNoto.style.fontFamily,
            margin: ".5rem",
            padding: ".5rem",
            color: "rgba(100,100,100,1)",
          }}
        >
          Log Out Now
        </motion.h4>
        <motion.div
          className="material-symbols-outlined"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: ".5rem",
            color: "rgba(100,100,100,1)",
          }}
        >
          {"lock_open" as MaterialSymbol}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const LoadingNav: React.FC = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          width: "8rem",
          margin: ".5rem",
        }}
      >
        <Skeleton />
      </motion.div>

      <motion.div
        style={{
          width: "10rem",
          margin: ".5rem",
        }}
      >
        <Skeleton />
      </motion.div>
      <motion.div
        style={{
          margin: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <motion.div style={{ margin: ".5rem" }}>
          <Skeleton height={48} width={48} />
        </motion.div>
        <motion.div style={{ margin: ".5rem" }}>
          <Skeleton height={48} width={48} />
        </motion.div>
        <motion.div style={{ margin: ".5rem" }}>
          <Skeleton height={48} width={48} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
const AuthBox: React.FC = () => {
  const { data: session, status } = useSession();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        height: "300px",
        width: "400px",
        background: "rgba(255,255,255,1)",
        borderRadius: ".5rem",
        boxShadow: "0px 1px 2px rgba(210,210,210,1)",
        boxSizing: "border-box",
        padding: ".25rem",
      }}
    >
      <Probha />
      {status == "loading" && <LoadingNav />}
      {status == "authenticated" && <AuthenticatedNav />}
      {status == "unauthenticated" && <UnauthenticatedNav />}
    </motion.div>
  );
};

export { AuthBox };
