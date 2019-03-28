class CharacterOutside {

    constructor() {
      this.character = new THREE.Object3D();
      let character_tex = new THREE.TextureLoader().load('textures/ros.jpg');
      //let stepM = new THREE.MeshPhongMaterial( { map: character_tex } );
      //Geometria comune: viene utilizzata per tutti gli elementi, che poi vengono scalati
      //let stepG = new THREE.BoxGeometry(1,1,1);
      
      /****************** Creo il bottom *************/
      let bottom = [];
      let bottom_character = new THREE.Object3D();
      let bottomG = new THREE.BoxGeometry(1,1,1);
      let bottomM = new THREE.MeshPhongMaterial( { map: character_tex, opacity: .8, transparent: true } );
      bottom.push(this.createBottomLevel(bottomG, bottomM, 1.5, 2, 2)); //livello 0
      bottom_character.add(bottom[0]);
      bottom[0].position.set(0, -(2/2 + 2.5 +2), -(2/2 + 2 + 1))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 3, 2, 2)); //livello 1
      bottom_character.add(bottom[1]);
      bottom[1].position.set(0, -(2/2 +2.5), -(2/2 + 2))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 5, 2.5, 2)); //livello 2
      bottom_character.add(bottom[2]);
      bottom[2].position.set(0,-2.5/2 , -2)

      bottom.push(this.createBottomLevel(bottomG, bottomM, 7, 2.5, 4)); //livello 3
      bottom_character.add(bottom[3]);
      bottom[3].position.set(0,2.5/2,0)

      /****************** Creo il bottom *************/
      let upper_character = new THREE.Object3D();
      //Busto
      let bodyG = new THREE.BoxGeometry(7,10,4);
      let bodyM = new THREE.MeshBasicMaterial( { color: "rgb(0,0,0)", opacity: .8, transparent: true } );
      let body = new THREE.Mesh(bodyG, bodyM);
      upper_character.add(body);
      body.position.set(0, 10/2 + 2.5, 0);

      //Braccia e mani
      let armG = new THREE.BoxGeometry(1.5, 5, 2);
      let armM = new THREE.MeshBasicMaterial( { color: "rgb(0,0,0)", opacity: .8, transparent: true } );
      let handG = new THREE.BoxGeometry(1.5, 2, 2);
      let handM = new THREE.MeshBasicMaterial( { color: "rgb(255,222,173)", opacity: .8, transparent: true } );
      let armSx = new THREE.Mesh(armG, armM);
      let armDx = new THREE.Mesh(armG, armM);
      let handSx = new THREE.Mesh(handG, handM);
      let handDx = new THREE.Mesh(handG, handM);
      upper_character.add(armSx);
      armSx.position.set(-(7/2+1.5/2), 5/2 + 2.5 + 10/2, 0);
      upper_character.add(armDx);
      armDx.position.set(7/2+1.5/2, 5/2 + 2.5 + 10/2, 0);
      upper_character.add(handSx);
      handSx.position.set(-(7/2+1.5/2), 2/2 + 2.5 + 3, 0);
      upper_character.add(handDx);
      handDx.position.set(7/2+1.5/2, 2/2 + 2.5 + 3, 0);
      
      //Testa
        let head_tex_1 = new THREE.TextureLoader().load('textures/testa.jpg');
        let face_tex = new THREE.TextureLoader().load('textures/faccia.jpg');
        let head_tex_2 = new THREE.TextureLoader().load('textures/lati.jpg');
        let head_tex_3 = new THREE.TextureLoader().load('textures/pelle.jpg');

        let headM = [
                new THREE.MeshPhongMaterial({map: head_tex_2}), 
                new THREE.MeshPhongMaterial({map: head_tex_2}),
                new THREE.MeshPhongMaterial({map: head_tex_1}),
                new THREE.MeshPhongMaterial({map: head_tex_3}),
                new THREE.MeshPhongMaterial({map: face_tex}),
                new THREE.MeshPhongMaterial({map: head_tex_2})
            ];
      let headG = new THREE.BoxGeometry(3,3,3);
      let headM = new THREE.MeshBasicMaterial( { color: "rgb(0,0,0)", opacity: .8, transparent: true } );
      let head = new THREE.Mesh(headG, headM);
      upper_character.add(head);
      head.position.set(0, 3/2 + 2.5 + 10, 0);



      /*
      bottom.push(this.createBottomLevel(bottomG, bottomM, 3, 2, 2)); //livello 1
      bottom_character.add(bottom[1]);
      bottom[1].position.set(0, -(2/2 +2.5), -(2/2 + 2))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 5, 2.5, 2)); //livello 2
      bottom_character.add(bottom[2]);
      bottom[2].position.set(0,-2.5/2 , -2)

      bottom.push(this.createBottomLevel(bottomG, bottomM, 7, 2.5, 4)); //livello 3
      bottom_character.add(bottom[3]);
      bottom[3].position.set(0,2.5/2,0)
        */
      //Creo la testa

      this.character.add(bottom_character);
      this.character.add(upper_character);
      this.character.position.y = 25;

    }
  
    getCharacter(){
      return this.character;
    }
    
    createBottomLevel(geometry, material, width, heigth, size){
        let step = new THREE.Mesh(geometry, material );
        step.scale.x = width;
        step.scale.y = heigth;
        step.scale.z = size;
        return step;
      }
  }