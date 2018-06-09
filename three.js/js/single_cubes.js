GRID_VIZARDS.SingleCubes = function (scene, grid) {
    this.scene = scene;
    this.grid = grid;
    this.geometry = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5);
    this.init = function () {
        this.draw_x_slice(0);
        this.draw_y_slice(0);
        this.draw_z_slice(0);
        this.draw_x_slice(this.grid.cell_count.x - 1);
        this.draw_y_slice(this.grid.cell_count.y - 1);
        this.draw_z_slice(this.grid.cell_count.z - 1);
    }
    this.add_cube = function (pos, color) {
        var material = new THREE.MeshBasicMaterial({ color: color });
        var cube = new THREE.Mesh(this.geometry, material);
        cube.position.x = pos.x;
        cube.position.y = pos.y;
        cube.position.z = pos.z;
        this.scene.add(cube);
    }
    this.get_color = function (prop_index, u, v, w) {
        var prop = this.grid.props[prop_index];
        var data_index = this.grid.get_array_index(u, v, w);
        var value = prop.data[data_index];
        if (value < 34) {
            return 0x00ff00;
        } else if (value < 67) {
            return 0xffff00;
        } else {
            return 0xff0000;
        }
    }
    this.draw_all_cells = function () {
        var vec;
        for (z = 0; z < this.grid.cell_count.z; ++z) {
            for (y = 0; y < this.grid.cell_count.y; ++y) {
                for (x = 0; x < this.grid.cell_count.x; ++x) {
                    vec = new THREE.Vector3(0, 0, 0);
                    vec.addScaledVector(this.grid.axis.w, z);
                    vec.addScaledVector(this.grid.axis.v, y);
                    vec.addScaledVector(this.grid.axis.u, x);
                    var color = this.get_color(0, x, y, z);
                    this.add_cube(vec, color);
                }
            }
        }
    }
    this.draw_x_slice = function (num) {
        var vec;
        var x = num;
        for (z = 0; z < this.grid.cell_count.z; ++z) {
            for (y = 0; y < this.grid.cell_count.y; ++y) {
                vec = new THREE.Vector3(0, 0, 0);
                vec.addScaledVector(this.grid.axis.w, z);
                vec.addScaledVector(this.grid.axis.v, y);
                vec.addScaledVector(this.grid.axis.u, x);
                var color = this.get_color(0, x, y, z);
                this.add_cube(vec, color);
            }
        }
    }
    this.draw_y_slice = function (num) {
        var vec;
        var y = num;
        for (z = 0; z < this.grid.cell_count.z; ++z) {
            for (x = 0; x < this.grid.cell_count.x; ++x) {
                vec = new THREE.Vector3(0, 0, 0);
                vec.addScaledVector(this.grid.axis.w, z);
                vec.addScaledVector(this.grid.axis.v, y);
                vec.addScaledVector(this.grid.axis.u, x);
                var color = this.get_color(0, x, y, z);
                this.add_cube(vec, color);
            }
        }
    }
    this.draw_z_slice = function (num) {
        var vec;
        var z = num;
        for (y = 0; y < this.grid.cell_count.y; ++y) {
            for (x = 0; x < this.grid.cell_count.x; ++x) {
                vec = new THREE.Vector3(0, 0, 0);
                vec.addScaledVector(this.grid.axis.w, z);
                vec.addScaledVector(this.grid.axis.v, y);
                vec.addScaledVector(this.grid.axis.u, x);
                var color = this.get_color(0, x, y, z);
                this.add_cube(vec, color);
            }
        }
    }

}