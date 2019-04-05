class Column {

    constructor() {
      this.column = new THREE.Object3D();
      let column_tex = new THREE.TextureLoader().load('textures/column.jpg');
      let column_tex_2 = new THREE.TextureLoader().load('textures/column.jpg');
      let columnM = new THREE.MeshPhongMaterial( { map: column_tex });
      let columnM_2 = new THREE.MeshPhongMaterial( { map: column_tex_2 });
      column_tex.wrapS = column_tex.wrapT = THREE.RepeatWrapping;
      column_tex.offset.set( 0, 0 );
      column_tex.repeat.set( 1, 10 );
      column_tex_2.wrapS = column_tex_2.wrapT = THREE.RepeatWrapping;
      column_tex_2.offset.set( 0, 0 );
      column_tex_2.repeat.set( 2, 1 );
      let columnG = new THREE.BoxBufferGeometry(1,1,1);

      let h_base = 2;
      let size_base = 10;
      let h_stem = 60;
      let size_stem = 6;
      let h_capital = 4;
      let h_capital2 = 3;
      let size_capital2 = COLUMN_CAPITAL_SIZE;
      this.h_total = h_base+h_stem+h_capital+h_capital2;

      //Creo le 4 componenti della colonna
      let base = this.createPartOf(columnG,columnM_2, size_base, h_base);
      let stem = this.createPartOf(columnG,columnM, size_stem, h_stem);
      let capital = this.createPartOf(columnG,columnM_2, size_base, h_capital);
      let capital2 = this.createPartOf(columnG,columnM_2, size_capital2, h_capital2); 

      //Aggiungo e posiziono le componenti appena create
      this.column.add(base);
      base.position.y = h_base/1 + H_STEP*3;
      this.column.add(stem);
      stem.position.y = h_stem/2 + H_STEP*3 + h_base; 
      this.column.add(capital);
      capital.position.y = h_capital/2 + H_STEP*3 + h_stem + h_base;
      this.column.add(capital2);
      capital2.position.y = h_capital2/2 + H_STEP*3 + h_stem + h_capital + h_base;
    }
    
    //Funzione che mi ritorna l'oggetto appena creato
    getColumn(){
      return this.column;
    }

    //Funzione che mi ritorna l'altezza della colonna: utile per posizionare il tetto
    getHColumn(){
      return this.h_total;
    }

    //Funzione per creare le singole parti della colonna
    createPartOf(geometry, material, size, heigth){
      var base = new THREE.Mesh(geometry, material );
      base.scale.x = size;
      base.scale.y = heigth;;
      base.scale.z = size;
      return base;
    }
  }