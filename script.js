const form = document.querySelector("#enquiryForm");
const fields = [
  document.querySelector("#fullName"),
  document.querySelector("#email"),
  document.querySelector("#mobile"),
  document.querySelector("#service"),
  document.querySelector("#requirement")
];
const message = document.querySelector("#formMessage");
const submitButton = document.querySelector("#submitButton");
const buttonText = submitButton.querySelector(".button-text");
const copyButton = document.querySelector("#copyCss");
const cssSnippet = document.querySelector("#cssSnippet");
const toast = document.querySelector("#toast");
let toastTimer;

function showMessage(text, success = false) {
  message.textContent = text;
  message.classList.toggle("success", success);
}

function setLoading(loading) {
  submitButton.disabled = loading;
  submitButton.classList.toggle("loading", loading);
  buttonText.textContent = loading ? "SUBMITTING..." : "SUBMIT ENQUIRY";
}

fields.forEach(field => {
  field.addEventListener("input", () => field.classList.remove("invalid"));
  field.addEventListener("change", () => field.classList.remove("invalid"));
});

form.addEventListener("submit", event => {
  event.preventDefault();
  showMessage("");
  fields.forEach(field => field.classList.remove("invalid"));

  const [name, email, mobile, service, requirement] = fields;
  const missing = fields.filter(field => !field.value.trim());

  if (missing.length) {
    missing.forEach(field => field.classList.add("invalid"));
    showMessage("Please complete all fields.");
    missing[0].focus();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("invalid");
    showMessage("Please enter a valid email address.");
    email.focus();
    return;
  }

  const digits = mobile.value.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    mobile.classList.add("invalid");
    showMessage("Please enter a valid mobile number.");
    mobile.focus();
    return;
  }

  setLoading(true);
  window.setTimeout(() => {
    setLoading(false);
    showMessage(`Thank you, ${name.value.trim()}! Your enquiry is ready. Connect a backend to receive it.`, true);
    form.reset();
  }, 900);
});

function notify(text) {
  toast.textContent = text;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1500);
}

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(cssSnippet.textContent);
    notify("CSS copied to clipboard");
  } catch {
    const area = document.createElement("textarea");
    area.value = cssSnippet.textContent;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    notify(copied ? "CSS copied to clipboard" : "Clipboard unavailable");
  }
});
