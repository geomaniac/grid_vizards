var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var controls = new THREE.OrbitControls(camera);
var stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
var container = document.createElement('div');
document.body.appendChild(container);
container.appendChild(renderer.domElement);
container.appendChild(stats.dom);
//window.addEventListener('resize', onWindowResize, false);
var o = new THREE.Vector3(0, 0, 0);
var u = new THREE.Vector3(1, 0, 0);
var v = new THREE.Vector3(0, 1, 0);
var w = new THREE.Vector3(0, 0, 1);
var cell_count = new THREE.Vector3(100, 100, 100);
var data = GRID_VIZARDS.random_array(1000000);
var props = [new GRID_VIZARDS.PROP("", data)];
var grid = new GRID_VIZARDS.GRID(o, u, v, w, cell_count, props);
var single_cubes = new GRID_VIZARDS.SingleCubes(scene, grid);
single_cubes.init();

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    stats.update();
}
animate();