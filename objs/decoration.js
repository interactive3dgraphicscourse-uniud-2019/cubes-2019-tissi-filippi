class Decoration {

    constructor(size, deph) {
      this.decorations = new THREE.Object3D();
      let decoration_tex = new THREE.TextureLoader().load('textures/dec.png');
      let decorationM = new THREE.MeshPhongMaterial( { map: decoration_tex });
      let decorationG = new THREE.BoxGeometry(1,1,1);

      let dec0 = this.createDecoration(decorationG, decorationM, size, deph);
      let dec1 = this.createDecoration(decorationG, decorationM, size, deph);

      //al momento sono solo quadrati neri che dobbiamo posizionare
      
      //Aggiungo e posiziono i gradini
      this.decorations.add(dec0);
      dec0.position.set(0,40,0);
      this.decorations.add(dec1);
      dec1.position.set(22,77,0);
    }
  
    getDecorattions(){
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

//DA METTERE NEL MAIN

  //Aggiungo le decorazioni
  let decorations = new Decorations(20, 20);
  let d = decorations.getDecorations();
  tempio.add(d);