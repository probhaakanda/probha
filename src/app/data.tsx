export function color(
  color: string = "pink-white-5-1",
  hexColor: string = "#ff0033",
  factor: number = 10
) {
  const chroma = require("chroma-js");
  const baseChroma = chroma(hexColor);
  const baseH = baseChroma.get("hsl.h");
  const baseS = baseChroma.get("hsl.s");
  const baseL = baseChroma.get("hsl.l");
  const baseMod = baseH % 30;

  const colorArray = color.split("-");
  const targetColor = colorArray[0];
  const targetVarient = colorArray[1] == undefined ? "color" : colorArray[1];
  const targetIntensity =
    colorArray[2] == undefined ? 0 : Number(colorArray[2]);
  const targetAlpha = colorArray[3] == undefined ? 1 : Number(colorArray[3]);

  if (
    targetColor == "grey" ||
    targetColor == "white" ||
    targetColor == "black"
  ) {
    var wildTargetHex = "";
    if (targetColor == "grey") {
      wildTargetHex = chroma.hsl(0, 0, 0.5, colorArray[1]).hex();
    } else if (targetColor == "black") {
      wildTargetHex = chroma.hsl(0, 0, 0, colorArray[1]).hex();
    } else if (targetColor == "white") {
      wildTargetHex = chroma.hsl(0, 0, 1, colorArray[1]).hex();
    }
    return wildTargetHex;
  }

  const targetH =
    targetColor == "red"
      ? baseMod % 30
      : targetColor == "orange"
      ? baseMod + 30
      : targetColor == "yellow"
      ? baseMod + 60
      : targetColor == "green2"
      ? baseMod + 90
      : targetColor == "green"
      ? baseMod + 120
      : targetColor == "sky"
      ? baseMod + 150
      : targetColor == "blue"
      ? baseMod + 180
      : targetColor == "blue2"
      ? baseMod + 210
      : targetColor == "violet"
      ? baseMod + 240
      : targetColor == "violet2"
      ? baseMod + 270
      : targetColor == "pink2"
      ? baseMod + 300
      : targetColor == "pink"
      ? baseMod + 330
      : "pink";

  var targetL = baseL;
  var targetS = baseS;

  if (targetVarient == "white") {
    targetL = baseL + ((1 - baseL) * targetIntensity) / factor;
  } else if (targetVarient == "black") {
    targetL = baseL - (baseL * targetIntensity) / factor;
  } else if (targetVarient == "grey") {
    targetS = baseS - (baseS * targetIntensity) / factor;
    console.log(baseS, targetS);
  } else if (targetVarient == "color") {
    targetS = baseS + ((1 - baseS) * targetIntensity) / factor;
  }

  const targetHex = chroma.hsl(targetH, targetS, targetL, targetAlpha).hex();

  return targetHex;
}

export const escapeMenuRoutes = ["/login", "/signup", "/dashboard"];

export const navsData = [
  { name: "Home", activeRoutes: ["/", "/home"], link: "/", escapeRoutes: [""] },
  {
    name: "Search",
    activeRoutes: ["/search"],
    link: "/search",
    escapeRoutes: [""],
  },
  {
    name: "Categories",
    activeRoutes: ["/categories"],
    link: "/categories",
    escapeRoutes: [""],
  },
  {
    name: "Locations",
    activeRoutes: ["/locations"],
    link: "/locations",
    escapeRoutes: [""],
  },
  {
    name: "Dashboard",
    activeRoutes: ["/dashboard"],
    link: "/dashboard",
    escapeRoutes: [""],
  },
];

export const escapeProfileChar = ['/','.',':',' ']