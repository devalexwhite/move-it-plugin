const SIGNS = ["-", "+"];

export default function move({ x = "+0", y = "+0" }) {
  let xDelta, yDelta, leadingX, leadingY;

  leadingX = SIGNS.includes(x.trim().charAt(0))
    ? (leadingX = x.trim().charAt(0))
    : null;
  leadingY = SIGNS.includes(y.trim().charAt(0))
    ? (leadingY = y.trim().charAt(0))
    : null;

  xDelta = leadingX ? Number.parseInt(x.substring(1)) : Number.parseInt(x);
  yDelta = leadingY ? Number.parseInt(y.substring(1)) : Number.parseInt(y);

  const applySign = (value, sign, delta) =>
    sign == "-" ? value - delta : value + delta;

  for (const node of figma.currentPage.selection) {
    if ("x" in node && "y" in node) {
      node.x = leadingX ? applySign(node.x, leadingX, xDelta) : xDelta;
      node.y = leadingY ? applySign(node.y, leadingY, yDelta) : yDelta;
    }
  }
}
