//@ts-check
//   ______ _____      //  __  __   _____   _   _   ______   _____    _        ______  __   __
//  |__   __/ ____|    // |  \/  | |_   _| | \ | | |  ____| |  __ \  | |      |  ____| \ \ / /
//     | | | (___      // | \  / |   | |   |  \| | | |__    | |__) | | |      | |__     \ V / 
//     | |  \___ \     // | |\/| |   | |   | . ` | |  __|   |  ___/  | |      |  __|     > <  
//     | |  ____) |    // | |  | |  _| |_  | |\  | | |____  | |      | |____  | |____   / . \ 
//     |_| |_____/     // |_|  |_| |_____| |_| \_| |______| |_|      |______| |______| /_/ \_\
//                     //
//--------------------------------------------------------------------------------------------\\
const Site = document.location.href;
const API= 'https://www.mineplex.com/redirect/?to=';
const BotaEncoded = API+'%27'+btoa(Site)+'%27';
const Errors = {
    [1] : "DOMException: HTTP sites are not supported please see the developer console for the link!",
    [2] : "DOMException: Could not write to clipboard. Please allow clipboard access, or try another web browser.",
    [3] : "DOMException: Please Return To The Document And Click Anywhere, Before A Security Error Happens.",
    [4] : "Yay, Successfuly Copied!"
};
async function WriteToClipboard(Url:string) {
    if(document.location.protocol == 'http:') return alert(Errors[1]+`\n${Url}`);
    const Results = new Promise<boolean>((resolve,reject) => {
        async function Clicked() {
            try{
                await navigator.clipboard.writeText(Url);
            }catch(err)
            {
                alert(Errors[2])
                reject(false)
            };
            document.removeEventListener('click',Clicked);
            resolve(true);
        };
        document.addEventListener('click',Clicked);
        alert(Errors[3]);
        console.warn(Errors[3]);
    });
    if(await Results == true) alert(Errors[4]);
    return await Results;
};
WriteToClipboard(BotaEncoded);
console.log(BotaEncoded);

// END OF FILE!
