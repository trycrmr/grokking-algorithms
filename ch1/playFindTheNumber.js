import findTheNumber from "./findTheNumber.js";
import simpleSearch from "./simpleSearch.js";
import binarySearch from "./binarySearch.js";

const log = (msg) => console.info(msg);

(async () => {
  const sSFtn = new findTheNumber(100, "Simple Search");
  const bSFtn = new findTheNumber(100, "Binary Search");
  await simpleSearch(sSFtn).then(() => log(sSFtn));
  await binarySearch(bSFtn).then(() => log(bSFtn));
})();
