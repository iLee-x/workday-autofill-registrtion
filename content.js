"use strict";

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  HTMLInputElement.prototype,
  "value"
).set;

function setReactValue(el, value) {
  if (!el) return;
  el.focus();
  nativeInputValueSetter.call(el, value);
  for (const type of ["input", "change", "blur"]) {
    el.dispatchEvent(new Event(type, { bubbles: true, cancelable: true }));
  }
}

function fillForm(config) {
  const email = document.querySelector('input[data-automation-id="email"]');
  if (!email || email.value !== "") return;

  const password = document.querySelector('input[data-automation-id="password"]');
  const verify = document.querySelector('input[data-automation-id="verifyPassword"]');
  const checkbox = document.querySelector('div[data-automation-id="checkbox"]');

  setReactValue(email, config.email);
  setReactValue(password, config.password);
  setReactValue(verify, config.password);

  if (checkbox && checkbox.getAttribute("aria-checked") !== "true") {
    checkbox.click();
  }
}

function tryFill() {
  chrome.storage.sync.get(["email", "password", "enabled"], (data) => {
    if (!data.enabled || !data.email || !data.password) return;
    fillForm(data);
  });
}

// Use MutationObserver instead of setInterval for better performance
const observer = new MutationObserver(() => tryFill());
observer.observe(document.body, { childList: true, subtree: true });

// Also try once on initial load
tryFill();
