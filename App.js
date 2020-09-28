const form = document.querySelector("form");
const SubmitButton = document.querySelector(".button-primary");

const woodText = document.querySelector(".woodText");
const stoneText = document.querySelector(".stoneText");
const metalText = document.querySelector(".metalText");
const hqmetalText = document.querySelector(".hqmetalText");

const roundToHundred = (val) => {
  return Math.round(val * 10000) / 10000;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Data = new FormData(form);

  const stoneForm = Data.get("stone") == "" ? "0" : Data.get("stone");
  const metalForm = Data.get("metal") == "" ? "0" : Data.get("metal");
  const woodForm = Data.get("wood") == "" ? "0" : Data.get("wood");
  const hqmetalForm = Data.get("hqmetal") == "" ? "0" : Data.get("hqmetal");
  const ServerStackSizeForm = Data.get("stacksize") == "" ? "0" : Data.get("stacksize");

  const stone = parseInt(stoneForm);
  const metal = parseInt(metalForm);
  const wood = parseInt(woodForm);
  const highQuality = parseInt(hqmetalForm);

  let ServerStackSize = parseInt(ServerStackSizeForm);
  const TCSlots = 20;
  const TotalSize = TCSlots * ServerStackSize;
  const total = stone + metal + wood + highQuality;

  const stonePercent = roundToHundred(stone / total);
  const metalscapsPercent = roundToHundred(metal / total);
  const woodPercent = roundToHundred(wood / total);
  const highQualityPercent = roundToHundred(highQuality / total);

  const requiredStone = Math.round(TotalSize * stonePercent);
  const requiredmetalscaps = Math.round(TotalSize * metalscapsPercent);
  const requiredwood = Math.round(TotalSize * woodPercent);
  const requiredHQ = Math.round(TotalSize * highQualityPercent);

  let woodStr = `Wood: ${isNaN(requiredwood) ? 0 : requiredwood}`;
  let stoneStr = `Stone: ${isNaN(requiredStone) ? 0 : requiredStone}`;
  let metalStr = `Metal: ${isNaN(requiredmetalscaps) ? 0 : requiredmetalscaps}`;
  let hqmetalStr = `High Quality Metal: ${isNaN(requiredHQ) ? 0 : requiredHQ}`;

  woodText.innerHTML = woodStr;
  stoneText.innerHTML = stoneStr;
  metalText.innerHTML = metalStr;
  hqmetalText.innerHTML = hqmetalStr;
});
