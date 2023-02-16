import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

console.log("앱 소스 스타트!");

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
