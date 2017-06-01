function createMeet() {
    $.ajax({
        url: "https://httpbin.org/ip",
        type: "GET",
        dataType: "json",
        success: function(msg) {
            console.log(msg)
        }
    })
}