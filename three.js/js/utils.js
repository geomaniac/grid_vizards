GRID_VIZARDS.random_array = function (num_elements) {
    var arr = [];
    for (var i = 0, t = 100; i < num_elements; i++) {
        arr.push(Math.round(Math.random() * t))
    }
    return arr;
}