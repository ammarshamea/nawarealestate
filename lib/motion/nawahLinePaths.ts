/** Organic brand line path variants for SVG morphing */
export const nawahLinePaths = {
  point: "M 200 200",
  heroGrow:
    "M 200 200 C 200 180, 220 160, 240 150 C 280 130, 320 140, 360 160 C 400 180, 420 220, 400 260",
  frame:
    "M 40 40 C 80 20, 120 30, 160 50 C 200 70, 240 60, 280 80 C 320 100, 360 90, 400 110",
  mapRoute:
    "M 60 300 C 120 280, 180 250, 240 220 C 300 190, 360 170, 420 150 C 480 130, 520 120, 560 100",
  blueprint:
    "M 80 80 L 520 80 L 520 320 L 80 320 Z M 80 160 L 520 160 M 80 240 L 520 240 M 200 80 L 200 320 M 360 80 L 360 320",
  timeline:
    "M 40 200 L 560 200 M 120 200 L 120 180 M 240 200 L 240 180 M 360 200 L 360 180 M 480 200 L 480 180",
  coreReturn:
    "M 200 200 C 200 200, 200 200, 200 200",
} as const;

export const nawahLineViewBox = "0 0 600 400";
