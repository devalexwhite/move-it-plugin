import move from "./move";
import resize from "./resize";

figma.on("run", ({ command, parameters }: RunEvent) => {
  switch (command) {
    case "move":
      move(parameters);
      break;
    case "resize":
      resize(parameters);
      break;
    default:
      break;
  }

  figma.closePlugin();
});
