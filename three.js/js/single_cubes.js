GRID_VIZARDS.SingleCubes = function (scene, grid) {
    this.scene = scene;
    this.grid = grid;
    this.geometry = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5);
    this.init_ = function () {
        this.draw_x_slice(0);
        this.draw_y_slice(0);
        this.draw_z_slice(0);
        this.draw_x_slice(this.grid.cell_count.x - 1);
        this.draw_y_slice(this.grid.cell_count.y - 1);
        this.draw_z_slice(this.grid.cell_count.z - 1);
    }
    this.init = function () {
        this.draw_all_cells();
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
        if (value < -6.75) {
            return 0x0000ff;
        } else if (value < -5) {
            return 0x00ffff;
        } else if (value < -3.75) {
            return 0x00ff00;
        } else if (value < -2.5) {
            return 0xffff00;
        } else {
            return 0xff0000;
        }
    }
    this.is_nodata_val = function (prop_index, u, v, w) {
        var prop = this.grid.props[prop_index];
        var data_index = this.grid.get_array_index(u, v, w);
        var value = prop.data[data_index];
        return value === -99999.;
    }
    this.draw_all_cells = function () {
        var vec, color;
        var geometry = new THREE.BufferGeometry();
        var positions = [];
        var colors = [];
        let count = 0;
        for (z = 0; z < this.grid.cell_count.z; ++z) {
            for (y = 0; y < this.grid.cell_count.y; ++y) {
                for (x = 0; x < this.grid.cell_count.x; ++x) {
                    if (this.is_nodata_val(0, x, y, z)) {
                        continue;
                    }
                    ++count;
                    vec = new THREE.Vector3(0, 0, 0);
                    vec.addScaledVector(this.grid.axis.w, z);
                    vec.addScaledVector(this.grid.axis.v, y);
                    vec.addScaledVector(this.grid.axis.u, x);
                    positions.push(vec.x, vec.y, vec.z);
                    color = new THREE.Color(this.get_color(0, x, y, z));
                    colors.push(color.r, color.g, color.b);
                }
            }
        }
        geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.computeBoundingSphere();
        geometry.center();
        var material = new THREE.PointsMaterial({ size: 25, vertexColors: THREE.VertexColors });
        points = new THREE.Points(geometry, material);
        scene.add(points);
    }
    this.draw_x_slice = function (num) {
        var vec, color;
        var geometry = new THREE.BufferGeometry();
        var positions = [];
        var colors = [];
        var x = num;
        for (z = 0; z < this.grid.cell_count.z; ++z) {
            for (y = 0; y < this.grid.cell_count.y; ++y) {
                if (this.is_nodata_val(0, x, y, z)) {
                    continue;
                }
                vec = new THREE.Vector3(0, 0, 0);
                vec.addScaledVector(this.grid.axis.w, z);
                vec.addScaledVector(this.grid.axis.v, y);
                vec.addScaledVector(this.grid.axis.u, x);
                positions.push(vec.x, vec.y, vec.z);
                color = new THREE.Color(this.get_color(0, x, y, z));
                colors.push(color.r, color.g, color.b);
            }
        }
        geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.computeBoundingSphere();
        var material = new THREE.PointsMaterial({ size: 1, vertexColors: THREE.VertexColors });
        points = new THREE.Points(geometry, material);
        scene.add(points);
    }
    this.draw_y_slice = function (num) {
        var vec, color;
        var geometry = new THREE.BufferGeometry();
        var positions = [];
        var colors = [];
        var y = num;
        for (z = 0; z < this.grid.cell_count.z; ++z) {
            for (x = 0; x < this.grid.cell_count.x; ++x) {
                if (this.is_nodata_val(0, x, y, z)) {
                    continue;
                }
                vec = new THREE.Vector3(0, 0, 0);
                vec.addScaledVector(this.grid.axis.w, z);
                vec.addScaledVector(this.grid.axis.v, y);
                vec.addScaledVector(this.grid.axis.u, x);
                positions.push(vec.x, vec.y, vec.z);
                color = new THREE.Color(this.get_color(0, x, y, z));
                colors.push(color.r, color.g, color.b);
            }
        }
        geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.computeBoundingSphere();
        var material = new THREE.PointsMaterial({ size: 1, vertexColors: THREE.VertexColors });
        points = new THREE.Points(geometry, material);
        scene.add(points);
    }
    this.draw_z_slice = function (num) {
        var vec, color;
        var geometry = new THREE.BufferGeometry();
        var positions = [];
        var colors = [];
        var z = num;
        for (y = 0; y < this.grid.cell_count.y; ++y) {
            for (x = 0; x < this.grid.cell_count.x; ++x) {
                if (this.is_nodata_val(0, x, y, z)) {
                    continue;
                }
                vec = new THREE.Vector3(0, 0, 0);
                vec.addScaledVector(this.grid.axis.w, z);
                vec.addScaledVector(this.grid.axis.v, y);
                vec.addScaledVector(this.grid.axis.u, x);
                positions.push(vec.x, vec.y, vec.z);
                color = new THREE.Color(this.get_color(0, x, y, z));
                colors.push(color.r, color.g, color.b);
            }
        }
        geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.computeBoundingSphere();
        var material = new THREE.PointsMaterial({ size: 1, vertexColors: THREE.VertexColors });
        points = new THREE.Points(geometry, material);
        scene.add(points);
    }

}