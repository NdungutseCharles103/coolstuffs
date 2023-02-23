Notification.requestPermission().then(data=>{
    console.log(data);
    if(data=== "granted"){
        const notification = new Notification("Testing Notification",{
            tag: "Testing",
            body: "This a testing notification"
        })

        notification.addEventListener('click', ()=>{
            console.log('Our notification is clicked');
        })
    }
})