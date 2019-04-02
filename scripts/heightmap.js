function createGround(data, img){
    let geometry = new THREE.BoxGeometry(2,2,2);
    let sand_tex = new THREE.TextureLoader().load('textures/sand.jpg');
    let mountain_tex = new THREE.TextureLoader().load('textures/mountain.jpg');
    let snow_tex = new THREE.TextureLoader().load('textures/snow.jpg');
    let materials = [];
    materials.push(new THREE.MeshPhongMaterial( { map: sand_tex } ));
    materials.push(new THREE.MeshPhongMaterial( { map: mountain_tex } ));
    materials.push(new THREE.MeshPhongMaterial( { map: snow_tex } ));
    //3 tipi di cubi: sabbia, montagna e neve
	let sand = new THREE.Mesh( geometry, materials[0]);
    let mountain = new THREE.Mesh(geometry, materials[1] );
    let snow = new THREE.Mesh(geometry, materials[2] );
	sand.castShadow = true;
	sand.receiveShadow = true;
	mountain.castShadow = true;
	mountain.receiveShadow = true;
	snow.castShadow = true;
    snow.receiveShadow = true;	
    
	//let ground = new THREE.Object3D();
	//scene.add(ground);


}



function getHeightData(img,scale) {
  
    if (scale == undefined) scale=1;

       var canvas = document.createElement( 'canvas' );
       canvas.width = img.width;
       canvas.height = img.height;
       var context = canvas.getContext( '2d' );

       var size = img.width * img.height;
       console.log(size);
       var data = new Float32Array( size );

       context.drawImage(img,0,0);

       for ( var i = 0; i < size; i ++ ) {
           data[i] = 0
       }

       var imgd = context.getImageData(0, 0, img.width, img.height);
       var pix = imgd.data;

       var j=0;
       for (var i = 0; i<pix.length; i +=4) {
           var all = pix[i]+pix[i+1]+pix[i+2];  // all is in range 0 - 255*3
           data[j++] = scale*all/3;   
       }

       return data;
   }

function createGround(path){

}