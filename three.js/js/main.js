var grid, renderer, scene, camera, stats, single_cubes, controls;
var func = function (data) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 100, 1000000);
    controls = new THREE.OrbitControls(camera);
    stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    var container = document.createElement('div');
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);
    container.appendChild(stats.dom);
    //window.addEventListener('resize', onWindowResize, false);
    var o = new THREE.Vector3(0, 0, 0);
    var u = new THREE.Vector3(25, 0, 0);
    var v = new THREE.Vector3(0, 25, 0);
    var w = new THREE.Vector3(0, 0, 20);
    var cell_count = new THREE.Vector3(608, 682, 261);
    //var data = GRID_VIZARDS.random_array(1000000);
    var props = [new GRID_VIZARDS.PROP("", data)];
    grid = new GRID_VIZARDS.GRID(o, u, v, w, cell_count, props);
    single_cubes = new GRID_VIZARDS.SingleCubes(scene, grid);
    single_cubes.init();
    camera.position.z = 500;
    animate();
};
GRID_VIZARDS.data_array(func);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    stats.update();
}