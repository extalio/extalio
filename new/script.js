var inputElement = null;
var outputElement = null;
var inputs = [];
var outputs = []
var commandPrefix = "candidate@xpc:~$ ";
var candidateInputs = [
    "whoami", 
    "ls -1", 
    "ls -l Companies", 
    "su - extalio"
];

// use <br /> to print lines together
// use \n to print lines separately
var candidateOutputs = [
    "candidate", 
    "Copmanies<br />Desktop<br />Documents<br />Downloads", 
    // -r--r--r-- 1 owner group filesize Aug 21 15:07 Filename
    `-rw-r----- 1 argus      candidates 3127 Feb 05 05:29 Argus
-rw-r----- 1 friend     friends    1340 Feb 22 20:34 Biocatch
-rw-r----- 1 checkpoint candidates 1379 Nov 13 06:15 Check Point
-rw-r----- 1 dell       candidates 2208 Jul 03 23:51 Dell
-rw-r----- 1 google     candidates 1614 Aug 11 10:12 Google
-rw-r----- 1 friend     friends    3465 Jan 02 17:30 Indepoi
-rw-r----- 1 intezer    candidates 3916 Jun 13 10:53 Intezer
-rw-r----- 1 microsoft  candidates 1435 Dec 19 13:33 Microsoft
-rw-r----- 1 friend     friends    4854 Sep 17 23:02 SafeBreach
-rw-r----- 1 varonis    candidates 4237 Dec 15 23:04 Varonis`,
    ""
];

var extalioInputs = [
    "ls -l Companies", 
    "clear"
];

