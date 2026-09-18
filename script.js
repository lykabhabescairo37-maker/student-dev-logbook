const sidemenu = document.getElementById("sidemenu");
const mainTitle = document.getElementById("mainTitle");
const mainDisplay = document.getElementById("mainDisplay");
const landingPage = document.getElementById("landingPage");
const enterBtn = document.getElementById("enterBtn");

enterBtn.onclick = () => {
    landingPage.style.display = "none";
    document.body.style.overflow = "auto";
};

/* --- SIDE MENU TOGGLE --- */
document.getElementById("toggleBtn").onclick = () => {
    sidemenu.style.display = sidemenu.style.display === "block" ? "none" : "block";
};

/* --- MASTER EXERCISE TOGGLE --- */
document.getElementById("btnMainExercises").onclick = () => {
    const sub = document.getElementById("exerciseSubmenu");
    sub.style.display = sub.style.display === "none" ? "block" : "none";
    document.getElementById("btnMainExercises").innerText = sub.style.display === "block" ? "Hide Exercises ▴" : "View Exercises ▾";
};

/* --- NAVIGATION --- */
document.getElementById("btnHome").onclick = () => renderHome();
document.getElementById("btnAbout").onclick = () => renderPage("About", "MCO-1 Project created by Kevin Termo.");
document.getElementById("btnContact").onclick = () => renderPage("Contact", "Email: kevintermo@gmail.com<br>Location: Calbayog City");

function renderHome() {
    mainTitle.innerText = "Greetings!";
    mainDisplay.innerHTML = `<p>Welcome to the ITE-6 Portfolio of Kevin Termo.</p><button class="vintage-btn" style="width:auto; margin-top:10px;" onclick="alert('Welcome!')">Click Me</button>`;
}

function renderPage(title, text) {
    mainTitle.innerText = title;
    mainDisplay.innerHTML = `<p>${text}</p>`;
}

/* --- EXERCISE 2 MENU & LOGIC --- */
document.getElementById("showEx2").onclick = function() {
    const list = document.getElementById("ex2List");
    if (list.innerHTML !== "") return list.innerHTML = "";
    list.innerHTML = `
        <button class="act-btn" onclick="ex2_act1()">Act 1: Welcome</button>
        <button class="act-btn" onclick="ex2_act2()">Act 2: Vars</button>
        <button class="act-btn" onclick="ex2_act3()">Act 3: Math</button>
        <button class="act-btn" onclick="ex2_act4()">Act 4: Prompt</button>
        <button class="act-btn" onclick="ex2_act5()">Act 5: Eligible</button>
        <button class="act-btn" onclick="ex2_act6()">Act 6: Loops</button>
        <button class="act-btn" onclick="ex2_act7()">Act 7: Alert</button>
    `;
};

function ex2_act1() { alert("Welcome to JavaScript!"); }
function ex2_act2() {
    mainTitle.innerText = "Exercise 2 - Activity 2";
    mainDisplay.innerHTML = `<input id="inName" placeholder="Name"><button class="vintage-btn" onclick="document.getElementById('out2').innerText='Hello '+document.getElementById('inName').value">Show</button><div id="out2"></div>`;
}

function ex2_act3() {
    mainTitle.innerText = "Exercise 2 - Activity 3 (Math)";
    mainDisplay.innerHTML = `
        <p>Enter two numbers to see the results:</p>
        <input type="number" id="num1" placeholder="First Number">
        <input type="number" id="num2" placeholder="Second Number">
        <button class="vintage-btn" onclick="processMath()">Calculate</button>
        <div id="mathResult" style="margin-top: 15px; text-align: left; line-height: 1.8;"></div>
    `;
}

function processMath() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let resDiv = document.getElementById("mathResult");
    if (isNaN(a) || isNaN(b)) { resDiv.innerHTML = "Please enter valid numbers."; return; }
    let sum = a + b;
    let product = a * b;
    let quotient = b !== 0 ? (a / b).toFixed(2) : "Undefined";
    resDiv.innerHTML = `<b>Sum:</b> ${sum}<br><b>Product:</b> ${product}<br><b>Quotient:</b> ${quotient}`;
}

function ex2_act4() { let n = prompt("Name:"); if(n) alert("Hi " + n); }
function ex2_act5() { let a = prompt("Age?"); alert(a >= 20 ? "Eligible" : "Not Eligible"); }

