class Decorations {

    constructor(size, deph) {
      this.decorations = new THREE.Object3D();
      let decoration_tex = new THREE.TextureLoader().load('textures/ros.jpg');
      let decorationM = new THREE.MeshPhongMaterial( { map: decoration_tex });
      let decorationG = new THREE.BoxBufferGeometry(1,1,1);

      let dec0 = this.createDecoration(decorationG, decorationM, size, deph);
      this.decorations.add(dec0);
      dec0.position.set(0,0,0);
    }
    
    //Funzione che mi ritorna l'oggetto appena creato
    getDecorations(){
      return this.decorations;
    }

    //Funzione per creare la singola decorazione
    createDecoration(geometry, material, size, deph){
      let decoration = new THREE.Mesh(geometry, material );
      decoration.scale.x = size;
      decoration.scale.y = H_STEP;;
      decoration.scale.z = deph;
      return decoration;
    }

  }