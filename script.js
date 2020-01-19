const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Ana Phi Sancho. I’m a developer and audiovisual technician with knowledge in a wide diversity of interactive media technologies or environments. Go to <br><a href='https://anaphisanchosilva.000webhostapp.com/Portfolio/projects.html' class='success link'>Projects</a></br>",
  skills:
    '<span class="code">Languages:</span> Python, HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, SQL<br><span class="code">Frameworks:</span> Adobe Editing Programs, React.js, Vue.js, Django,',
  education:
    "<br> — Som e Imagem - Academia de Artes da Universidade Católica, Porto ; Etic, Lisboa <br> — Técnica Audiovisual & Computer Science; ",
 
  experience: " I participated in some hardware/Software projects; experienced working at a TV production company and personal projects.Go to <br><a href='https://anaphisanchosilva.000webhostapp.com/Portfolio/projects.html' class='success link'>Projects</a></br> ",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.behance.net/anasancho' class='success link'>Behance</a> ,<a href='https://www.linkedin.com/in/ana-filipa-sancho-silva-283b6b16' class='success link'> linkedin </a>, <a href='https://github.com/anasancho' class='success link'>Github</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Error! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);