function ex2_act6() {
    mainTitle.innerText = "Exercise 2 - Activity 6: Loops";
    let fRes = ""; let wRes = "";
    for (let i = 1; i <= 10; i++) fRes += i + (i < 10 ? ", " : "");
    let j = 10; while (j >= 1) { wRes += j + (j > 1 ? ", " : ""); j--; }
    mainDisplay.innerHTML = `<div style="text-align: left;"><p><b>For Loop (1-10):</b></p><p style="background: #fff; padding: 10px; border-radius: 4px; border-left: 5px solid #5d4037; margin-bottom: 15px;">${fRes}</p><p><b>While Loop (10-1):</b></p><p style="background: #fff; padding: 10px; border-radius: 4px; border-left: 5px solid #5d4037;">${wRes}</p></div>`;
}
function ex2_act7() { alert("Activity 7 Triggered!"); }

/* --- EXERCISE 3 MENU & LOGIC --- */
document.getElementById("showEx3").onclick = function() {
    const list = document.getElementById("ex3List");
    if (list.innerHTML !== "") return list.innerHTML = "";
    list.innerHTML = `
        <button class="act-btn" onclick="ex3_act1()">Act 1: BG Color</button>
        <button class="act-btn" onclick="ex3_act2()">Act 2: Dark Mode</button>
        <button class="act-btn" onclick="ex3_act3()">Act 3: Add Item</button>
        <button class="act-btn" onclick="ex3_act4()">Act 4: Remove Para</button>
        <button class="act-btn" onclick="ex3_act5()">Act 5: Key Counter</button>
        <button class="act-btn" onclick="ex3_act6()">Act 6: Calculator</button>
        <button class="act-btn" onclick="ex3_act7()">Act 7: Image Swap</button>
        <button class="act-btn" onclick="ex3_act8()">Act 8: To-Do List</button>
    `;
};

function ex3_act1() {
    mainTitle.innerText = "Exercise 3 - Activity 1: Background Color";
    mainDisplay.innerHTML = '<button id="cb" class="vintage-btn">Cycle Background Color</button>';
    const colors = ["#3498db", "#ff69b4", "#2ecc71", "#8d6e63"];
    let i = 0;
    document.getElementById("cb").onclick = () => {
        document.body.style.backgroundColor = colors[i];
        i = (i+1) % colors.length;
    };
}
function ex3_act2() {
    mainTitle.innerText = "Toggle Dark Mode";
    mainDisplay.innerHTML = '<button class="vintage-btn" onclick="document.body.classList.toggle(\'dark-mode\')">Switch Theme</button>';
}
function ex3_act3() {
    mainTitle.innerText = "Add List Item";
    mainDisplay.innerHTML = '<input id="itemIn"><button class="vintage-btn" onclick="let d=document.createElement(\'div\'); d.innerText=document.getElementById(\'itemIn\').value; document.getElementById(\'uL\').appendChild(d)">Add</button><div id="uL"></div>';
}
function ex3_act4() {
    mainTitle.innerText = "Remove Element";
    mainDisplay.innerHTML = '<div id="pC"><p>Paragraph 1</p><p>Paragraph 2</p></div><button class="vintage-btn" onclick="if(document.getElementById(\'pC\').lastElementChild) document.getElementById(\'pC\').lastElementChild.remove()">Remove Last</button>';
}
function ex3_act5() {
    mainTitle.innerText = "Key Character Counter";
    mainDisplay.innerHTML = '<input id="ki" onkeyup="document.getElementById(\'kc\').innerText=this.value.length"><p>Character Count: <span id="kc">0</span></p>';
}
function ex3_act6() {
    mainTitle.innerText = "Exercise 3 Calculator";
    mainDisplay.innerHTML = '<input id="v1"> + <input id="v2"><button class="vintage-btn" onclick="document.getElementById(\'rs\').innerText=Number(document.getElementById(\'v1\').value)+Number(document.getElementById(\'v2\').value)">Add</button><p id="rs"></p>';
}
function ex3_act7() {
    mainTitle.innerText = "Image Switcher";
    mainDisplay.innerHTML = '<button class="vintage-btn" id="sb">Swap Image</button><br><img id="targetImg" src="images/3.jpg" style="width:200px; margin-top:10px;">';
    document.getElementById("sb").onclick = () => {
        let img = document.getElementById("targetImg");
        img.src = img.src.includes("3.jpg") ? "images/4.jpg" : "images/3.jpg";
    };
}
function ex3_act8() {
    mainTitle.innerText = "To-Do List Manager";
    mainDisplay.innerHTML = '<div><input id="tIn" placeholder="Task..."><button id="tAdd" class="vintage-btn">Add</button><ul id="tL"></ul></div>';
    document.getElementById("tAdd").onclick = () => {
        let val = document.getElementById("tIn").value;
        if(val.trim() !== "") { let li = document.createElement("li"); li.innerText = val; document.getElementById("tL").appendChild(li); document.getElementById("tIn").value = ""; }
    };
}

