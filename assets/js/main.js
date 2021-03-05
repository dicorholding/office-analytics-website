// JUST 4 FUN POPUP
window.letsGo = function () {
    $('#nice-try').modal('show');
    setTimeout(() => {
        window.location.href = 'https://solidbase-analytics.com';
        $('#nice-try').modal('hide');
    }, 5000)
}
$('#fun-modal').on('hidden.bs.modal', letsGo)
