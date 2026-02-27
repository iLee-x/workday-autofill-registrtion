"use strict";

const $ = (id) => document.getElementById(id);

chrome.storage.sync.get(["email", "password", "enabled"], (data) => {
  $("email").value = data.email || "";
  $("password").value = data.password || "";
  $("enabled").checked = data.enabled !== false;
});

$("save").addEventListener("click", () => {
  chrome.storage.sync.set(
    {
      email: $("email").value.trim(),
      password: $("password").value,
      enabled: $("enabled").checked,
    },
    () => {
      $("status").textContent = "Saved!";
      setTimeout(() => ($("status").textContent = ""), 2000);
    }
  );
});
