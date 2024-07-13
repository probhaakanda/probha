import { usePathname, useRouter } from "next/navigation";
import React, {
  createRef,
  CSSProperties,
  FormEvent,
  MouseEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { color, escapeProfileChar, navsData } from "./data";
// import {Playfair, Noto_Sans} from "next/font/google"
import localFont from "next/font/local";

// const playfair = Playfair({subsets:['latin']})
// const notoSans = Noto_Sans({subsets:["latin"]})
const playfairLocal = localFont({
  src: "./fonts/playfairDisplayRegularVariableFont.ttf",
});
const productSansLocal = localFont({ src: "./fonts/productSansRegular.ttf" });

function NavItem({
  name = "Shuvi",
  activeRoutes = [""],
  escapeRoutes = [""],
  link = "/",
}: {
  name?: string;
  activeRoutes?: string[];
  escapeRoutes?: string[];
  link?: string;
}) {
  var router = useRouter();

  const path = usePathname();
  var [isActive, setIsActive] = useState(false);
  var [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (activeRoutes.includes(path)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (escapeRoutes.includes(path)) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [path]);

  useEffect(() => {
    if (isActive) {
      setContainerStyle(containerCSSA);
    } else setContainerStyle(containerCSSI);
  }, [isActive]);

  function handleClick(e: React.MouseEvent) {
    if (path != link) {
      router.push(link);
    }
  }

  function handleMouseover(e: React.MouseEvent) {
    if (isActive) {
      setContainerStyle(containerCSSAH);
    } else {
      setContainerStyle(containerCSSH);
    }
  }
  function handleMouseout(e: React.MouseEvent) {
    if (isActive) {
      setContainerStyle(containerCSSA);
    } else {
      setContainerStyle(containerCSSI);
    }
  }

  const containerCSSI: CSSProperties = {
    ...productSansLocal.style,
    ...{
      boxSizing: "border-box",
      height: "2rem",
      // margin: ".1875rem",
      padding: ".375rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      // fontFamily: "monospace",
      fontSize: "14px",
      letterSpacing: "1px",
      borderRadius: "8px",
      transitionDuration: "200ms",
    },
  };

  const containerCSSH: CSSProperties = {
    ...containerCSSI,
    ...{
      background: color("grey-.05"),
    },
  };

  const containerCSSA: CSSProperties = {
    ...containerCSSI,
    ...{
      background: color("grey-.05"),
    },
  };

  const containerCSSAH: CSSProperties = {
    ...containerCSSA,
    ...{
      background: color("grey-.05"),
    },
  };

  var [containerStyle, setContainerStyle] = useState(containerCSSI);

  useEffect(() => {}, []);

  return (
    !hidden && (
      <div
        className="container"
        onClick={handleClick}
        style={containerStyle}
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
      >
        {name}
      </div>
    )
  );
}

function Navigations({ float = false }: { float?: boolean }) {
  var [floatable, setFloatable] = useState(float);

  const containerCSSI: CSSProperties = {
    height: "2.75rem",
    padding: "0 .375rem",
    boxSizing: "border-box",
    // width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    transitionDuration: "200ms",
    borderRadius: "8px",
  };

  const containerCSSIF: CSSProperties = {
    ...containerCSSI,
    ...{
      background: color("white"),
      boxShadow: `0px 1px 2px ${color("grey-.3")}`,
    },
  };

  useEffect(() => {
    if (floatable) {
      setContainerStyle(containerCSSIF);
    } else {
      setContainerStyle(containerCSSI);
    }
  }, [floatable]);

  var [containerStyle, setContainerStyle] = useState(
    floatable ? containerCSSIF : containerCSSI
  );
  return (
    <div className="container" style={containerStyle}>
      {navsData.map((nav) => {
        return (
          <NavItem
            name={nav.name}
            activeRoutes={nav.activeRoutes}
            escapeRoutes={nav.escapeRoutes}
            link={nav.link}
            key={nav.name}
          />
        );
      })}
    </div>
  );
}

function Probha({ float = false }: { float?: boolean }) {
  var router = useRouter();
  var [floatable, setFloatable] = useState(float);
  const containerCSSI: CSSProperties = {
    padding: "0 .374rem",
    boxSizing: "border-box",
    height: "2.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    transitionDuration: "200ms",
    borderRadius: "8px",
    cursor: "pointer",
  };

  const containerCSSIF: CSSProperties = {
    ...containerCSSI,
    ...{
      background: color("white"),
      boxShadow: `0px 1px 2px ${color("grey-.3")}`,
    },
  };

  useEffect(() => {
    if (floatable) {
      setContainerStyle(containerCSSIF);
    } else {
      setContainerStyle(containerCSSI);
    }
  }, [floatable]);

  const logoCSSI: CSSProperties = {
    height: "2rem",
    width: "2rem",
    // background: color("grey-.1"),
    background: `url('/favicon.png')`,
    backgroundSize: "100%",
    borderRadius: "8px",
  };

  const nameCSSI: CSSProperties = {
    ...productSansLocal.style,
    ...{
      margin: "0 0 0 .375rem",
      // fontFamily: "monospace",
    },
  };

  function handleClick(e: React.MouseEvent) {
    router.push("/");
  }

  var [containerStyle, setContainerStyle] = useState(
    floatable ? containerCSSIF : containerCSSI
  );
  var [logoStye, setLogoStyle] = useState(logoCSSI);
  var [nameStyle, setNameStyle] = useState(nameCSSI);

  return (
    <div className="container" style={containerStyle} onClick={handleClick}>
      <div className="logo" style={logoStye}></div>
      <div className="name" style={nameStyle}>
        Probha Listings
      </div>
    </div>
  );
}

function User({ float = false }: { float?: boolean }) {
  var [floatable, setFloatable] = useState(float);

  const containerCSSI: CSSProperties = {
    height: "2rem",
    width: "6rem",
    borderRadius: "8px",
    background: color("grey-.1"),
    margin: "0 .374rem",
    transitionDuration: "200ms",
  };
  const containerCSSIF: CSSProperties = {
    ...containerCSSI,
    ...{
      background: color("white"),
      boxShadow: `0px 1px 2px ${color("grey-.3")}`,
    },
  };

  useEffect(() => {
    if (floatable) {
      setContainerStyle(containerCSSIF);
    } else {
      setContainerStyle(containerCSSI);
    }
  }, [floatable]);

  var [containerStyle, setContainerStyle] = useState(
    floatable ? containerCSSIF : containerCSSI
  );
  return <div className="container" style={containerStyle}></div>;
}

export function MenuBar({
  Floating = "off",
}: {
  Floating?: "on" | "off" | "super";
}) {
  var [floating, setFloating] = useState(Floating);
  var [childFloating, setChildFloating] = useState(floating == "super");

  var outerCSSI: CSSProperties = {
    boxSizing: "border-box",
    padding: "0 7.2rem",
    // height: "2.75rem",
    height: "3rem",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: color("white"),
    transitionDuration: "200ms",
    boxShadow: `0px 1px 2px ${color("grey-.3")}`,
  };
  const outerCSSIF: CSSProperties = {
    ...outerCSSI,
    ...{
      background: "transparent",
      height: "3.5rem",
      boxShadow: "none",
    },
  };
  const outerCSSIS: CSSProperties = {
    ...outerCSSI,
    ...{
      background: "transparent",
      height: "3.5rem",
      boxShadow: "none",
    },
  };

  var containerCSSI: CSSProperties = {
    width: "100%",
    height: "2.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    transitionDuration: "200ms",
    background: color("white"),
    boxShadow: "none",
  };

  const containerCSSIF: CSSProperties = {
    ...containerCSSI,
    ...{
      background: color("white"),
      borderRadius: "8px",
      boxShadow: `0px 1px 2px ${color("grey-.3")}`,
    },
  };

  const containerCSSIS: CSSProperties = {
    ...containerCSSI,
    ...{
      background: "transparent",
      border: "none",
      boxShadow: "none",
    },
  };

  useEffect(() => {
    if (floating == "off") {
      setContainerStyle(containerCSSI);
      setOuterStyle(outerCSSI);
      setChildFloating(false);
    } else if (floating == "on") {
      setContainerStyle(containerCSSIF);
      setOuterStyle(outerCSSIF);
      setChildFloating(false);
    } else if (floating == "super") {
      setContainerStyle(containerCSSIS);
      setOuterStyle(outerCSSIS);
      setChildFloating(true);
    }
  }, [floating]);

  function handleClick(e: React.MouseEvent) {
    // return;
  }

  var [outerStyle, setOuterStyle] = useState(
    floating == "off" ? outerCSSI : floating == "on" ? outerCSSIF : outerCSSIS
  );
  var [containerStyle, setContainerStyle] = useState(
    floating == "off"
      ? containerCSSI
      : floating == "on"
      ? containerCSSIF
      : containerCSSIS
  );
  return (
    <div className="outer" style={outerStyle} onClick={handleClick}>
      <div className="container" style={containerStyle}>
        <Probha float={childFloating} />
        <Navigations float={childFloating} />
        <User float={childFloating} />
      </div>
    </div>
  );
}

function CheckDreamNameInput() {
  var router = useRouter();
  var inputRef = createRef<HTMLInputElement>();
  var containerRef = createRef<HTMLDivElement>();
  var [navigate, setNavigate] = useState(false);

  const containerCSSI: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
    padding: "0 .375rem",
    alignItems: "center",
    background: color("white-1"),
    borderRadius: "8px",
    height: "2.75rem",
    cursor: "pointer",
    boxShadow: `0px 2px 3px ${color("grey-.3")}`,
    transitionDuration: "200ms",
  };
  const containerCSSF: CSSProperties = {
    ...containerCSSI,
    ...{
      boxShadow: "none",
    },
  };
  const labelCSSI: CSSProperties = {
    ...{},
    ...{
      boxSizing: "border-box",
      fontSize: "14px",
      padding: "0 .375rem",
      height: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };
  const inputContainerCSSI: CSSProperties = {
    background: color("grey-.1"),
    height: "2rem",
    flexGrow: "1",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
  };

  const inputCSSI: CSSProperties = {
    ...{
      fontFamily: "monospace",
    },
    ...{
      height: "100%",

      flexGrow: "1",

      borderRadius: "8px",

      border: "none",
      boxSizing: "border-box",
      outline: "none",
      padding: "0px .75rem",
      // background:'transparent',
      width: "100%",
      background: color("grey-.075"),
      fontSize: "14px",
      color: "inherit",
    },
  };
  const inputCSSF: CSSProperties = {
    ...inputCSSI,
    ...{
      boxShadow: `0px 1px 2px ${color("grey-.5")}`,
      fontWeight: "bold",
    },
  };
  const navigatorCSSI: CSSProperties = {};

  var [containerStyle, setContainerStyle] = useState(containerCSSI);
  var [labelStyle, setLabelStyle] = useState(labelCSSI);
  var [inputContainerStyle, setInputContainerStyle] =
    useState(inputContainerCSSI);
  var [inputStyle, setInputStyle] = useState(inputCSSI);
  var [navigatorStyle, setNavigatorStyle] = useState(navigatorCSSI);

  function handleInputBlur() {
    if (inputRef.current?.value == "") {
      setContainerStyle(containerCSSI);
      setInputStyle(inputCSSI);
    }
  }

  function handleInputFocus() {
    setContainerStyle(containerCSSF);
    setInputStyle(inputCSSF);
  }

  function handleContainerClick(e: React.MouseEvent) {
    inputRef.current?.focus();
  }

  function handleKeyup(e: React.KeyboardEvent) {
    const key = e.key;
    const profileCharsRegex = /^[a-zA-Z0-9_-]+$/;

    if (key == "Enter" && inputRef.current?.value != "") {
      const name = inputRef.current?.value || "/";
      const link = `check-name/${name}`;
      router.push(link);
    }

    if (profileCharsRegex.test(key)) {
    } else {
      if (inputRef.current?.value) {
        inputRef.current.value = inputRef.current?.value.replace(key, "");
      }
    }
  }

  return (
    <div
      className="container"
      style={containerStyle}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="label" style={labelStyle}>
        probha.com /{"  "}
      </div>
      <div className="inputContainer" style={inputContainerStyle}>
        <input
          type="text"
          placeholder="Your dream name"
          spellCheck="false"
          style={inputStyle}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyUp={handleKeyup}
        ></input>
        {/* </div> */}
        {navigate && <div className="navigator" style={navigatorStyle}></div>}
      </div>
    </div>
  );
}

export function CheckDreamName() {
  const containerCSSI: CSSProperties = {
    width: "100%",
    height: "100%",
    // background: color("white-.8"),
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const leftCSSI: CSSProperties = {
    boxSizing: "border-box",
    // padding:'0 6rem 0 0',
    width: "400px",
    display: "flex",
    flexDirection: "column",
  };
  const rightCSSI: CSSProperties = {};

  const titleCSSI: CSSProperties = {
    ...playfairLocal.style,
    ...{
      fontSize: "32px",
      fontWeight: "bold",
      // fontFamily:'monospace',
    },
  };
  const descCSSI: CSSProperties = {
    ...productSansLocal.style,
    ...{
      fontSize: "16px",
      boxSizing: "border-box",
      margin: "1.5rem 0rem",
      wordBreak: "break-all",
      // fontFamily:'monospace',
    },
  };
  const inpCSSI: CSSProperties = {};
  const picCSSI: CSSProperties = {
    background: color("white-1"),
    height: "400px",
    width: "400px",
    borderRadius: "8px",
    backgroundImage: `url('/artt.png')`,
    backgroundPosition: "-30px -35px",
    backgroundSize: "130%",
    boxShadow: `0px 1px 2px ${color("grey-.5")}`,
  };

  var [leftStyle, setLeftStyle] = useState(leftCSSI);
  var [rightStyle, setRightStyle] = useState(rightCSSI);
  var [titleStyle, setTitleStyle] = useState(titleCSSI);
  var [descStyle, setDescStyle] = useState(descCSSI);
  var [inpStyle, setInpStyle] = useState(inpCSSI);
  var [picStyle, setPicStyle] = useState(picCSSI);

  var [containerStyle, setContainerStyle] = useState(containerCSSI);
  return (
    <div className="container" style={containerStyle}>
      <div className="left" style={leftStyle}>
        <div className={`title ${playfairLocal.className}`} style={titleStyle}>
          Amazements Designed <br />
          To Improve You
        </div>
        <div className="desc" style={descStyle}>
          Welcome to Probha Listings, the first ever listing community in
          Bangladesh. Mater the art of engagement by the user friendly platorm
          of Probha Listings. Connect with friends, family, collegues or any
          redefined community with ease. Be a part of first ever digital
          revolution in Bangladesh !
        </div>
        <div className="inp" style={inpStyle}>
          <CheckDreamNameInput />
        </div>
      </div>
      <div className="right" style={rightStyle}>
        <div className="pic" style={picStyle}></div>
      </div>
    </div>
  );
}
