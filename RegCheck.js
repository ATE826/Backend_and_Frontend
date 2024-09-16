function validateForm() {
    const form = document.getElementById("myForm");
    const inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
    const checkbox = form.querySelector("input[type='checkbox']");
    let valid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
        }
    });

    if (!checkbox.checked) {
        valid = false;
    }

    document.getElementById("submitBtn").disabled = !valid;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    form.addEventListener("input", validateForm);
    form.addEventListener("change", validateForm);
    validateForm(); // Initial validation
});