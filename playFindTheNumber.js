import ProcessContainer from "./vendor/statz/index.js";
import findTheNumber from "./findTheNumber.js";
import simpleSearch from "./simpleSearch.js";
import binarySearch from "./binarySearch.js";
import divideAndConquer from "./divideAndConquer.js";

const log = (msg) => console.info(msg);

(async () => {
  const thisProcess = new ProcessContainer(process);
  thisProcess.watch();

  // const sSFtn = new findTheNumber(1000000, "Simple Search");
  // await simpleSearch(sSFtn).then(() => log(sSFtn));

  // const bSFtn = new findTheNumber(1000000, "Binary Search");
  // await binarySearch(bSFtn).then(() => log(bSFtn));

  const dcFtn = new findTheNumber(1000000, "Divide and Conquer");
  await divideAndConquer(dcFtn).then(() => log(dcFtn));

  thisProcess.exit();
})();
