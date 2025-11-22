document.addEventListener("DOMContentLoaded", function () {
  // Form elements
  const contactForm = document.getElementById("contact-form");
  const formContent = document.getElementById("form-content");
  const successMessage = document.getElementById("success-message");
  const newInquiryButton = document.getElementById("new-inquiry-button");
  const submitButton = document.getElementById("submit-button");
  const submitText = document.getElementById("submit-text");
  const submittingText = document.getElementById("submitting-text");

  // Form fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const descriptionInput = document.getElementById("description");
  const sizeSelect = document.getElementById("size");
  const locationSelect = document.getElementById("location");
  const fileInput = document.getElementById("file");

  // Error messages
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const dateError = document.getElementById("date-error");
  const timeError = document.getElementById("time-error");
  const descriptionError = document.getElementById("description-error");
  const sizeError = document.getElementById("size-error");
  const locationError = document.getElementById("location-error");

  // Form submission state
  let isSubmitting = false;

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);

  // Form validation function
  function validateForm() {
    let isValid = true;

    // Reset all error messages
    const errorElements = [
      nameError,
      emailError,
      phoneError,
      dateError,
      timeError,
      descriptionError,
      sizeError,
      locationError,
    ];

    errorElements.forEach((element) => {
      element.style.display = "none";
      element.textContent = "";
    });

    // Remove error class from all inputs
    const formInputs = [
      nameInput,
      emailInput,
      phoneInput,
      dateInput,
      timeInput,
      descriptionInput,
      sizeSelect,
      locationSelect,
    ];

    formInputs.forEach((input) => {
      input.classList.remove("error");
    });

    // Validate name
    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required";
      nameError.style.display = "block";
      nameInput.classList.add("error");
      isValid = false;
    }

    // Validate email
    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      emailInput.classList.add("error");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email";
      emailError.style.display = "block";
      emailInput.classList.add("error");
      isValid = false;
    }

    // Validate phone
    if (!phoneInput.value.trim()) {
      phoneError.textContent = "Phone number is required";
      phoneError.style.display = "block";
      phoneInput.classList.add("error");
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneInput.value.replace(/\D/g, ""))) {
      phoneError.textContent = "Please enter a valid 10-digit phone number";
      phoneError.style.display = "block";
      phoneInput.classList.add("error");
      isValid = false;
    }

    // Validate date
    if (!dateInput.value) {
      dateError.textContent = "Preferred date is required";
      dateError.style.display = "block";
      dateInput.classList.add("error");
      isValid = false;
    } else {
      const selectedDate = new Date(dateInput.value);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      if (selectedDate < currentDate) {
        dateError.textContent = "Please select a future date";
        dateError.style.display = "block";
        dateInput.classList.add("error");
        isValid = false;
      }
    }

    // Validate time
    if (!timeInput.value) {
      timeError.textContent = "Preferred time is required";
      timeError.style.display = "block";
      timeInput.classList.add("error");
      isValid = false;
    }

    // Validate description
    if (!descriptionInput.value.trim()) {
      descriptionError.textContent = "Tattoo description is required";
      descriptionError.style.display = "block";
      descriptionInput.classList.add("error");
      isValid = false;
    }

    // Validate size
    if (!sizeSelect.value) {
      sizeError.textContent = "Size preference is required";
      sizeError.style.display = "block";
      sizeSelect.classList.add("error");
      isValid = false;
    }

    // Validate location
    if (!locationSelect.value) {
      locationError.textContent = "Body location is required";
      locationError.style.display = "block";
      locationSelect.classList.add("error");
      isValid = false;
    }

    return isValid;
  }

  // Format phone number as user types
  phoneInput.addEventListener("input", function (e) {
    // Get only the digits
    let digits = this.value.replace(/\D/g, "");

    // Limit to 10 digits
    digits = digits.substring(0, 10);

    // Create the regex dynamically using RegExp
    const regex = new RegExp(/^(\d{3})(\d{3})(\d{0,4})$/);

    // Format the number
    this.value = digits.replace(regex, (match, p1, p2, p3) =>
      p3 ? `(${p1}) ${p2}-${p3}` : p2 ? `(${p1}) ${p2}` : `(${p1}`
    );
  });

  // Clear error when user types or selects
  const formInputs = [
    nameInput,
    emailInput,
    phoneInput,
    dateInput,
    timeInput,
    descriptionInput,
    sizeSelect,
    locationSelect,
  ];

  formInputs.forEach((input) => {
    input.addEventListener("input", function () {
      // Find the associated error element
      const fieldId = this.id;
      const errorElement = document.getElementById(`${fieldId}-error`);

      if (errorElement) {
        errorElement.style.display = "none";
        this.classList.remove("error");
      }
    });
  });

  // Preview uploaded image
  fileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file && file.type.startsWith("image/")) {
      // If there's an existing preview, remove it
      const existingPreview = document.getElementById("image-preview");
      if (existingPreview) {
        existingPreview.remove();
      }

      // Create image preview
      const preview = document.createElement("div");
      preview.id = "image-preview";

      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);

      preview.appendChild(img);

      // Add preview after the file help text
      document.getElementById("file-help").after(preview);
    }
  });

  // Form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) return;

    // Show submitting state
    isSubmitting = true;
    submitText.style.display = "none";
    submittingText.style.display = "flex";
    submitButton.disabled = true;

    // Save form data to localStorage
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      date: dateInput.value,
      time: timeInput.value,
      description: descriptionInput.value,
      size: sizeSelect.value,
      location: locationSelect.value,
      timestamp: new Date().toISOString(),
    };

    // Get existing submissions or initialize empty array
    const existingSubmissions = JSON.parse(
      localStorage.getItem("tattooFormSubmissions") || "[]"
    );
    existingSubmissions.push(formData);
    localStorage.setItem(
      "tattooFormSubmissions",
      JSON.stringify(existingSubmissions)
    );

    // Simulate form submission with a delay
    setTimeout(function () {
      // Hide form and show success message
      formContent.style.display = "none";
      successMessage.style.display = "block";

      // Reset form
      contactForm.reset();

      // Remove image preview if exists
      const existingPreview = document.getElementById("image-preview");
      if (existingPreview) {
        existingPreview.remove();
      }

      // Reset submission state
      isSubmitting = false;
      submitText.style.display = "flex";
      submittingText.style.display = "none";
      submitButton.disabled = false;
    }, 1500);

    alert("Thank you for booking with us. See you soon!");
    window.location.href = "index.html";
  });

  // New inquiry button
  newInquiryButton.addEventListener("click", function () {
    successMessage.style.display = "none";
    formContent.style.display = "block";
  });

  document
    .getElementById("mobile-nav-toggle")
    .addEventListener("click", function () {
      document.getElementById("nav-1").classList.add("active");
      document.getElementById("mobile-nav-toggle").style.display = "none";
      document.getElementById("mobile-nav-close").style.display = "block";
    });

  // Add this to your HTML before the closing </body> tag
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuButton = document.getElementById("menu-button");

    // Change menu icon when toggled
    menuToggle.addEventListener("change", function () {
      if (this.checked) {
        menuButton.innerHTML = "✕"; // Change to X when open
      } else {
        menuButton.innerHTML = "☰"; // Change back to hamburger when closed
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const nav = document.getElementById("nav-1");
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
        menuToggle.checked = false;
        menuButton.innerHTML = "☰";
      }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        menuToggle.checked = false;
        menuButton.innerHTML = "☰";
      }
    });
  });
});
