console.log("background")
chrome.browserAction.onClicked.addListener(async(tabs)=>{
    const data=await getinfo();
    chrome.tabs.sendMessage(tabs.id,data);
    console.log(data);
})
const fetchMemory = () => {
    return new Promise((resolve, reject) => {
      chrome.system.memory.getInfo((data) => {
        resolve(data);
      });
    });
  };
  const fetchCpu = () => {
    return new Promise((resolve, reject) => {
      chrome.system.cpu.getInfo((data) => {
        resolve(data);
      });
    });
  };
  const fetchDisplay = () => {
    return new Promise((resolve, reject) => {
      chrome.system.display.getInfo((data) => {
        resolve(data);
      });
    });
  };
const getinfo = () => {
    return new Promise(async (resolve, reject) => {
      const memory=await fetchMemory();
    const cpu=await fetchCpu();
    const display=await fetchDisplay()
    let info={
        memory,
        cpu,
        display
    }
    resolve(info);
    });
  };