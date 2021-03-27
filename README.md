# Chromium_Diagnostics
This is my repository of Milestones for GSoC 2021 under Chromium / Chromium OS.

Milestone 1: Create a skeleton Telemetry Progressive Web App (a.k.a. PWA).(Completed).

Milestone 2: Create a simple Chrome Extension.(Completed)

Milestone 3: Enable the PWA and Chrome Extension to communicate with each other (Completed)

![bandicam 2021-03-26 13-30-46-451](https://user-images.githubusercontent.com/76901313/112621340-a236e800-8e4f-11eb-9504-2643d8652e5d.jpg)
![bandicam 2021-03-26 13-30-51-309](https://user-images.githubusercontent.com/76901313/112621362-a82cc900-8e4f-11eb-80d2-35a92da2516a.jpg)

# Video Demo

https://drive.google.com/file/d/135VC3uBfWWKnQiI8yKX4GE1_CQhZTMxT/view?usp=sharing

# How to install PWA
So you can install PWA by visiting this : https://vedant-jain03.github.io/Chromium_Diagnostics/ and then clicking on install button in right of search bar

# Extension
If you want to see extenion then follow these steps:

->Clone the repository on your local system.

->In browser, go to chrome://extensions or click on more tools and then extension

->Top right corner, enable developer mode

->Click on unpacked

->Select folder where you clone this repository then select extenion inside the folder.

->You can see My extension

# Chrome extension work

Follow these steps to get this:

->Open : https://vedant-jain03.github.io/Chromium_Diagnostics/

->For getting information you have to pin "My extension" extension on your browser

->Click on extension.

# Working
  # PWA (Milestone #1)
  
  -> I have made my frontend using HTML,CSS,JS. I have use fontawesome icons, Chart.js,cdn libraries
  
  -> For converting it to PWA, I have created manifest.json file which will contain all about PWA
  
  -> For cache data, I have used service-worker.js
  
  # Extension (Milestone #2)
  
  ->I have created manifest.json file which contain details about my extension and permission which will allow to my extension in developer mode.
  
  -> I have used systeminfo API to fetch details from system, for this I have declared permissions in manfest file
  
  # Cummunication between PWA and extension (Milestone #3)
  
  -> I have created background script which will used to fetch system information.
  
  -> I have created content script which will work as context of Web page.
  
  -> I have used message passing API to pass my message(System info json file) to my content script and then content script will show details in my PWA.
  
# Branch

  -> Milestone 1(Contain PWA files)
  
  -> Milestone 2(Contain Extensions Files)
  
  -> Milestone 3(Contain All files)
  
# Additional

-> I have also created System Diagnostics Manager page where you will get some basic Diagnostic function we will use for our PWA.

-> I have used Chart in my System data page to have enviournment like CPU utilization chart as mentioned.