var extalioOutputs = [
    `-rw-r----- 1 extalio candidates 1674 Oct 04 23:11 Accenture
-rw-r----- 1 extalio candidates 4589 Apr 21 07:11 Akamai
-rw-r----- 1 extalio candidates 3658 Apr 19 16:32 Alcide
-rw-r----- 1 extalio candidates 1342 Mar 15 18:16 Allot Communications
-rw-r----- 1 extalio candidates 2943 Jan 15 19:22 Altair
-rw-r----- 1 extalio candidates 4552 Oct 18 21:34 Amazon
-rw-r----- 1 extalio candidates 3442 Apr 04 19:33 AnyVision
-rw-r----- 1 extalio candidates 2006 Feb 03 17:23 Apolloshield
-rw-r----- 1 extalio candidates 4547 May 22 05:55 Apple
-rw-r----- 1 extalio candidates 1142 Aug 21 21:29 Aqua security
-rw-r----- 1 extalio candidates 1067 Jun 15 07:04 Argus
-rw-r----- 1 extalio candidates 4486 Dec 14 07:08 Arilou
-rw-r----- 1 extalio candidates 2669 Jan 05 18:52 Armis Security
-rw-r----- 1 extalio candidates 1458 Mar 07 09:07 Biocatch
-rw-r----- 1 extalio candidates 3836 Mar 10 02:45 Bitdam
-rw-r----- 1 extalio candidates 4231 Jul 21 18:45 Bloomberg LP
-rw-r----- 1 extalio candidates 2711 Jun 25 16:21 BMC
-rw-r----- 1 extalio candidates 3649 Oct 15 21:08 Cadence
-rw-r----- 1 extalio candidates 3317 Feb 07 18:56 Cato networks
-rw-r----- 1 extalio candidates 3541 Aug 22 20:38 Cellebrite
-rw-r----- 1 extalio candidates 4162 Dec 24 02:25 Cellrox
-rw-r----- 1 extalio candidates 2950 Sep 27 15:39 Check Point
-rw-r----- 1 extalio candidates 1713 Aug 24 13:31 Checkmarx
-rw-r----- 1 extalio candidates 3176 Nov 17 22:29 Claroty
-rw-r----- 1 extalio candidates 3685 Aug 14 23:19 CTERA
-rw-r----- 1 extalio candidates 3773 Jul 23 17:06 CyBellum
-rw-r----- 1 extalio candidates 4194 Feb 24 18:25 Cyber 2.0
-rw-r----- 1 extalio candidates 4952 Mar 14 08:13 CyberArk
-rw-r----- 1 extalio candidates 4813 Nov 18 18:02 Cyberbit
-rw-r----- 1 extalio candidates 1028 Dec 14 01:24 Cybereason
-rw-r----- 1 extalio candidates 1220 Oct 14 12:31 Cyberx
-rw-r----- 1 extalio candidates 3449 May 08 16:34 CyCognito
-rw-r----- 1 extalio candidates 4397 Mar 08 08:31 Cymmetria
-rw-r----- 1 extalio candidates 2734 May 05 22:42 Cymotive Technologies
-rw-r----- 1 extalio candidates 3416 Jul 13 09:21 Cynerio
-rw-r----- 1 extalio candidates 3211 Jan 22 17:29 Cyren
-rw-r----- 1 extalio candidates 1983 Oct 05 11:23 Deep Instinct
-rw-r----- 1 extalio candidates 2753 Sep 06 06:48 Dell
-rw-r----- 1 extalio candidates 4902 Dec 04 22:40 Dome9 Security
-rw-r----- 1 extalio candidates 4330 Apr 08 14:25 E8 Storage
-rw-r----- 1 extalio candidates 2392 Apr 24 06:23 ECI Telecom
-rw-r----- 1 extalio candidates 3925 Nov 18 08:46 Elbit Systems
-rw-r----- 1 extalio candidates 4538 Mar 01 08:57 Ensilo
-rw-r----- 1 extalio candidates 2202 Oct 18 14:03 Excelero
-rw-r----- 1 extalio candidates 1245 May 25 23:40 final
-rw-r----- 1 extalio candidates 1672 Jan 03 15:10 ForeScout
-rw-r----- 1 extalio candidates 2896 Jul 12 19:37 General Motors
-rw-r----- 1 extalio candidates 4854 Aug 27 13:28 Google
-rw-r----- 1 extalio candidates 2512 May 07 11:33 Granulate
-rw-r----- 1 extalio candidates 4587 Feb 08 11:27 Guardicore
-rw-r----- 1 extalio candidates 3885 Jul 05 17:28 Hailo Technologies
-rw-r----- 1 extalio candidates 1446 Apr 16 07:30 Horizen
-rw-r----- 1 extalio candidates 1333 Jul 12 04:14 Hysolate
-rw-r----- 1 extalio candidates 4368 Dec 25 01:35 IBM
-rw-r----- 1 extalio candidates 4059 Jan 26 08:44 Illusive Networks
-rw-r----- 1 extalio candidates 1226 Jan 08 06:21 Imperva
-rw-r----- 1 extalio candidates 4772 Apr 25 16:22 Indegy
-rw-r----- 1 extalio candidates 4091 Jan 07 19:49 Infinidat
-rw-r----- 1 extalio candidates 2858 May 14 13:15 Inpedio
-rw-r----- 1 extalio candidates 4078 Aug 15 10:41 Intel
-rw-r----- 1 extalio candidates 1034 Sep 20 00:06 Intezer
-rw-r----- 1 extalio candidates 4724 Feb 07 04:35 IntSights
-rw-r----- 1 extalio candidates 4560 Mar 07 20:44 JP Morgan
-rw-r----- 1 extalio candidates 1818 Feb 08 03:36 Karamba Security
-rw-r----- 1 extalio candidates 3289 Apr 26 15:45 Kayhut
-rw-r----- 1 extalio candidates 3296 May 20 15:48 Kazuar Advanced Technologies
-rw-r----- 1 extalio candidates 1309 Aug 24 01:20 LEVL Technologies
-rw-r----- 1 extalio candidates 4199 Feb 10 08:40 MagicLeap
-rw-r----- 1 extalio candidates 3503 Apr 11 18:16 Mantis Vision
-rw-r----- 1 extalio candidates 1029 Dec 01 14:39 McAfee
-rw-r----- 1 extalio candidates 1826 Aug 04 14:25 Mellanox
-rw-r----- 1 extalio candidates 4020 Nov 23 18:01 Meta Networks
-rw-r----- 1 extalio candidates 2372 Nov 06 12:52 Microsoft
-rw-r----- 1 extalio candidates 4758 Jan 18 00:31 Motorola Solutions
-rw-r----- 1 extalio candidates 2576 Dec 05 00:24 Nanit
-rw-r----- 1 extalio candidates 2426 Jul 04 11:21 Netonomy
-rw-r----- 1 extalio candidates 2782 May 14 17:18 NNG
-rw-r----- 1 extalio candidates 3872 Feb 05 04:48 NSO Group
-rw-r----- 1 extalio candidates 1970 Jul 05 11:56 Nubo Software
-rw-r----- 1 extalio candidates 3403 Apr 13 10:37 Nuvoton
-rw-r----- 1 extalio candidates 4285 Aug 25 11:37 Nyotron
-rw-r----- 1 extalio candidates 2771 Aug 02 20:55 Oracle
-rw-r----- 1 extalio candidates 2298 Dec 04 01:27 Otorio
-rw-r----- 1 extalio candidates 2564 May 04 06:52 Palo Alto networks
-rw-r----- 1 extalio candidates 2539 Jan 28 08:53 Panorays
-rw-r----- 1 extalio candidates 2204 Oct 13 03:09 Perception Point
-rw-r----- 1 extalio candidates 1380 Jan 04 14:37 Proofpoint
-rw-r----- 1 extalio candidates 1623 Nov 17 08:49 Protected Media
-rw-r----- 1 extalio candidates 1032 May 14 04:43 Puresec
-rw-r----- 1 extalio candidates 2537 Dec 03 18:04 RADiFlow
-rw-r----- 1 extalio candidates 4882 Apr 17 16:37 Radware
-rw-r----- 1 extalio candidates 3830 Aug 10 06:11 Red Hat
-rw-r----- 1 extalio candidates 1372 Dec 18 00:19 Redis Labs
-rw-r----- 1 extalio candidates 3466 Nov 27 01:55 Rookout
-rw-r----- 1 extalio candidates 1456 Jan 21 17:17 SafeBreach
-rw-r----- 1 extalio candidates 4330 Jan 28 20:07 SAM Seamless Networks
-rw-r----- 1 extalio candidates 3684 Jan 12 09:00 Scadafence
-rw-r----- 1 extalio candidates 1881 Nov 23 00:01 ScyllaDB
-rw-r----- 1 extalio candidates 1565 Apr 16 07:02 Secret Double Octopus
-rw-r----- 1 extalio candidates 3678 Nov 08 23:54 Securithings
-rw-r----- 1 extalio candidates 1191 Aug 28 16:36 SentinelOne
-rw-r----- 1 extalio candidates 3058 Dec 24 18:38 SimilarWeb
-rw-r----- 1 extalio candidates 4886 Jun 14 11:11 Skycure
-rw-r----- 1 extalio candidates 1368 Feb 02 10:23 Snyk
-rw-r----- 1 extalio candidates 2235 Sep 17 10:50 SolarEdge
-rw-r----- 1 extalio candidates 4433 Apr 24 05:15 Solebit Labs
-rw-r----- 1 extalio candidates 3936 Jan 26 20:33 Toga Networks
-rw-r----- 1 extalio candidates 4664 Sep 02 18:44 Toka
-rw-r----- 1 extalio candidates 2917 Aug 15 23:10 Toshiba
-rw-r----- 1 extalio candidates 3485 Aug 06 15:15 Trigo Vision
-rw-r----- 1 extalio candidates 1337 Aug 05 18:22 Tufin
-rw-r----- 1 extalio candidates 4510 Sep 23 21:57 Twistlock
-rw-r----- 1 extalio candidates 4581 Jan 28 19:23 Ubimo
-rw-r----- 1 extalio candidates 2868 Jun 17 07:14 Varonis
-rw-r----- 1 extalio candidates 3799 Jul 05 21:08 Vaultive
-rw-r----- 1 extalio candidates 3735 Feb 16 16:58 VDOO
-rw-r----- 1 extalio candidates 2498 Jan 15 01:09 Verint Systems
-rw-r----- 1 extalio candidates 3287 May 15 05:25 Visionmap
-rw-r----- 1 extalio candidates 4563 Jan 13 22:48 Weka.io
-rw-r----- 1 extalio candidates 1183 Jan 22 11:21 WireX Systems
-rw-r----- 1 extalio candidates 3432 Jun 27 21:54 Wix
-rw-r----- 1 extalio candidates 4868 Mar 11 20:37 Zerto
-rw-r----- 1 extalio candidates 3350 Nov 21 01:17 Zimperium`,
    ""
];