/* --- EXERCISE 4 MENU & LOGIC --- */
document.getElementById("showEx4").onclick = function() {
    const list = document.getElementById("ex4List");
    if (list.innerHTML !== "") return list.innerHTML = "";
    list.innerHTML = `<button class="act-btn" onclick="ex4_calculator()">Activity: Grade Calc</button>`;
};

function ex4_calculator() {
    mainTitle.innerText = "Exercise 4: Grade Calculator";
    mainDisplay.innerHTML = `
        <div style="text-align: left;">
            <!-- NUMBER OF ASSESSMENTS SECTION -->
            <div class="input-section">
                <h4>📊 Number of Assessments</h4>
                <div class="num-items-section">
                    <div class="input-group">
                        <label>Number of Quizzes:</label>
                        <input type="number" id="numQuizzes" placeholder="Enter number of quizzes" min="1" max="20" value="3">
                    </div>
                    <div class="input-group">
                        <label>Number of Exams:</label>
                        <input type="number" id="numExams" placeholder="Enter number of exams" min="1" max="10" value="2">
                    </div>
                </div>
                <button id="generateInputsBtn" class="secondary-btn">Generate Input Fields</button>
            </div>

            <!-- QUIZ SECTION -->
            <div class="input-section">
                <h4>📝 Quiz Scores (%)</h4>
                <div id="quizInputs">
                    <!-- Dynamic Quiz Items Will Be Generated Here -->
                </div>
                <div class="input-group">
                    <label>Average Quiz Score: <span id="quizAverage">0</span>%</label>
                </div>
            </div>

            <!-- EXAM SECTION -->
            <div class="input-section">
                <h4>📚 Exam Scores (%)</h4>
                <div id="examInputs">
                    <!-- Dynamic Exam Items Will Be Generated Here -->
                </div>
                <div class="input-group">
                    <label>Average Exam Score: <span id="examAverage">0</span>%</label>
                </div>
            </div>

            <!-- MCO SECTION -->
            <div class="input-section">
                <h4>📊 MCO Scores</h4>
                <div class="input-group">
                    <label>MCO 1 (0-100):</label>
                    <input type="number" id="mco1" placeholder="Enter MCO 1 score" min="0" max="100">
                </div>
                <div class="input-group">
                    <label>MCO 2 (0-100):</label>
                    <input type="number" id="mco2" placeholder="Enter MCO 2 score" min="0" max="100">
                </div>
                <div class="input-group">
                    <label>Average MCO Score: <span id="mcoAverage">0</span>%</label>
                </div>
            </div>

            <!-- BUTTONS -->
            <div class="button-group">
                <button id="calculateBtn" class="secondary-btn">CALCULATE GRADE</button>
                <button id="resetBtn" class="secondary-btn" style="background: #8d6e63;">RESET</button>
            </div>

            <!-- RESULTS -->
            <div id="resultDisplay" class="output-display"></div>
        </div>
    `;
    
    // Initialize the Exercise 4 logic after HTML is injected
    setTimeout(initEx4Logic, 100);
}

/*** EXERCISE 4 ACTIVITIES - ARROW FUNCTIONS (FIXED)
 */
