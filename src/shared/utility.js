export const secondsToHms = (d) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + ":" : "";
  var mDisplay = m > 0 ? m + ":" : m === 0 ? "00:" : "00:";
  var sDisplay = s > 0 ? s : s === 0 ? "00" : "";

  if (hDisplay > 0 && hDisplay <= 9) hDisplay = "0" + hDisplay;
  if (mDisplay > 0 && mDisplay <= 9) mDisplay = "0" + mDisplay;
  if (sDisplay > 0 && sDisplay <= 9) sDisplay = "0" + sDisplay;
  return hDisplay + mDisplay + sDisplay;
};
