import { Color, Hex, RGB } from "../api/interfaces";


const hexToRgb = (hex: Hex): RGB => {
  const  result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;

  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ];
}

const isHex = (color: Color): color is Hex => {
  if (typeof color !== 'string') return false;
  return /^#[0-9A-F]{6}$/i.test(color)
}

const getBrightnessCoefficientFromRGB = (color: RGB): number => {
  return 0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2]
}

const getBrightnessCoefficientFromColor = (color: Color): number => {
  return isHex(color) 
  ? getBrightnessCoefficientFromRGB(hexToRgb(color))
  : getBrightnessCoefficientFromRGB(color)
}

export const getContrastRatio = (color1: Color, color2: Color): number => {
  const colorBrightness1 = getBrightnessCoefficientFromColor(color1);
  const colorBrightness2 = getBrightnessCoefficientFromColor(color2);

  if(colorBrightness1 > colorBrightness2) return colorBrightness1 / colorBrightness2 
  return colorBrightness2 / colorBrightness1
}