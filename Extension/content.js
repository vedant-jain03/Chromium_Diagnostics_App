
chrome.runtime.onMessage.addListener((info,sender,sendResponse)=>{
    
    console.log(info)
    console.log(info.DisplayUnitInfo)
    document.getElementById("archName").innerHTML="Architecture Name:" + info.cpu.archName ;
    document.getElementById("modelName").innerHTML="Model Name: "+info.cpu.modelName;
    document.getElementById("processors").innerHTML="Number of Processors:"+info.cpu.numOfProcessors;
    document.getElementById("features").innerHTML=info.cpu.features.length;
    console.log(info.memory.availableCapacity);
    document.getElementById("memory_used_bar").innerHTML=((info.memory.availableCapacity/info.memory.capacity)*100).toFixed(1)+"%";
    document.getElementById("memory_used_bar").style.width=((info.memory.availableCapacity/info.memory.capacity)*100).toFixed(0)+"%";
    console.log(((info.memory.availableCapacity/info.memory.capacity)*100).toFixed(1));
    document.getElementById("name").innerHTML=info.display[0].name;
    document.getElementById("height").innerHTML=info.display[0].bounds.height;
    document.getElementById("width").innerHTML=info.display[0].bounds.width;
})
