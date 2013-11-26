$(document).ready(function(){ 
     FastClick.attach(document.body);
     setTimeout("$('#ini').button('enable')",5000);
  
  
    //inicio sueldo es
  $('#cke').change(function(){
    var checkeado = $(this).prop("checked");
    if(checkeado) {
       // alert('activado');
       $('#sueldo').val('');
       $('#sueldo').textinput( "disable" );+
       $('#fiva').val('1');
    } else {
       // alert('desactivado');
       $( "#sueldo" ).textinput( "enable" );
         $('#fiva').val('0');
    }
});
 
 //modificar sueldo
$('#cke1').change(function(){
    var checkeado = $(this).prop("checked");
    if(checkeado) {
       // alert('activado');
       $('#sueldo1').val('');
       $('#sueldo1').textinput( "disable" );
       $('#fiva1').val('1');
    } else {
       // alert('desactivado');
       $( "#sueldo1" ).textinput( "enable" );
         $('#fiva1').val('0');
    }
});

 
//guardar el sueldo
 $('#save_sueldo').click(function(){
    var v2=$('#fiva').val();
    var v3=$('#sueldo').val();
    var v4=$('#select-native-2').val();
    if(v2=='0'){
        if (v3==''){            
            $('#sueldo').attr('placeholder','Indique su ingreso').focus();
                    }else if (v4==''){
                        alert('Debe especificar el dia de corte');
                        }else{save_sueldo();}
                }else if(v4==''){
                    alert('Debe especificar el dia de corte');
    }else{save_sueldo();}
 });
 //guardar modificacion de sueldo
 $('#save_sueldo1').click(function(){
    var v2=$('#fiva1').val();
    var v3=$('#sueldo1').val();
    if(v2=='0'){
        if (v3==''){
            $('#sueldo1').attr('placeholder','Indique su ingreso').focus();
        
        }else{
            change_sueldo();         
        }
    }else{
       change_sueldo();       
    }
    

 });

 //evitar que los campos de gastos fijos no esten vacios
$("#ingresar").click(function(){
    var v1=$('#concepto').val();
    var v2=$('#pago').val();
    $('#nota').remove();
    if (v1==''){$('#concepto').attr('placeholder','Ingrese el concepto').focus();return false}
    else if(v2==''){$("#pago").attr('placeholder','ingrese la cantidad').focus(); return false}
     save_gastos_f();
});
$("#ingresar_cambio").click(function(){
    var v11=$('#concepto_change').val();
    var v21=$('#pago_change').val();
    if (v11==''){$('#concepto_change').attr('placeholder','Ingrese el concepto').focus();return false}
    else if(v21==''){$("#pago_change").attr('placeholder','ingrese la cantidad').focus(); return false}
     save_gastos_f_change();
});
//botones de categorias
$('#fondo img').click(function(){
    var pr=$('#me_gaste').val();
    $('#cat').val($(this).attr('cat'));
    if (pr==''){
        $('#me_gaste').attr('placeholder','Primero el gasto').focus(); return false
    }else{
        save_gastos_d();
        pr='';
    }
    }) 
    
 
}); 
//abrir la bd y comprobar si existe y generar y guardar la clave
function onDeviceReady() { 
    checar_c1();
    checar_c5(); 
     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
            db.transaction(claveDB,successCB,clave_error); 
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
            document.addEventListener("backbutton", onBackKeyDown, false);
      }
    function onBackKeyDown() {}  
var xtsjf;
 function checar_c1(){
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM metas', [],checar_c2);
        tx.executeSql('SELECT * FROM sueldo', [],checar_c3);
    });
 }
 var mme;
 var ssu;
  function checar_c2(tx, results) {mme=results.rows.length;}
        
  function checar_c3(tx, results) {
    var ssu = results.rows.length;
        if (mme==0){$.mobile.navigate("#cargando_metas");}
        else if(ssu==0){$.mobile.navigate("#page1");}else{$.mobile.navigate("#page3");}           
        }