var mobileCompanies = `Accenture
Akamai
Alcide
Allot Communications
Altair
Amazon
AnyVision
Apolloshield
Apple
Aqua security
Argus
Arilou
Armis Security
Biocatch
Bitdam
Bloomberg LP
BMC
Cadence
Cato networks
Cellebrite
Cellrox
Check Point Software Technologies
Checkmarx
Claroty
CTERA
CyBellum
Cyber 2.0
CyberArk
Cyberbit
Cybereason
Cyberx
CyCognito
Cymmetria
Cymotive Technologies
Cynerio
Cyren
Deep Instinct
Dell
Dome9 Security
E8 Storage
ECI Telecom
Elbit Systems
Ensilo
Excelero
final
ForeScout
General Motors
Google
Granulate
Guardicore
Hailo Technologies
Horizen
Hysolate
IBM
Illusive Networks
Imperva
Indegy
Infinidat
Inpedio
Intel
Intezer
IntSights
JP Morgan
Karamba Security
Kayhut
Kazuar Advanced Technologies
LEVL Technologies
MagicLeap
Mantis Vision
McAfee
Mellanox
Meta Networks
Microsoft
Motorola Solutions
Nanit
Netonomy
NNG
NSO Group
Nubo Software
Nuvoton
Nyotron
Oracle
Otorio
Palo Alto networks
Panorays
Perception Point
Proofpoint
Protected Media
Puresec
RADiFlow
Radware
Red Hat
Redis Labs
Rookout
SafeBreach
SAM Seamless Networks
Scadafence
ScyllaDB
Secret Double Octopus
Securithings
SentinelOne
SimilarWeb
Skycure
Snyk
SolarEdge
Solebit Labs
Toga Networks
Toka
Toshiba
Trigo Vision
Tufin
Twistlock
Ubimo
Varonis
Vaultive
VDOO
Verint Systems
Visionmap
Weka.io
WireX Systems
Wix
Zerto
Zimperium`;

