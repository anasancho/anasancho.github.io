const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
    help: 'TYPE Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
    about: "Hello 👋<br> I'm Ana Phi Sancho. I’m a developer and audiovisual technician with knowledge in a wide diversity of interactive media technologies or environments.  I do not focus on specific technologies as I adopt on what is most appropriate in each situation. Open minded with profound need of knowledge on how the systems work - It helps to increase my perspectives on how I see the world network. I Keep up to date on new technology and digital media (Vr/AR). My curiosity leads me to research on what are the next developments in analytics, AI, Machine learning and automation, Computer Vision or Knowledge Representation /DBMS DATABASE, and transit well between strategy/logic and abstract/creative design thinking: Exploring the potential of editing programs; SKetching creative ideas and Using different software platforms. I also enjoy helping people, sharing experience with all those who are starting out in the area and want to collaborate more and more with the IT community as much as I can.  For more information  Go to <br><a href='https://anaphisancho.eu5.org/about.html' class='success link'> About / Projects</a></br>",
    skills: '<span class="code">Languages:</span> Python, C#, Java, PHP, HTML, CSS, JavaScript , React ,  NodeJS  <br><span class="code">Technologies:</span>  Git, SQL , SQL Server Integration Services (SSIS) ,  Microsoft Visio Professional,  Firebase Backend-as-a-Service (Baas) , PhpMyAdmin  and  XAMPP cross-platform web servers  <br><span class="code">Frameworks / Cross-Platform  :</span>  Adobe Editing Programs, Electronjs framework ( desktop apps with JavaScript, HTML, and CSS ), Atom, Apache NetBeans,  MonoDroid , Eclipse,  Xamarin , Azure , SQL Server Management Studio, React.js, Vue.js, flex, Django, API Framework : Microsoft.Net ; Android Studio,  A-Frame, Unity',
    education: '<br> — Som e Imagem - Academia de Artes da Universidade Católica, Porto ;  <br> — Técnica Audiovisual & Computer Science - Etic, Lisboa; ',
    experience: " I participated in some hardware/Software projects; experienced working at a TV production company and personal projects. For more information Go to <br><a href='https://anaphisancho.eu5.org/projects.html' class='success link'>Projects</a></br> ",
    lessonslearned: "I learnt from past projects that the path to ensure a growth mindset in a business ecosystem is a process that combines the right tools for the team to grow from a human & professional point of view - the metrics you’ll need to make decisions - understand the workplace-team values, set goals, prioritize wellness and track progress (learning culture) . Value Chain requires exchangeable knowledge that line up throughout sustainable forms : sacrificing quality to accelerate delivery tends to backfire much more quickly than expected, because it affects our ability to continue, maintain and change" ,   
    contact: "You can contact me -> click on any of following links for more information :<br><a href='https://behance.net/anaphisancho/' class='success link'>Behance</a> ,<a href='https://www.linkedin.com/in/ana-filipa-sancho-silva-283b6b16' class='success link'> linkedin </a>, <a href='https://github.com/anasancho' class='success link'>Github</a>, <a href='https://anaphisancho.eu5.org/index.html' class='success link'> HomePAGE</a>",
};
let userInput, terminalOutput;

const app = () => {
    userInput = document.getElementById('userInput');
    terminalOutput = document.getElementById('terminalOutput');
    document.getElementById('dummyKeyboard').focus();
    console.log('Application loaded');
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line"><font color="orangered">no such command: </font> <font color="lime"> ${input} </font> ----- > Type <font color="orangered"> HELP </font>to Run command Or Click On Icon __  <font color="orangered"> <a href="http://anaphisancho.eu5.org/index.html"><i class="fa fa-user-circle" > </font></i> </a>&ensp;`;
        console.log('Error! no such command');
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
    const input = userInput.innerHTML;

    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    if (e.key === 'Enter') {
        execute(input);
        userInput.innerHTML = '';
        return;
    }

    userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
};

document.addEventListener('keydown', backspace);
document.addEventListener('keypress', key);
document.addEventListener('DOMContentLoaded', app);