function checar_c5(){
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM clave', [],checar_c6);
    });
}
var uid;
function checar_c6(tx,results){
    var len = results.rows.length;
        console.log('ya hay una clave '+len);
        for (var i=0; i<len; i++){
        uid=results.rows.item(i).clave;          
        }      
    xtsjf=len;
    console.log(uid);
}

 function claveDB(tx) {
    var claves;
claves=Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","0");
var msje1;
msje1 = claves[Math.floor(Math.random() * claves.length)];
var msje2;
msje2=claves[Math.floor(Math.random() * claves.length)];
var msje3;
msje3=claves[Math.floor(Math.random() * claves.length)];
var msje4;
msje4=claves[Math.floor(Math.random() * claves.length)];
var msje5;
msje5=claves[Math.floor(Math.random() * claves.length)];
var msje6;
msje6=claves[Math.floor(Math.random() * claves.length)];
var clave=msje1+msje2+msje3+msje4+msje5+msje6;                                                                          
//optener fecha de registro
var fecha = new Date(); var dd = fecha.getDate(); var mm = fecha.getMonth()+1;var yyyy = fecha.getFullYear(); var h=fecha.getHours();var m=fecha.getMinutes();var s=fecha.getSeconds();if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} if (h<10){h='0'+h} if (m<10){m='0'+m} if (s<10){s='0'+s}
var fecha = yyyy+'-'+mm+'-'+dd+" "+h+":"+m+":"+s;
//   tx.executeSql('DROP TABLE IF EXISTS clave');
//    tx.executeSql('DROP TABLE IF EXISTS sueldo');
   tx.executeSql('DROP TABLE IF EXISTS hormiga');
//    tx.executeSql('DROP TABLE IF EXISTS gasto');
//     tx.executeSql('DROP TABLE IF EXISTS metas');
//      tx.executeSql('DROP TABLE IF EXISTS fcorte');
    tx.executeSql('CREATE TABLE IF NOT EXISTS clave(id unique, clave,fecha TEXT)'); 
    tx.executeSql('CREATE TABLE IF NOT EXISTS sueldo(id TEXT, fiva,sueldo)');      
    tx.executeSql('CREATE TABLE IF NOT EXISTS hormiga(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,categoria, valor, fecha)'); 
    tx.executeSql('CREATE TABLE IF NOT EXISTS gasto(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,concepto,valor)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS metas(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre,precio,periodo,imagen,fecha,ahorro)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS fcorte (dia)');
    tx.executeSql('insert into hormiga(clave, categoria, valor, fecha) values(?,?,?,?)',['MNPJHN', 'Salud', '55', '2013-12-10 12:00:00']);
    tx.executeSql('insert into hormiga(clave, categoria, valor, fecha) values(?,?,?,?)',['MNPJHN', 'Vivir', '55', '2013-12-14 12:00:00']);
    tx.executeSql('insert into hormiga(clave, categoria, valor, fecha) values(?,?,?,?)',['MNPJHN', 'Trasporte', '55', '2014-01-09 12:00:00']);
    tx.executeSql('insert into hormiga(clave, categoria, valor, fecha) values(?,?,?,?)',['MNPJHN', 'Social', '55', '2014-01-10 12:00:00']);
    tx.executeSql('insert into hormiga(clave, categoria, valor, fecha) values(?,?,?,?)',['MNPJHN', 'Centaveros', '55', '2014-01-15 12:00:00']);
    if (xtsjf=='0'){
    tx.executeSql('insert into clave(id,clave,fecha) values(1,"'+clave+'","'+fecha+'")'); 
   console.log('datos guardados en telefono'+clave);

    }  
    }
    
function clave_error(err) {
       console.log("se a producido un error");
    } 
    
function successCB() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx) { 
        tx.executeSql('SELECT * FROM clave', [], querySuccess, clave_error);
        console.log('ejecutando success');
    },clave_error);
    }
    
function querySuccess(tx, results) {
        var len = results.rows.length;        
        for (var i=0; i<len; i++){
            console.log('escribiendo clave');
            uid=results.rows.item(i).clave;          
        }
    }
    
//guardar el sueldo
function save_sueldo() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
            db.transaction(
        function (tx){ 
    var fiva=$("#fiva").val();
    var sueldo=$("#sueldo").val();   
    var dcut=$('#select-native-2').val();      
    tx.executeSql('insert into sueldo(id,fiva,sueldo) values(?,?,?)',[uid,fiva,sueldo]);
    tx.executeSql('insert into fcorte(dia) values(?)',[dcut]);
    console.log("se insertaron los registros en el telefono");
   $.mobile.navigate( "#page2",{transition : "slide"} );
},clave_error);

    }    
    
//modificar el sueldo
function mostrar_sueldo() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM sueldo', [], show_sueldo);
    },clave_error);
    }  
    
