const colorBaseInput = document.getElementById("colorBase") as HTMLInputElement | null;
const colorTopInput = document.getElementById("colorTop") as HTMLInputElement | null;

if (!colorBaseInput || !colorTopInput) {
  throw new Error("Die Farbauswahl-Elemente wurden nicht gefunden.");
}

const root = document.documentElement;

const updateBaseColor = (): void => {
  root.style.setProperty("--logo-base-color", colorBaseInput.value);
};

const updateTopColor = (): void => {
  root.style.setProperty("--logo-top-color", colorTopInput.value);
};

colorBaseInput.addEventListener("input", updateBaseColor);
colorTopInput.addEventListener("input", updateTopColor);

updateBaseColor();
updateTopColor();