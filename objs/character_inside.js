class CharacterInside {

    constructor() {
      this.character_in = new THREE.Object3D();
      let character_tex_in = new THREE.TextureLoader().load('textures/ros.jpg');
      let head_tex = new THREE.TextureLoader().load('textures/head_tex.jpg');
      let face_tex = new THREE.TextureLoader().load('textures/face.jpg');
      //let stepM = new THREE.MeshPhongMaterial( { map: character_tex } );
      //Geometria comune: viene utilizzata per tutti gli elementi, che poi vengono scalati
      //let stepG = new THREE.BoxGeometry(1,1,1);
      
      /****************** Creo il bottom *************/
      let bottom = [];
      let bottom_character_in = new THREE.Object3D();
      let bottomG = new THREE.BoxGeometry(1,1,1);
      let bottomM = new THREE.MeshPhongMaterial( { map: character_tex_in, opacity: .8, transparent: true } );
      bottom.push(this.createBottomLevel(bottomG, bottomM, 1.5, 2, 2)); //livello 0
      bottom_character_in.add(bottom[0]);
      bottom[0].position.set(0, -(2/2 + 2.5 +2), -(2/2 + 2 + 1))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 3, 2, 2)); //livello 1
      bottom_character_in.add(bottom[1]);
      bottom[1].position.set(0, -(2/2 +2.5), -(2/2 + 2))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 5, 2.5, 2)); //livello 2
      bottom_character_in.add(bottom[2]);
      bottom[2].position.set(0,-2.5/2 , -2)

      bottom.push(this.createBottomLevel(bottomG, bottomM, 7, 2.5, 4)); //livello 3
      bottom_character_in.add(bottom[3]);
      bottom[3].position.set(0,2.5/2,0)

      /****************** Creo l'upper *************/
      let upper_character_in = new THREE.Object3D();
      
      //Busto
      let bodyG = new THREE.BoxGeometry(7,10,4);
      let bodyM = new THREE.MeshBasicMaterial( { color: "rgb(0,0,0)", opacity: .8, transparent: true } );
      let body = new THREE.Mesh(bodyG, bottomM);
      upper_character_in.add(body);
      body.position.set(0, 10/2 + 2.5, 0);

      //Braccia e mani
      let armG = new THREE.BoxGeometry(1.5, 5, 2);
      let armM = new THREE.MeshBasicMaterial( { color: "rgb(0,0,0)", opacity: .8, transparent: true } );
      let handG = new THREE.BoxGeometry(1.5, 2, 2);
      let handM = new THREE.MeshPhongMaterial( { map: head_tex, opacity: .8, transparent: true } );
      let armSx = new THREE.Mesh(armG, bottomM);
      let armDx = new THREE.Mesh(armG, bottomM);
      let handSx = new THREE.Mesh(handG, handM);
      let handDx = new THREE.Mesh(handG, handM);

      let test1 = new THREE.Object3D();
      test1.position.set(0,10,2);
      let test2 = new THREE.Object3D();
      test1.add(test2);
      test2.add(armSx);
      test2.add(handSx);
      test2.add(armDx);
      test2.add(handDx);
      test2.rotation.x = -100*Math.PI/180;
      
      //arm_total_sx.matrix.makeRotationAxis(new THREE.Vector3(1,0,0), 90*Math.PI/180);
      //arm_total_sx.matrixAutoUpdate = false;
      //arm_total_sx.rotation.z = 90 * Math.PI/180;
      //let arm_total_dx = new THREE.Object3D();


      upper_character_in.add(test1);
      //upper_character_in.add(arm_total_dx);
      armSx.position.set(-(7/2+1.5/2), 0, 0);
      armDx.position.set(7/2+1.5/2, 0, 0);
      handSx.position.set(-(7/2+1.5/2), -(2/2 + 2.5), 0);
      handDx.position.set(7/2+1.5/2, -(2/2 + 2.5), 0);

      /************ Creo la testa **********************/
        

        let headM_array = [
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}), 
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
                new THREE.MeshPhongMaterial({map: face_tex, opacity: .8, transparent: true}),
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true})
            ];
      let headG = new THREE.BoxGeometry(3,3,3);
      let headM = new THREE.MultiMaterial(headM_array);
      let head = new THREE.Mesh(headG, headM);
      upper_character_in.add(head);
      head.position.set(0, 3/2 + 2.5 + 10, 0);
      
      bottom_character_in.position.z = -1.5;
      this.character_in.add(bottom_character_in);
      this.character_in.add(upper_character_in);
      this.character_in.position.y = 25;

    }
  
    getCharacter(){
      return this.character_in;
    }
    
    //Funzione per creare il singolo "livello" del bottom del character
    createBottomLevel(geometry, material, width, heigth, size){
        let step = new THREE.Mesh(geometry, material );
        step.scale.x = width;
        step.scale.y = heigth;
        step.scale.z = size;
        return step;
      }
  }