function show_sueldo(tx,results){
    var len = results.rows.length;
    console.log('registros encontrados= '+len);
    var vac=results.rows.item(0).fiva;
    if (vac==1){
        $("#cke1").attr("checked",true).checkboxradio("refresh");
        $('#sueldo1').textinput( "disable" );
    }
    $('#sueldo1').val(results.rows.item(0).sueldo)
    $('#fiva1').val(results.rows.item(0).fiva)   
}

function change_sueldo() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx){
   
    var fiva=$("#fiva1").val();
    var sueldo=$("#sueldo1").val();
    tx.executeSql('update sueldo set fiva=?, sueldo=? where id=?',[fiva,sueldo,uid]);
    $('#rgd').text('Datos guardados');
    $('#rgd').delay(2000).hide('normal');
   console.log('se realizo la actualizacion');
    },clave_error);
    } 
    
//guardar y mostrar gastos fijos
function save_gastos_f() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx){
   var v1=$('#concepto').val();
    var v2=$('#pago').val(); 
    tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[uid,v1,v2],nueva_consulta);
    $('#concepto,#pago').val('');
});
    } 
    
function nueva_consulta() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM gasto', [], alguna);
    });
    }  
    
function alguna(tx,results){
    var len = results.rows.length;
    $('table #gastos').html('');
        for (var i=0; i<len; i++){
            $('table #gastos').prepend( "<tr><td>"+results.rows.item(i).concepto+"</td><td>"+results.rows.item(i).valor+"</td></tr>");          
        }
}

//guardar cambios o anexar nuevos gastos dijos o eliminar
function save_gastos_f_change() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function (tx){
   var v1=$('#concepto_change').val();
    var v2=$('#pago_change').val();
    tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[uid,v1,v2],checkgasfi);
    console.log('se guardo en telefono');
    $('#concepto_change,#pago_change').val('');
});
    } 
    
function checkgasfi() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);        
        db.transaction(function(tx){
        tx.executeSql('SELECT * FROM gasto', [], algunax2);
    });
    } 
    
function algunax2(tx,results){    
    var len = results.rows.length;
    console.log('gastos'+len);
    $('table #gastos_change').html('');
        for (var i=0; i<len; i++){
            $('table #gastos_change').prepend( "<tr><td>"+results.rows.item(i).concepto+"</td><td>"+results.rows.item(i).valor+"</td><td><input type='checkbox' value='"+results.rows.item(i).concepto+"-"+results.rows.item(i).valor+"' class='xj' /></td></tr>");         
        }
}     
         
function delete_gastos_f() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
    function(tx){
       $("input:checkbox:checked").each(function(){
      var a=$(this).val().split("-");
    tx.executeSql("delete from gasto where clave=? and concepto=? and valor=?",uid,[a[0],a[1]]);
  console.log('se elimino el registro');
   $(this).parents('tr').hide('slow');
   })
});    
 }

//ingresar los gastos a la tabla sincronizacion
function save_gastos_d() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function (tx){
  var fecha = new Date(); var dd = fecha.getDate(); var mm = fecha.getMonth()+1;var yyyy = fecha.getFullYear(); var h=fecha.getHours();var m=fecha.getMinutes();var s=fecha.getSeconds();if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} if(h<10){h='0'+h} if(m<10){m='0'+m} if(s<10){s='0'+s}
var fecha = yyyy+'-'+mm+'-'+dd+" "+h+":"+m+":"+s; 
   var pr=$('#me_gaste').val();
    var cat=$('#cat').val();
   tx.executeSql('insert into hormiga(clave, categoria, valor, fecha) values(?,?,?,?)',[uid, cat, pr, fecha]);
    console.log('se guardo el gasto hormiga');
    $('#me_gaste').val('');$('#me_gaste').focus();
    $("#mensaje").fadeIn().delay(1000).fadeOut();
    });
    } 
    
 var nomimage;
  //funciones para obtener la imagen
  function onPhotoURISuccess(imageURI) {
    createFileEntry(imageURI);
      // Obtiene el elemento HTML de la imagen
      var largeImage = document.getElementById('imgop');
      // Revela el elemento de la imagen
      largeImage.style.display = 'block';
      // Muestra la foto capturada
      // Se usan reglas CSS para dimensionar la imagen
      largeImage.src = imageURI;
      //$('#meturlimg').val(imageURI);
      nomimage=imageURI.substr(imageURI.lastIndexOf('/')+1);
    }
    // Un bot�n llamara a esta funci�n
    function getPhoto(source) {
      // Retorna la ruta del fichero de imagen desde el origen especificado
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
      }
    // Llamado cuando algo malo ocurre
    function onFail(message) {
      alert('Ocurrio un error: ' + message);
    }


