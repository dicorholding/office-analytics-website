// JUST 4 FUN POPUP
window.letsGo = function () {
    $('#nice-try').modal('show');
    setTimeout(() => {
        window.location.href = 'https://solidbase-analytics.com';
        $('#nice-try').modal('hide');
    }, 5000)
}
$('#fun-modal').on('hidden.bs.modal', letsGo)

window.onload = () => {
    document.getElementById('involvemeScriptTag').src = 'https://office-analytics.involve.me/embed'
}

// open email-modal when clicked on the mailto-link
// and hide the modal automatically after 30s
// This will trigger for all elements with class .email-link
document.querySelectorAll('.email-link').forEach(item => {
    item.onclick = function () {
        $("#email-modal").modal('show');
        setTimeout(function () {
            $("#email-modal").modal('hide');
        }, 30000);
    }
})


// Trigger a copy to clipboard action when clicked on this span
let copySpan = document.getElementById('copy-span');
if (copySpan) {
    copySpan.onclick = () => {
        document.execCommand("copy");
        $('#copy-span').popover('show');
    }
    copySpan.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", copySpan.innerHTML);
        }
    })
}
