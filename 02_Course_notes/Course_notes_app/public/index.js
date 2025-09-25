function copyCommand(button) {
    const command = button.previousElementSibling.innerText;
    navigator.clipboard.writeText(command).then(() => {
        button.style.backgroundColor = "#339933";
        setTimeout(() => (button.style.backgroundColor = "#f3f4f6"), 1500);
    });
}

function navigateClassTopics(topic) {

    const currentActive = document.querySelector('.subjects.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    const subject = document.querySelector(`[data-topic="${topic}"]`);
    console.log(subject);

    subject.classList.add('active');

}