function createFileEntry(imageURI) {
    window.resolveLocalFileSystemURI(imageURI, copyPhoto, fail);    
}

function copyPhoto(fileEntry) {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) { 
        fileSys.root.getDirectory("Metas", {create: true, exclusive: false}, function(dir) { 
                fileEntry.copyTo(dir, nomimage, onCopySuccess, fail); 
            }, fail); 
    }, fail); 
}

function onCopySuccess(entry) {
     $('#meturlimg').val(entry.fullPath);
}

function fail(error) {
    console.log(error.code);
}     
     
function savemeta(mover){
    var nommeta=$('#metnombre'+mover).val();
    var precio=$('#metprecio'+mover).val();    
    var periodo=$('#metperiodo'+mover).val();
    var urlimagen=$('#meturlimg'+mover).val()
    if (nommeta==''){$('#metnombre'+mover).attr('placeholder','Ingrese su meta').focus();alert('vacio');return false; }
    else if (precio==''){$('#metprecio'+mover).attr('placeholder','Ingrese el precio').focus();return false; }
    else if (periodo==''){$('#metperiodo'+mover).attr('placeholder','Ingrese el periodo').focus();return false; }
    else if (urlimagen==''){urlimagen='jquery-mobile/images/metas.jpg'}  
      var fecha = new Date(); var dd = fecha.getDate(); var mm = fecha.getMonth()+1;var yyyy = fecha.getFullYear();if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
var fecha = dd+" del "+mm+" de "+yyyy;
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {          
tx.executeSql('insert into metas(nombre,precio,periodo,imagen,fecha,ahorro) values(?,?,?,?,?,?)',[nommeta,precio,periodo,urlimagen,fecha,'0']);
            $("#metnombre"+mover+",#metprecio"+mover+",#metperiodo"+mover+",#meturlimg"+mover).val('');
            $('#respmeta'+mover).html('Meta agregada').fadeIn().delay(1500).fadeOut('slow');
            if (mover==1){$.mobile.navigate( '#page1',{transition : 'slide'});}
        });
    }
    
    //cargar meta
    var m=0; 
     function loadmeta() {        
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM metas', [], loadmeta1);
    });
    }
    var valmetas= new Array();
    function loadmeta1(tx,results){
        valmetas.length=0;
        var len = results.rows.length;
        console.log('se encontraron '+len+' resgistros');        
        for (var i=0; i<len; i++){ 
           valmetas.push(results.rows.item(i).id+'|'+results.rows.item(i).nombre+'|'+results.rows.item(i).precio+'|'+results.rows.item(i).periodo+'|'+results.rows.item(i).imagen+'|'+results.rows.item(i).fecha+'|'+results.rows.item(i).ahorro);
        } 
         cargarmeta();      
    }
    
    function cargarmeta(signo){ 
        $('#congrat').html('');
           if (!signo){signo=0}            
        if (m>=0 || m<=valmetas.length){ m+=signo;}        
        var nm=1+m;
        if (m==0){$('#lasts').attr('disabled','true');}else{$('#lasts').removeAttr('disabled');}
        if (m==(valmetas.length-1)){$('#nexts').attr('disabled','true');}else{$('#nexts').removeAttr('disabled');}
        $('#nmeta').html(nm);
        
       var dato=valmetas[m].split('|');       
       $('#metasxx h2').html(dato[1]);      
        if (dato[4]!=0){$('#imgop1').attr('src',dato[4]);}
       $('#fecmeta').html("Agregado: "+dato[5]);
       $('#premeta').html("Precio: $"+dato[2]);
       $('#editmeta').attr('editar',dato[0]);
       $("#progressbar" ).progressbar( "option", "max", parseInt(dato[2]) );
       $("#progressbar" ).progressbar( "option", "value", parseInt(dato[6]) );
       $('.progress-label').html('$ '+$( "#progressbar" ).progressbar( "option", "value"));
       $('#mosmet').html('Ahorrado');
       $('#deletemeta').attr('onclick','deletemeta('+dato[0]+')');
       $('#slider-2').slider( "refresh" );
       $('#actmetas').attr('onclick','cgmetas('+dato[0]+')');
       if (parseInt(dato[6])>parseInt(dato[2])){$('#congrat').html('Felicidades Realizaste tu meta');}
    }




