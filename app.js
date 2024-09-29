// Function to generate a personalized study plan based on input
function createStudyPlan() {
    const subject = document.getElementById('subject').value;
    const score = parseInt(document.getElementById('score').value);
    const comfortLevel = parseInt(document.getElementById('comfortLevel').value);

    // Mock study plan based on score and comfort level
    let studyPlan = '';
    if (score < 60 || comfortLevel < 3) {
        studyPlan = `You should focus more on ${subject}. Allocate at least 5 more hours per week.`;
    } else {
        studyPlan = `You are doing well in ${subject}. Continue with your current study routine.`;
    }

    // Display the result
    document.getElementById('studyPlanOutput').innerText = studyPlan;
}

// Function to generate a question based on progress
function generateQuestion() {
    const questions = [
        "What is the derivative of a function?",
        "Explain the theory of relativity.",
        "What are the main causes of World War II?",
        "Write a poem in the style of Shakespeare."
    ];

    // Randomly select a question
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    document.getElementById('questionOutput').innerText = `Question: ${question}`;
}

// Function to simulate personalized feedback on an exam
function provideFeedback() {
    const examInput = document.getElementById('examInput').value;

    // Mock feedback based on content length
    let feedback = '';
    if (examInput.length < 50) {
        feedback = "Your answer is too short. Please provide more details.";
    } else {
        feedback = "Great answer! You have provided a comprehensive response.";
    }

    document.getElementById('feedbackOutput').innerText = feedback;
}
