GRID_VIZARDS = {}

GRID_VIZARDS.PROP = function(name, data) {
    this.name = name;
    this.data = data;
}

GRID_VIZARDS.GRID = function(o, u, v, w, cell_count, props) {
    this.axis = {
        o: o,
        u: u,
        v: v,
        w: w,
    };
    this.cell_count = cell_count;
    this.props = props;
}