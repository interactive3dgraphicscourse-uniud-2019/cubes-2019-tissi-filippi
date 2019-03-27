class Column {

    constructor(size) {
      this.column = new THREE.Object3D();
      let column_tex = new THREE.TextureLoader().load('textures/stone.jpg');
	  let columnM = new THREE.MeshPhongMaterial( { map: column_tex } );
      let columnG = new THREE.BoxGeometry(1,1,1);

      let base0 = this.createBase(columnG, columnM, 15, 5);
      let base1 = this.createBase(columnG, columnM, 10, 3);
      let stem = this.createStem(columnG,columnM, 6, 50);
      let capital = this.createCapital(columnG,columnM, 10, 3); 

      this.column.add(base0);
      base0.position.set(0, 20,0);
      this.column.add(base1);
      base1.position.y = 30;
      this.column.add(stem);
      stem.position.y = 35;
      this.column.add(capital);
      capital.position.y = 85;
    }
  
    getColumn(){
      return this.column;
    }

    createBase(geometry, material, size, heigth){
      var base = new THREE.Mesh(geometry, material );
      base.scale.x = size;
      base.scale.y = heigth;;
      base.scale.z = size;
      return base;
    }

    createStem(geometry, material, size, heigth){
        var base = new THREE.Mesh(geometry, material );
        base.scale.x = size;
        base.scale.y = heigth;;
        base.scale.z = size;
        return base;
     }

     createCapital(geometry, material, size, heigth){
        var base = new THREE.Mesh(geometry, material );
        base.scale.x = size;
        base.scale.y = heigth;;
        base.scale.z = size;
        return base;
      }
  }