function deletemeta(idmeta){
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
        tx.executeSql('delete from metas where id=? ',[idmeta]);
        console.log('se elimino el registro '+ idmeta);
        loadmeta();
        $('#metasxx h2,#fecmeta,#premeta,#mosmet').html('');
        $('#imgop1').removeAttr('src');
     $('#slider-2').val('0');
     $('#slider-2').attr('max','0');
     $('#deletemeta').removeAttr('onclick');
    });
    
}

function lo_guardado(id){
    var vvm=$('#aho'+id).val();
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
           tx.executeSql("update metas set ahorro=ahorro+"+vvm+" where id='"+id+"'"); 
           $('#accmetas h5').html('Guardado').fadeIn().delay(1500).fadeOut();
           var aumento=$('#ahho'+id).text();
           var total=parseInt(aumento)+parseInt(vvm); 
            $('#ahho'+id).text(total);         
        });
}

function cgmetas(id){      
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
           tx.executeSql('SELECT * FROM metas where id='+id, [], showmet);            
        });
}
function showmet(tx,results){
    $('#accmetas').html('');
    var len = results.rows.length;
    for(var i=0;i<len;i++){        
    $('#accmetas').append("<div data-role='collapsible'><h3>"+results.rows.item(i).nombre+"</h3><p><h4 id='rrs'>Llevas $<span id='ahho"+results.rows.item(i).id+"'>"+results.rows.item(i).ahorro+"</span> de $"+results.rows.item(i).precio+"</h4><label>Cuanto ahorraste para la meta?</label><input type='number' id='aho"+results.rows.item(i).id+"' value='"+results.rows.item(i).precio/results.rows.item(i).periodo+"'/><input class='save_aho' type='button' value='Guardar' onclick='lo_guardado("+results.rows.item(i).id+");'  /> </p><h5 style='text-align:center'></h5></div>");
    if (results.rows.item(i).ahorro>results.rows.item(i).precio){$('#rrs').html('Felicidades Realizaste tu meta');$('.save_aho').attr("disabled",'true');$('#accmetas h3').css('color','#00FF00')}
    
    $('#aho'+results.rows.item(i).id).textinput();
    $('.save_aho').button();
    }
    $('div[data-role=collapsible]').collapsible({ corners: true });
    $.mobile.navigate('#metas_saldo',{transition : 'slide'});
}


function ccbalance(){ 
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
    db.transaction(
     function(tx){ 
  tx.executeSql("SELECT categoria,sum(valor)as valor FROM hormiga WHERE clave=? and julianday(fecha) between julianday('2013-12-10') and julianday('2014-01-11') group by categoria", ['MNPJHN'], corte);  
  tx.executeSql("SELECT strftime('%Y',fecha) as ano FROM hormiga WHERE clave=? group by strftime('%Y',fecha)", ['MNPJHN'], select1); 
 
  console.log('ejecutando')
  });
    
}
    
function corte(tx,results){
var len = results.rows.length;
console.log('metas len '+len);
$('#balans').html('');
var colors=["#9508F9","#FB1258","#FF6600","#FF00FF","#FCD809","#FB3E04"];
for (i=0;i<len;i++){
    $('#balans').append("<tr style='color:"+colors[i]+"'><td>"+results.rows.item(i).categoria+"</td><td>"+results.rows.item(i).valor+"</td></tr>");
   console.log(results.rows.item(i).categoria);
}
pieChart();
}
function select1(tx,results){
    var len = results.rows.length;
    $('#select-h-6a').html('');
    $('#select-h-6a').append("<option value=''>A&ntilde;o</option>");
    $("#select-h-6a").append()
  for (i=1;i<len;i++){
    //ana=results.rows.item(i).fecha.split('-',3);
    $('#select-h-6a').append("<option value='"+results.rows.item(i).ano+"'>"+results.rows.item(i).ano+"</option>");
    }
    $("#select-h-6a").selectmenu( "refresh" );
}  
 
     //filtrado de balance
     $(document).ready(function(){
 $('#select-h-6a').change(function(){
   var valrs1 = $('#select-h-6a').val();
   var valrs2 = $('#select-h-6b').val();  
    if (valrs1!='' && valrs2!=''){
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
    db.transaction(
     function(tx){ 
  tx.executeSql("SELECT categoria,sum(valor)as valor FROM hormiga WHERE clave=? and julianday(fecha) between julianday('2013-12-10') and julianday('2014-01-15') group by categoria", ['MNPJHN'], corte);  
  });
    }
 }); 
 });
