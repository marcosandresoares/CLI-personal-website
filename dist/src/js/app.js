// Blacklisted Key Codes
const _BLACKLISTED_KEY_CODES_ = [38];

// Commands
const _COMMANDS_ = {
    hello: '<br>Hi, how are you doing today?<br> Have you tried typing <span class="code">help</span> in the console?<br><br>',
    help: 
        '<br> Type one of these supported commands:<br><br><span class="code">about</span> <br><span class="code">tech skills</span> <br><span class="code">design skills</span> <br> <span class="code">previous research</span> <br> <span class="code">expertise areas</span> <br> <span class="code"> education</span> <br> <span class="code">experience</span> <br><span class="code">hobbies</span> <br> <span class="code">five fun facts</span> <br> <span class="code">contact</span><br><br> <span class="code">tools</span><br><br>',
    about: '<br><span class="code"> Marcos Soares </span> is a hybrid designer and researcher currently pursuing a PhD in Innovation Design Engineering at the Royal College of Art in London. He is also responsible for the entire user experience research for oddschecker\'s mobile applications and website. Prior to joining oddschecker, he held research positions at the Royal College of Art, Microsoft Research and Fraunhofer Portugal.<br><br> ',
    'tech skills': '<br> Front End Development:<br> <span class="code"> HTML</span>,<span class="code"> CSS</span>, <span class="code"> Custom Reusable CSS Components (Sass)</span>, <span class="code"> CSS Frameworks (Bootstrap, Materialize and Bulma) </span><span class="code"> Javascript</span>, <span class="code"> Javascript Frameworks (React) </span> and <span class="code"> Typescript</span><br><br> Server-side Language: <br><span class="code"> Node.js</span>, <span class="code"> Python</span> <br><br> Databases: <br>Experience with <span class="code"> Relational Databases (PostgreSQL and MySQL)</span> and <span class="code"> NoSQL (MongoDB)</span>. Basic Experience with <span class="code"> Cloud Databases (Firebase)</span> <br><br> Data Science: <br> <span class="code"> Python</span> and <span class="code"> Excel</span>. Familiar with <span class="code"> R</span>, <span class="code"> Deep Learning algorithms</span> and <span class="code"> Machine Learning algorithms</span> ',
    'design skills': '<br> Although not exclusive, these are the user research methods I use more frequently: <br> <span class="code"> Analytics & A/B Testing</span> <br> <span class="code"> Card Sorting</span><br> <span class="code"> Concept Testing</span><br> <span class="code"> Usability Testing</span><br> <span class="code"> Usability Benchmarking</span><br> <span class="code"> Eyetracking</span><br> <span class="code"> Interviews</span><br> <span class="code"> Participatory Design</span> <br> <span class="code"> Diary Studies</span><br> <span class="code"> Customer Feedback</span><br> <span class="code"> Surveys</span><br> <span class="code"> Qualitative and Quantitative Desirability Studies</span> <br> <span class="code"> Ethnographic Field Studies</span> <br> <span class="code"> Focus Groups</span><br> <span class="code"> Data Analysis for Qualitative Methods</span>',
    'previous research' : '<br> Over the years, I\'ve worked in the following areas of research:<br><br><span class="code">Cultural Databases</span><br><span class="code">Data Collection in Remote and Underserved Areas</span><br><span class="code">Fall Monitoring and Fall Prevention</span><br><span class="code">Exergaming</span><br><span class="code">Food Recommendation Systems</span><br><span class="code">mHealth Solution</span><br><span class="code">Biological Computational Systems</span><br><span class="code">Human-AI Interaction</span><br><span class="code">Intelligent Personal Assistants</span><br><span class="code">Privacy and Security</span><br><br>',
    'expertise areas': '<br><span class="code">Interaction Design</span><br><span class="code">Human Computer Interaction</span><br><span class="code">UX Design Research</span><br><span class="code">Survey Research</span><br><span class="code">Design Strategy</span><br><span class="code">Data Collection and Data Analysis</span><br><span class="code">Statistical Methods</span><br><span class="code">Interviewing</span><br><span class="code">Project Management</span><br><span class="code">Prototyping and Web Development</span><br><span class="code">User Interface Design</span>',
    education: '<br><span class="code">PhD in Innovation Design Engineering</span><br> Royal College of Art | London, United Kingdom<br>September 2016 - Present<br><br> <span class="code">Masters in Multimedia - Specialisation in Technologies</span><br> FEUP | Porto, Portugal<br>September 2013 - July 2015<br><br> <span class="code"> Double Major - Bachelor\'s in Anthropology and Computer Art</span><br> SUNY Oneonta |  Oneonta, NY, USA<br>January 2009 - December 2011<br><br>',
    experience: '<br><span class="code">User Experience Researcher @ oddschecker</span><br>London, United Kingdom<br>October 2019 - Present<br><br> <span class="code">Visiting Lecturer @ Royal College of Art</span><br> London, United Kingdom<br>January 2018 - January 2019<br><br> <span class="code"> Human Computer Interaction / User Experience Research Intern @ Microsoft Research</span><br> Cambridge, United Kingdom<br>June 2017 - September 2017<br><br> <span class="code">User Experience / Human Computer Interaction Scientist @ Fraunhofer Portugal</span><br>Porto, Portugal<br>May 2016 - September 2016<br><br> <span class="code">User Experience / Human Computer Interaction Researcher @ Fraunhofer Portugal</span><br>Porto, Portugal<br>October 2014 - May 2016<br><br>',
    hobbies: 'Drawing <br> Running <br> Basketball <br> Football <br> Cooking <br> Urban Exploration ',
    'five fun facts': 'I studied Chinese for 4 years <br> I\'m obsessed with Non-Western history, particularly South American History <br> I\'m a huge fan of underground hip hop and old school Hip Hop <br> I played roller hockey player for 11 years in Portugal <br> I lived in New York state for five years ',
    tools: '<br>Preferred Operating System: <span class="code"> MacOS</span><br>Preferred Text Editor: <span class="code"> Visual Studio Code</span> <br>Preferred Web Browsers: <span class="code">Google Chrome & Mozilla Firefox</span><br>Others: <span class="code"> Terminal</span> & <span class="code"> Github</span><br>Preferred Design Software: <span class="code"> Sketch</span>, <span class="code"> Figma</span><br><br>',
    contact: '<br> Send me a message to: <a href="mailto:marcos.barroso.soares@gmail.com"><span class="code">marcos.barroso.soares@gmail.com</span></a><br> You can also find me on <a href="https://www.linkedin.com/in/marcos-soares-a9a1184a/" target="_blank"><span class="code">LinkedIn</span></a>, <a href="https://github.com/marcosandresoares" target="_blank"><span class="code">Github</span></a> and <a href="https://medium.com/@marcos.barroso.soares" target="_blank"><span class="code">Medium</span></a>',
};

