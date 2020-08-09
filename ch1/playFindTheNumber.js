import findTheNumber from "./findTheNumber.js";
import simpleSearch from "./simpleSearch.js"; // takes an instance of findTheNumber

const log = (msg) => console.info(msg);

(async () => {
  const sSFtn = new findTheNumber(100, "Simple Search");
  await simpleSearch(sSFtn).then(() => log(sSFtn));
})();
