class Decorations {

    constructor(size, deph) {
      this.decorations = new THREE.Object3D();
      let decoration_tex = new THREE.TextureLoader().load('textures/ros.jpg');
      let decorationM = new THREE.MeshPhongMaterial( { map: decoration_tex });
      let decorationG = new THREE.BoxGeometry(1,1,1);

      let dec0 = this.createDecoration(decorationG, decorationM, size, deph);
      let dec1 = this.createDecoration(decorationG, decorationM, size, deph);
      
      //Aggiungo e posiziono i gradini
      this.decorations.add(dec0);
      dec0.position.set(0,86+(8/2),79+(8/2));
      //this.decorations.add(dec1);
      //dec1.position.set(-45-15,86+(8/2),0);
      //dec1.rotation.y = 90 * Math.PI/180;
    }
  
    getDecorations(){
      return this.decorations;
    }

    //Funzione per creare la singola dec
    createDecoration(geometry, material, size, deph){
      let decoration = new THREE.Mesh(geometry, material );
      decoration.scale.x = size;
      decoration.scale.y = H_STEP;;
      decoration.scale.z = deph;
      return decoration;
    }

  }