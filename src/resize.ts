const SIGNS = ["-", "+"];

export default function resize({ width = "+0", height = "+0" }) {
  let widthDelta, heightDelta, leadingW, leadingH;

  leadingW = SIGNS.includes(width.trim().charAt(0))
    ? (leadingW = width.trim().charAt(0))
    : null;
  leadingH = SIGNS.includes(height.trim().charAt(0))
    ? (leadingH = height.trim().charAt(0))
    : null;

  widthDelta = leadingW
    ? Number.parseInt(width.substring(1))
    : Number.parseInt(width);
  heightDelta = leadingH
    ? Number.parseInt(height.substring(1))
    : Number.parseInt(height);

  const applySign = (value, sign, delta) =>
    sign == "-" ? value - delta : value + delta;

  for (const node of figma.currentPage.selection) {
    if ("resize" in node) {
      const nodeWidth = leadingW
        ? applySign(node.width, leadingW, widthDelta)
        : widthDelta;

      const nodeHeight = leadingH
        ? applySign(node.height, leadingH, heightDelta)
        : heightDelta;

      node.resize(nodeWidth, nodeHeight);
    }
  }
}
