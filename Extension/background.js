try
{
console.log("background")
chrome.action.onClicked.addListener(async(tabs)=>{
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
  const fetchstorage = () => {
    return new Promise((resolve, reject) => {
      chrome.system.storage.getInfo((data) => {
        resolve(data);
      });
    });
  };
const getinfo = () => {
    return new Promise(async (resolve, reject) => {
      const memory=await fetchMemory();
    const cpu=await fetchCpu();
    const storage=await fetchstorage();
    let info={
        memory,
        cpu,
        storage
    }
    resolve(info);
    });
  };
} catch (e){
  console.log(e);
}