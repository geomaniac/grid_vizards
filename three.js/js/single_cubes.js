GRID_VIZARDS.SingleCubes = function (scene, grid) {
    this.scene = scene;
    this.grid = grid;
    this.init = function () {
        var vec = THREE.Vector3(0, 0, 0);
        for (z = 0; z < this.grid.cell_count.z; ++z) {
            for (y = 0; y < this.grid.cell_count.y; ++y) {
                for (x = 0; x < this.grid.cell_count.x; ++x) {
                    vec = new THREE.Vector3(0, 0, 0);
                    vec.addScaledVector(this.grid.axis.w, z);
                    vec.addScaledVector(this.grid.axis.v, y);
                    vec.addScaledVector(this.grid.axis.u, x);
                    this.add_cube(vec)
                }
            }
        }
    }
    this.add_cube = function (pos) {
        var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        cube.position.x = pos.x;
        cube.position.y = pos.y;
        cube.position.z = pos.z;
        this.scene.add(cube);
    }
}