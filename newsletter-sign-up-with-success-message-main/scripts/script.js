const successMessage = document.getElementById("success-message");
const formContainer = document.getElementById("form-container");
const form = document.getElementById("form");
const dismissButton = document.getElementById("dismiss-btn");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    form.classList.remove("error");
    if (formValues.email) {
        toggleSuccessMessage();
        toggleForm();
    } else {
        form.classList.add("error");
    }
});
dismissButton.addEventListener("click", (event) => {
    toggleSuccessMessage();
    toggleForm();
});
function toggleSuccessMessage() {
    if (successMessage.classList.contains("show")) {
        successMessage.classList.remove("show");
    } else {
        successMessage.classList.add("show");
    }
}

function toggleForm() {
    if (formContainer.classList.contains("show")) {
        formContainer.classList.remove("show");
    } else {
        formContainer.classList.add("show");
    }
}