var extalioArtCommand = ["jp2a -i Extalio.jpg"]
var extalioArt = [
"<br /><br /><br />\
    xvxxxxv   xv     xx  xxxvvxxv     xx       vx      xx     vxxxxv   <br />\
    xv          xx vx       xv       xvvx      vx      xv   vx      xv <br />\
    xExxxv       X X        xv      xv  vx     vx      xv   E   vx   E <br />\
    xv          xx xx       xv     xv xv vx    vx      xv   vx      xv <br />\
    xvxxxxv   xv     vx     xx    xv      vx   vvxxx   xx     xxvvxx   <br />\
<br /><br />"
];
var extalioArtMobile = [
"<br /><br />\
        v=x           x=x   <br />\
         x\\/v       v^\\=  <br />\
          v^\\x     x\\/v   \n\
            =\\^v  ^\\=     <br />\
             v/^ ^/x        <br />\
                            \n\
             v/^ ^/x        <br />\
            =\\^v  ^\\=     <br />\
          v/\\x     x//v    \n\
         x\\/v       v^\\=  <br />\
        v=x           x=x   <br /><br />\
"
];
var isContacting = false;
var contactInputs = [];
var contactOutputs = [];


function initTerminal() {
    inputElement = document.getElementById("terminal-input");
    outputElement = document.getElementById("terminal-output");
    
    if (document.location.search.length > 0) {
        initContactScenario();
        simulateTerminal();
        return;
    }
    
    var isMobile = document.documentElement.clientWidth < 700;
    if (isMobile) {
        candidateInputs[2] = "ls -1";
        candidateOutputs[2] = "Argus<br />Biocatch<br />Check Point<br />Dell<br />Google<br />Indepoi<br />Intezer<br />Microsoft<br />SafeBreach<br />Varonis"
        extalioInputs[0] = "ls -1";
        extalioOutputs[0] = mobileCompanies;
        extalioArt = extalioArtMobile;
    }
    
    inputs = candidateInputs;
    outputs = candidateOutputs;
    runTimer(11);
}

