setInterval(() => {
    $.ajax({
        url : "https://neptun-web3.tr.pte.hu/hallgato/main.aspx?ismenuclick=true&ctrl=inbox",
    })
    console.log("Session refreshed")
}, 540000);

$("#upTraining_lblRemainingTime").remove()