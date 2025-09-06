function copyCommand(button) {
    const command = button.previousElementSibling.innerText;
     navigator.clipboard.writeText(command).then(() => {    
      button.style.backgroundColor = "#339933";
      setTimeout(() => (button.style.backgroundColor = "#f3f4f6"), 1500);
    });
}