import React, { Component } from 'react';
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const style = {
    height: 500 // we can control scene size by setting container dimensions

  };

class Cube extends Component { 


      
    componentDidMount() {

        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        
        //check for window resizing
        window.addEventListener("resize", this.handleWindowResize);

      }

    sceneSetup = () => {
        // renderer.setSize( window.innerWidth, window.innerHeight );
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

        const width = this.mount.clientWidth;
        // const width = window.innerWidth;
        // const height = window.innerHeight/2;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75, // fov = field of view
            width / height, //aspect ratio
            0.1, //near plane
            1000 //far plane
        );

        // distance from cube located at z = 0 is 5 units (whatever that may be)
        this.camera.position.z = 5;

        this.controls = new OrbitControls(this.camera, this.mount);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
    }

    addCustomSceneObjects = () => {
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial( {
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        const lights = [];
        lights[0] = new THREE.PointLight(0xffffff, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);

        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);

        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);
    }

    startAnimationLoop = () => {
        // let the cubes rotate
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    }

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
    
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
    
        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
      };

    render(){
        return(
            <div style={style} ref={ref => (this.mount = ref)}></div>
        )
    }
}

export default Cube;