let userInput;
let terminalOutput;

// app 
const app = () => {
    userInput = document.getElementById('user-input');
    terminalOutput = document.getElementById('terminal-output');
    commandInput = document.getElementById('command-input')
    commandInput.focus();
    console.log('Application Ready!!');
};

// execute
const executeCommand = (input) => {

    let output;
    // lowercase input
    input = input.toLowerCase();

    if(input.length === 0) {
        return;
    }

    // output
    output = `
        <div class='terminal-line'>
            <span class='success'> marcos-soares@Marcos-CLI</span>
            <span class='directory'> ~ % </span>
            ${input}
        </div>
    `;

    // Fn: If command is in list, run command.
    // Else, provide error message
    if(!_COMMANDS_.hasOwnProperty(input)) {
        output += `
            <div class='terminal-line'>
                No such command: ${input}
            </div>
        `;
        console.log('Oops! No such command!');
    } else {
        output += _COMMANDS_[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class='terminal-line'> ${output}</div>`;

    terminalOutput.scrollTop = terminalOutput.scrollHeight;

};


// key
const key = (e) => {

    const input = userInput.innerHTML;

    if(_BLACKLISTED_KEY_CODES_.includes(e.keyCode)) {
        return;
    }

    if(e.key === 'Enter') {
        executeCommand(input);
        userInput.innerHTML = '';
        commandInput.value='';
        return;
    }

    userInput.innerHTML = input + e.key;
};


// backspace
const backspace = (e) => {
    if(e.keyCode !==  8 && e.keyCode !== 46) {
        return;
    }

    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};

// Event Listeners
document.addEventListener('keydown', backspace);
document.addEventListener('keypress', key);
document.addEventListener('DOMContentLoaded', app);
