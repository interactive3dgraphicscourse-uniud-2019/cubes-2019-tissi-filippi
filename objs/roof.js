class Roof {
    constructor(width,length) {
        this.roof = new THREE.Object3D();
        this.h_level = 3;
        let roof_tex = new THREE.TextureLoader().load('textures/stone.jpg');
        roof_tex.wrapS = roof_tex.wrapT = THREE.RepeatWrapping;
        roof_tex.offset.set( 0, 0 );
        roof_tex.repeat.set( 10, 2 );
        let roofM = new THREE.MeshPhongMaterial( { map: roof_tex } );
        //Geometria comune: viene utilizzata per tutti gli elementi, che poi vengono scalati
        let roofG = new THREE.BoxBufferGeometry(1,1,1);
        

        //Creo le pareti del tetto
        let roof_front = this.createSubWall(roofG, roofM, width - COLUMN_CAPITAL_SIZE*2);
        let roof_back = this.createSubWall(roofG, roofM, width - COLUMN_CAPITAL_SIZE*2);
        let roof_sx = this.createSubWall(roofG, roofM, length);
        let roof_dx = this.createSubWall(roofG, roofM, length);

        //Aggiungo e posiziono le pareti del tetto
        this.roof.add(roof_front);
        roof_front.rotation.y = 90 * Math.PI/180;
        roof_front.position.set(0,(H_WALL - 5)/2,Z_COLUMN);
        
        this.roof.add(roof_back);
        roof_back.rotation.y = 90 * Math.PI/180;
        roof_back.position.set(0,(H_WALL - 5)/2,-Z_COLUMN);
        
        this.roof.add(roof_sx);
        roof_sx.position.set(-X_COLUMN, (H_WALL - 5)/2, 0);
        
        this.roof.add(roof_dx);
        roof_dx.position.set(X_COLUMN, (H_WALL - 5)/2, 0);


        //Creo i due "triangoli": fronte e retro
        let triangle_levels_back = [];
        let triangle_levels_front = [];
        let n_level = 11;
        for(let i=0; i<n_level; i++){
            triangle_levels_back.push(this.createLevels(roofG, roofM, width - 10*i));
            triangle_levels_front.push(this.createLevels(roofG, roofM, width - 10*i));
            this.roof.add(triangle_levels_back[i]);
            this.roof.add(triangle_levels_front[i]);
            triangle_levels_back[i].rotation.y = 90 * Math.PI/180;
            triangle_levels_back[i].position.set(0, (this.h_level)/2 + (H_WALL - 5) + 3*i ,-Z_COLUMN);
            triangle_levels_front[i].rotation.y = 90 * Math.PI/180;
            triangle_levels_front[i].position.set(0, (H_WALL - 5) + (this.h_level)/2 + 3*i ,Z_COLUMN);
        }
    }
    
    //Funzione che mi ritorna l'oggetto appena creato
    getRoof(){
        return this.roof;
    }

    //Funzione per creare le pareti del muretto
    createSubWall(geometry, material, length){
        let subwall = new THREE.Mesh(geometry, material );
        subwall.scale.x = COLUMN_CAPITAL_SIZE;
        subwall.scale.y = H_WALL - 5;
        subwall.scale.z = length;
        return subwall;
    }

    //Funzione per creare il singolo livello del triangolo
    createLevels(geometry, material, length){
        let subwall = new THREE.Mesh(geometry, material );
        subwall.scale.x = COLUMN_CAPITAL_SIZE;
        subwall.scale.y = this.h_level;
        subwall.scale.z = length;
        return subwall;
    }

  }