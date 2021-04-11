
chrome.runtime.onMessage.addListener((info,sender,sendResponse)=>{
    
    console.log(info)
    console.log(info.DisplayUnitInfo)
    document.getElementById("archName").innerHTML="Architecture Name:" + info.cpu.archName ;
    document.getElementById("modelName").innerHTML="Model Name: "+info.cpu.modelName;
    document.getElementById("processors").innerHTML="Number of Processors:"+info.cpu.numOfProcessors;
    // document.getElementById("features").innerHTML=info.cpu.features.length;
    console.log(info.memory.availableCapacity);
    document.getElementById("memory_used_bar").innerHTML=((info.memory.availableCapacity/info.memory.capacity)*100).toFixed(1)+"%";
    document.getElementById("memory_used_bar").style.width=((info.memory.availableCapacity/info.memory.capacity)*100).toFixed(0)+"%";
    console.log(((info.memory.availableCapacity/info.memory.capacity)*100).toFixed(1));
    var byte=((info.storage[1].capacity) / 1073741824).toFixed(2) + " GB";
    var bytename=info.storage[1].name;
    document.getElementById("name").innerHTML=bytename +" :"+ byte;
    console.log(byte);
    var byte2=((info.storage[2].capacity) / 1073741824).toFixed(2) + " GB";
    var bytename2=info.storage[2].name;
    document.getElementById("height").innerHTML=bytename2 + " :"+byte2;
    var byte3=((info.storage[3].capacity) / 1073741824).toFixed(2) + " GB";
    var bytename3=info.storage[3].name;
    document.getElementById("width").innerHTML=bytename3 + " :" + byte3;
    var byte4=(((info.storage[4].capacity) / 1073741824).toFixed(2) + " GB");
    var bytename4=info.storage[4].name;
    document.getElementById("features").innerHTML=bytename4+" :"+ byte4;
})
