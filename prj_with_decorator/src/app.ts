import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

console.log("앱 소스 스타트!");

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

console.log("hi!!!!!");
