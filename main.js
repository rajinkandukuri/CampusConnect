// main.js — safe helpers (no behavior changes)
(function () {
  if (typeof window.openUrl !== "function") {
    window.openUrl = function (u) {
      try {
        window.open(u, "_blank");
      } catch (e) {}
    };
  }
  if (typeof window.openRivier !== "function") {
    window.openRivier = function () {
      window.open("https://www.rivier.edu", "_blank");
    };
  }
  if (typeof window.showAlert !== "function") {
    window.showAlert = function () {
      alert("Your form has been submitted.");
    };
  }
  if (!window.__campusConnectBooted) {
    window.__campusConnectBooted = true;
  }
})();