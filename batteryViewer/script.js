const batt = document.querySelector('.batt');
const level = document.querySelector('.level');
const statusText = document.querySelector('.status');
const minLeft = document.querySelector('.minleft');

const getBatteryLevel = async() => {
        const battery = await navigator.getBattery();
        const batteryLevel = Math.round((battery.level * 100)*10)/10;
        batt.style.height = `${batteryLevel}%`;
        level.textContent = `${batteryLevel}%`;
        statusText.textContent = battery.charging ? 'charging' : '';
}

const getFirstInterval = async() => {
        const battery = await navigator.getBattery();
        const batteryLevel = battery.level * 100;
        return batteryLevel;
}   
const getSecondInterval = async() => {
        const battery = await navigator.getBattery();
        const batteryLevel = battery.level * 100;
        return batteryLevel;
}   

setInterval(async()=>{
    const first = await getFirstInterval();
    const second = await getSecondInterval(); 
    console.log(first, second);  
    
}, 5000);

setInterval(()=>{
        getBatteryLevel();
}, 1000);