function getParams() {
    paramsStr = document.location.search.substr(1);
    params = paramsStr.split("@");
    params[0] = decodeURIComponent(params[0]);
    params[1] = decodeURIComponent(params[1]);
    return params;
}

function initContactScenario() {
    isContacting = true;
    params = getParams();
    name = params[0];
    phone = params[1];
    mailCommand = 'echo ' + phone +' | mail -s “Call ' + name + ' ASAP” contact@extalio.com';
    contactInputs = [mailCommand];
    contactOutputs = [''];
    contactInputs.push("cat confirm_contact.txt");
    contactOutputs.push("We recieved your phone number successfully, we will call you soon")
    inputs = contactInputs;
    outputs = contactOutputs;
    commandPrefix = 'extalio@xpc:~$ ';
}

function runTimer(timer) {
    if (timer == 0) {
        inputElement.innerHTML = commandPrefix;
        simulateTerminal();
        return;
    }
    timer--;
    inputElement.innerHTML = timer;
    setTimeout(runTimer, 1000, timer);
}


// Order of simulation: 
// - Timer (runTimer)
// - Run commands as a candidata
// - Switch user from candidate to extalio
// - Run commands as extalio
// - At the end print ascii art of extalio logo
function simulateTerminal() {
    if (isContacting) {
        if (contactInputs.length == 0)
            return;
    }
    // finished simulation
    else if (extalioArt.length == 0)
        return;
    // print extalio ascii art
    else if (extalioInputs.length == 0) {
        outputElement.innerHTML = "";
        inputs = extalioArtCommand;
        outputs = extalioArt;
    }
    // switch user from candidate to extalio
    else if (candidateInputs.length == 0)
        switchUser();
    
    // run commands
    inputElement.innerHTML = commandPrefix;
    setTimeout(typeText, 1000);
}

function switchUser() {
    commandPrefix = "extalio@xpc:~$ "
    inputs = extalioInputs;
    outputs = extalioOutputs;
}

// simulate command typing in terminal
function typeText() {
    var inputText = inputs.shift();
    typeChar(inputText);
}

// use timeout between each char so it feels real
function typeChar(text) {
    if (!text) {
        setTimeout(enterText, 100);
        return;
    }
    inputElement.innerHTML += text.charAt(0);
    text = text.substr(1);
    setTimeout(typeChar, 90, text);
}

// simulate pressing enter to run the command
function enterText() {
    inputText = inputElement.innerHTML + "<br />";
    inputElement.innerHTML = "";
    outputElement.innerHTML += inputText;
    
    output = outputs.shift();
    outputLines = output.split("\n");
    printLines(outputLines);
}

// print command output, using timeout between each line so it feels real
function printLines(lines) {
    if (lines.length == 0) {
        outputElement.innerHTML += "<br />";
        outputElement.scrollTop = outputElement.scrollHeight;
        inputElement.innerHTML = commandPrefix;
        simulateTerminal();
        return;
    }
    
    outputElement.innerHTML += lines.shift();
    outputElement.innerHTML += "<br />";
    outputElement.scrollTop = outputElement.scrollHeight;
    setTimeout(printLines, 25, lines);
}

function toggleEmail() {
    email = document.getElementById("contact-email");
    button = document.getElementById("email-button");
    
    display = email.style.display || "none";
    if (display == "none") {
        email.style.display = "block";
        button.style.borderBottom = "solid 2px rgb(99, 255, 254)";
        button.style.marginBottom = 0;
    }
    else {
        email.style.display = "none";
        button.style.border = "";
        button.style.marginBottom = "2px";
    }
}

function onContactSubmit(form) {
    nextPage = "http://extalio.com/?" + form.name.value + "@" + form.phone.value;
    form._next.value = nextPage;
    return true;
}