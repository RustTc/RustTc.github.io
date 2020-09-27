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

  const stoneForm = Data.get("stone");
  const metalForm = Data.get("metal");
  const woodForm = Data.get("wood");
  const hqmetalForm = Data.get("hqmetal");
  const ServerStackSizeForm = Data.get("stacksize");

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

  let woodStr = `Wood: ${requiredwood}`;
  let stoneStr = `Stone: ${requiredStone}`;
  let metalStr = `Metal: ${requiredmetalscaps}`;
  let hqmetalStr = `High Quality Metal: ${requiredHQ}`;

  woodText.innerHTML = woodStr;
  stoneText.innerHTML = stoneStr;
  metalText.innerHTML = metalStr;
  hqmetalText.innerHTML = hqmetalStr;
});
