
export function registerUser(state){
    return {
        type: "REGISTER_USER",
        payload: new Promise((resolve, reject)=>{
            document.getElementById("myNav").style.width = "100%";
            setTimeout(()=>{
                resolve(state);
                console.log('in actions...');
                document.getElementById("myNav").style.width = "0%";
                document.getElementById("btnPopup").click();
            }, 3000);
        })
    }
}

export function ShowAccount(state) {
    return {
        type: "SHOW_INFO",
        payload: state
    }
}