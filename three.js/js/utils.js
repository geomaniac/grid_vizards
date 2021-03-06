GRID_VIZARDS.random_array = function (num_elements) {
    var arr = [];
    for (var i = 0, t = 100; i < num_elements; i++) {
        arr.push(Math.round(Math.random() * t))
    }
    return arr;
}

GRID_VIZARDS.data_array = function (func) {
    var req = new XMLHttpRequest();
    //req.open("GET", "/three.js/data/hackathon_grid_property_geol_modeled_multi_se_20170406@@_le", true);
    req.open("GET", "/three.js/data/hackathon_grid_property_modeled_logk@@_le", true);
    req.responseType = "arraybuffer";

    var data = [];

    req.onload = function () {
        var arrayBuffer = req.response;
        if (arrayBuffer) {
            var byteArray = new Float32Array(arrayBuffer);
            data = Array.from(byteArray);
        }
        func(data);
    };
    req.send(null);
}