function initEx4Logic() {
    // Number of Items Inputs
    const numQuizzesInput = document.getElementById("numQuizzes");
    const numExamsInput = document.getElementById("numExams");
    const generateInputsBtn = document.getElementById("generateInputsBtn");

    // Quiz Inputs
    const quizInputsContainer = document.getElementById("quizInputs");
    const quizAverageDisplay = document.getElementById("quizAverage");

    // Exam Inputs
    const examInputsContainer = document.getElementById("examInputs");
    const examAverageDisplay = document.getElementById("examAverage");

    // MCO Inputs
    const mco1 = document.getElementById("mco1");
    const mco2 = document.getElementById("mco2");
    const mcoAverageDisplay = document.getElementById("mcoAverage");

    // Result Display
    const resultDisplay = document.getElementById("resultDisplay");
    const calculateBtn = document.getElementById("calculateBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Generate Quiz Input Fields (percentage 0-100)
    const generateQuizInputs = () => {
        const numQuizzes = parseInt(numQuizzesInput.value) || 3;
        quizInputsContainer.innerHTML = "";
        
        for (let i = 1; i <= numQuizzes; i++) {
            const quizItem = document.createElement("div");
            quizItem.className = "quiz-item";
            quizItem.innerHTML = `
                <div class="input-group">
                    <label>Quiz ${i} (%)</label>
                    <input type="number" class="quiz-score" placeholder="e.g., 85" min="0" max="100">
                </div>
            `;
            quizInputsContainer.appendChild(quizItem);
        }
        
        // Re-attach event listeners
        attachQuizEventListeners();
    };

            // Generate Exam Input Fields (percentage 0-100)
    const generateExamInputs = () => {
        const numExams = parseInt(numExamsInput.value) || 2;
        examInputsContainer.innerHTML = "";
        
        for (let i = 1; i <= numExams; i++) {
            const examItem = document.createElement("div");
            examItem.className = "exam-item";
            examItem.innerHTML = `
                <div class="input-group">
                    <label>Exam ${i} (%)</label>
                    <input type="number" class="exam-score" placeholder="e.g., 78" min="0" max="100">
                </div>
            `;
            examInputsContainer.appendChild(examItem);
        }
        
        // Re-attach event listeners
        attachExamEventListeners();
    };

    // Attach Quiz Event Listeners
    const attachQuizEventListeners = () => {
        const newQuizScores = document.querySelectorAll(".quiz-score");
        newQuizScores.forEach(input => {
            input.addEventListener("input", calculateQuizAverage);
        });
    };

    // Attach Exam Event Listeners
    const attachExamEventListeners = () => {
        const newExamScores = document.querySelectorAll(".exam-score");
        newExamScores.forEach(input => {
            input.addEventListener("input", calculateExamAverage);
        });
    };

    // Calculate Quiz Average (percentage based on scores out of 50)
    const calculateQuizAverage = () => {
        const quizScores = Array.from(document.querySelectorAll(".quiz-score"))
            .map(input => parseFloat(input.value) || 0)
            .filter(value => value >= 0);
        const count = quizScores.length;
        if (count === 0) {
            quizAverageDisplay.textContent = "0";
            return;
        }
        const totalScore = quizScores.reduce((a, b) => a + b, 0);
        const average = totalScore / count; // already percentage
        quizAverageDisplay.textContent = average.toFixed(2);
    };

    // Calculate Exam Average (percentage based on scores out of 50)
    const calculateExamAverage = () => {
        const examScores = Array.from(document.querySelectorAll(".exam-score"))
            .map(input => parseFloat(input.value) || 0)
            .filter(value => value >= 0);
        const count = examScores.length;
        if (count === 0) {
            examAverageDisplay.textContent = "0";
            return;
        }
        const totalScore = examScores.reduce((a, b) => a + b, 0);
        const average = totalScore / count; // already percentage
        examAverageDisplay.textContent = average.toFixed(2);
    };

    // Calculate MCO Average
    const calculateMcoAverage = () => {
        const mco1Value = parseFloat(mco1.value) || 0;
        const mco2Value = parseFloat(mco2.value) || 0;
        
        if (mco1Value < 0 || mco1Value > 100 || mco2Value < 0 || mco2Value > 100) {
            mcoAverageDisplay.textContent = "Invalid";
            return;
        }
        
        const average = (mco1Value + mco2Value) / 2;
        mcoAverageDisplay.textContent = average.toFixed(2);
    };

    // Calculate Final Grade
    const calculateGrade = () => {
        // gather quiz scores (each out of 50)
        const quizScores = Array.from(document.querySelectorAll(".quiz-score"))
            .map(input => parseFloat(input.value) || 0)
            .filter(value => value >= 0);
        const quizCount = quizScores.length;
        const quizAverage = quizCount > 0 ? (quizScores.reduce((a, b) => a + b, 0) / quizCount) : 0;

        // gather exam scores (each out of 50)
        const examScores = Array.from(document.querySelectorAll(".exam-score"))
            .map(input => parseFloat(input.value) || 0)
            .filter(value => value >= 0);
        const examCount = examScores.length;
        const examAverage = examCount > 0 ? (examScores.reduce((a, b) => a + b, 0) / examCount) : 0;

        // Get MCO scores
        const mco1Value = parseFloat(mco1.value) || 0;
        const mco2Value = parseFloat(mco2.value) || 0;
        const mcoAverage = (mco1Value + mco2Value) / 2;

        // Validate inputs
        if (quizCount === 0 || examCount === 0 || (mco1Value === 0 && mco2Value === 0)) {
            resultDisplay.innerHTML = `
                <p class="error">⚠️ Please enter all required scores!</p>
            `;
            return;
        }

        // Calculate Final Grade: Quiz (20%) + Exam (30%) + MCO (50%)
        // the weights are fixed as requested (20% overall quiz, 30% overall exam)
        const finalGrade = (quizAverage * 0.20) + (examAverage * 0.30) + (mcoAverage * 0.50);
        const roundedGrade = Math.round(finalGrade);

        // Determine Grade Equivalent
        let gradeEquivalent = "";
        if (roundedGrade >= 90) gradeEquivalent = "A";
        else if (roundedGrade >= 80) gradeEquivalent = "B";
        else if (roundedGrade >= 70) gradeEquivalent = "C";
        else if (roundedGrade >= 60) gradeEquivalent = "D";
        else gradeEquivalent = "F";

        // Prepare individual percentage arrays for display
        const quizPercentages = quizScores.map(score => (score / 50) * 100);
        const examPercentages = examScores.map(score => (score / 50) * 100);

        // Display Results
        resultDisplay.innerHTML = `
            <p class="success">✓ Grade Calculated Successfully!</p>
            <p><strong>Final Grade:</strong> ${roundedGrade}</p>
            <p><strong>Grade Equivalent:</strong> <span class="grade-badge">${gradeEquivalent}</span></p>
            <hr style="border: 1px solid #5d4037; margin: 10px 0;">
            <p><strong>Breakdown:</strong></p>
            <p>Quiz Average (${quizCount} quizzes): ${quizAverage.toFixed(2)}% × 20% = ${(quizAverage * 0.20).toFixed(2)}</p>
            <p>Exam Average (${examCount} exams): ${examAverage.toFixed(2)}% × 30% = ${(examAverage * 0.30).toFixed(2)}</p>
            <p>MCO Average (MCO 1 + MCO 2): ${mcoAverage.toFixed(2)}% × 50% = ${(mcoAverage * 0.50).toFixed(2)}</p>
            <hr style="border: 1px solid #5d4037; margin: 10px 0;">
            <p><strong>Individual Scores:</strong></p>
            <p>Quiz Percentages: ${quizPercentages.map(p => p.toFixed(2) + "%").join(", ")}</p>
            <p>Exam Percentages: ${examPercentages.map(p => p.toFixed(2) + "%").join(", ")}</p>
            <p>MCO 1: ${mco1Value} | MCO 2: ${mco2Value}</p>
        `;
    };

    // Reset Form
    const resetForm = () => {
        document.querySelectorAll(".quiz-score").forEach(input => input.value = "");
        document.querySelectorAll(".exam-score").forEach(input => input.value = "");
        mco1.value = "";
        mco2.value = "";
        quizAverageDisplay.textContent = "0";
        examAverageDisplay.textContent = "0";
        mcoAverageDisplay.textContent = "0";
        resultDisplay.innerHTML = "";
    };

    // Event Listeners
    numQuizzesInput.addEventListener("input", generateQuizInputs);
    numExamsInput.addEventListener("input", generateExamInputs);
    generateInputsBtn.addEventListener("click", () => {
        generateQuizInputs();
        generateExamInputs();
    });

    // Initial event listeners for default inputs
    attachQuizEventListeners();
    attachExamEventListeners();

    mco1.addEventListener("input", calculateMcoAverage);
    mco2.addEventListener("input", calculateMcoAverage);

    calculateBtn.addEventListener("click", calculateGrade);
    resetBtn.addEventListener("click", resetForm);
}