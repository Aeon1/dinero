$(document).ready(function(){ 
     FastClick.attach(document.body);
    //inicio sueldo
 $("input[name='radio']").click(function(){
   var sueldo= $("input[name='radio']:checked").val();
   if (sueldo=='fijo'){
    $('#dpc').fadeIn(1000);
    $('#fiva').val('0');
   }
   else{
    $('#sueldo').val('0');
    $('#dpc').fadeOut(1000);    
    $('#fiva').val('1');
   }   
 });
 //modificar sueldo
  $("#config_s input[name='radio1']").click(function(){
   var sueldo1= $("#config_s input[name='radio1']:checked").val();
   if (sueldo1=='fijo'){
    $('#dpc1').fadeIn(1000);
    $('#fiva1').val('0');
    $('#sueldo1').val('');
   }
   else{
    $('#sueldo1').val('0');
    $('#dpc1').fadeOut(1000);    
    $('#fiva1').val('1');
   }   
 });
 //periodo de la meta
  $("input[name='radio2']").click(function(){
   var periodo= $("input[name='radio2']:checked").val();
   if (periodo=='dias'){
    $('#metperiododias').val('dias');
   }else if(periodo=='semanas'){
    $('#metperiododias').val('semanas');
   }else if(periodo=='meses'){
    $('#metperiododias').val('meses');
   }
      
 });
//guardar el sueldo
 $('#save_sueldo').click(function(){
    var v2=$('#fiva').val();
    var v3=$('#sueldo').val();
    if(v2=='0'){
        if (v3==''){
            alert('debe ingresar su sueldo');
            $('#sueldo').focus();
        }else{
            save_sueldo();
            //$.mobile.navigate( "#page2",{transition : "slide"} );         
        }
    }else{
        save_sueldo();
       //$.mobile.navigate( "#page2",{transition : "slide"} ); 
    }
 });
 //guardar modificacion de sueldo
 $('#save_sueldo1').click(function(){
    var v2=$('#fiva1').val();
    var v3=$('#sueldo1').val();
    if(v2=='0'){
        if (v3==''){
            alert('debe ingresar su sueldo');
            $('#sueldo1').focus();
        }else{
            change_sueldo();         
        }
    }else{
       change_sueldo();       
    }
 });
 //pasar a la pagina principal
// $('#continue').click(function(){
//    $.mobile.navigate( "#page3",{transition : "slide"} ); 
// });
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
        $('#me_gaste').attr('placeholder','Ingrese lo que gasto').focus(); return false
    }else{
        save_gastos_d();
        pr='';
    }
    })  
}); 
//abrir la bd y comprobar si existe y generar y guardar la clave
var xtsjf;
 function checar_c1(){
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM sueldo', [],checar_c2);
    });
 }
  function checar_c2(tx, results) {
        var len = results.rows.length;
        alert(len);
        console.log(len+" sueldo encontrados");
        if (len!=0){$.mobile.navigate("#page3");}
        if(len==0){$.mobile.navigate("#page1"); }  
          
        }

function checar_c5(){
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM clave', [],checar_c6);
    });
}
function checar_c6(tx,results){
    var len = results.rows.length;
    console.log('ya hay una clave '+len);
    for (var i=0; i<len; i++){
            $('#resultado,#fgs,#cfs').html( results.rows.item(i).clave)+"<br/>";          
        }
       onDeviceReady();  
    xtsjf=len;
}
 //se checa si ya esta configurado, la funcion de repides, y se crea el id de usuario
 var pictureSource;   // Origen de la imagen
    var destinationType; // Formato del valor retornado
 function onDeviceReady() { 
    //checar_c1();
    checar_c5(); 
     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(claveDB,successCB,clave_error); 
    document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);
    checkConnection();
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
         
      }
     var online;    
function checkConnection() {
        var networkState = navigator.network.connection.type;
        var states = {};
    states[Connection.UNKNOWN]  = '1';  //Conexión desconocida;
    states[Connection.ETHERNET] = '1';  //Conexión ethernet;
    states[Connection.WIFI]     = '1';  //Conexión WiFi';
    states[Connection.CELL_2G]  = '1';  //Conexión movil 2G';
    states[Connection.CELL_3G]  = '1';  //Conexión movil 3G';
    states[Connection.CELL_4G]  = '1';  //Conexión movil 4G';
    states[Connection.NONE]     = '0';  //Sin conexión';
      online=states[networkState];
      if (online=='1'){check_sincronizacion();antecorte();}
    }
    function onOnline() {
   online='1'; 
   check_sincronizacion();
 antecorte();
}
function onOffline() {
   online='0'; 
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
//    tx.executeSql('DROP TABLE IF EXISTS sincronizacion');
//    tx.executeSql('DROP TABLE IF EXISTS gasto');
//     tx.executeSql('DROP TABLE IF EXISTS metas');
    tx.executeSql('CREATE TABLE IF NOT EXISTS clave(id unique, clave,fecha TEXT)'); 
    tx.executeSql('CREATE TABLE IF NOT EXISTS sueldo(id TEXT, fiva,sueldo)');      
    tx.executeSql('CREATE TABLE IF NOT EXISTS sincronizacion(id INTEGER PRIMARY KEY AUTOINCREMENT, id1, clave, fiva, sueldo, concepto, categoria, valor, fecha TEXT)'); 
    tx.executeSql('CREATE TABLE IF NOT EXISTS gasto(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,concepto,valor)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS metas(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre,precio,periodo,periodo1,imagen,fecha,ahorro)');
    if (xtsjf=='0'){
        if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c1', clave: clave, fecha: fecha },
                             beforeSend: function () {},
                             success: function(data,tx) {
                                if (data=='1'){ 
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                    db.transaction(
                                    function(tx){                                                                     
                                    tx.executeSql('insert into clave(id,clave,fecha) values(1,"'+clave+'","'+fecha+'")');                                
                                    console.log('se guardaron en el servidor y en el telefono');
                                    },successCB);$('#resultado,#fgs,#cfs').html(clave);
                                }else{
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                    db.transaction(
                                    function(tx){
                                    tx.executeSql('insert into clave(id,clave,fecha) values(1,"'+clave+'","'+fecha+'")'); 
                                   tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c1',clave,'0','0','0','0','0',fecha]);//se inserta la clave generada para enviarla al servidor
                                    console.log('enviados pero ocurrio error y se mandan al telefono');
                                   },successCB);$('#resultado,#fgs,#cfs').html(clave);
                                   }
                                                              
                                }                            
                              });
            }else{
    tx.executeSql('insert into clave(id,clave,fecha) values(1,"'+clave+'","'+fecha+'")'); 
   tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c1',clave,'0','0','0','0','0',fecha],successCB);//se inserta la clave generada para enviarla al servidor
      console.log('datos guardados en telefono'+clave);
      //$('#resultado,#fgs,#cfs').html(clave);
      successCB();
    
    }
    } else{successCB();}  

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
            $('#resultado,#fgs,#cfs').html(results.rows.item(i).clave)+"<br/>";          
        }
    }
//guardar el sueldo
function save_sueldo() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function (tx){            
    var clave=$("#resultado").text();
    var fiva=$("#fiva").val();
    var sueldo=$("#sueldo").val();
    if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c2',clave:clave,fiva:fiva,sueldo:sueldo},
                             beforeSend: function() {$('#send').append("enviando datos");},
                             success: function(data) {
                                if (data=='1'){
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                     db.transaction(
                                    function(tx){
                                    tx.executeSql('insert into sueldo(id,fiva,sueldo) values(?,?,?)',[clave,fiva,sueldo]);
                                    $('#send').text('Datos guardados');
                                    $.mobile.navigate( "#page2",{transition : "slide"} );
                                    console.log("guardados en servidor");
                                    })
                                }else{
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                    db.transaction(
                                    function(tx){
                                   tx.executeSql('insert into sueldo(id,fiva,sueldo) values(?,?,?)',[clave,fiva,sueldo]);
                                   tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c2',clave,fiva,sueldo,'0','0','0','0']);//se inserta el sueldo para enviarlo al servidor
                                    $.mobile.navigate( "#page2",{transition : "slide"} );
                                   console.log("mandados a servidor regreso un error");
                                  })
                                     }
                              
                                }                           
                              });
            }else{
    tx.executeSql('insert into sueldo(id,fiva,sueldo) values(?,?,?)',[clave,fiva,sueldo]);
    tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c2',clave,fiva,sueldo,'0','0','0','0']);//se inserta el sueldo para enviarlo al servidor
   console.log("se insertaron los registros en el telefono");
   $.mobile.navigate( "#page2",{transition : "slide"} );
}
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
        $('#radio-choice-h-2b2').attr('checked',true).checkboxradio("refresh");
        $('#dpc1').fadeOut();
    }else if(vac==0){$('#radio-choice-h-2a1').attr('checked',true).checkboxradio("refresh");}
    $('#sueldo1').val(results.rows.item(0).sueldo)
    $('#fiva1').val(results.rows.item(0).fiva)
    $('#config_result').text(results.rows.item(0).id)    
}
function change_sueldo() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx){
    var clave=$("#config_result").text();
    var fiva=$("#fiva1").val();
    var sueldo=$("#sueldo1").val();
    if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c3',clave:clave,fiva:fiva,sueldo:sueldo},
                             beforeSend: function() {$('#rgd').text('Guardado datos');},
                             success: function(data) {
                                if (data=='1'){
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                    db.transaction(
                                    function(tx){
                                    tx.executeSql('update sueldo set fiva=?, sueldo=? where id=?',[fiva,sueldo,clave]);
                                    $('#rgd').text('Datos guardados');
                                    console.log('datos guardados con exito en el servidor');
                                    
                                    })                                    
                                    }else{ 
                                         var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                        db.transaction(
                                        function(tx){
                                        tx.executeSql('update sueldo set fiva=?, sueldo=? where id=?',[fiva,sueldo,clave]);
                                        tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c3',clave,fiva,sueldo,'0','0','0','0']);
                                        $('#rgd').text('Datos guardados');
                                        console.log('el servidor marco error y se guardaron en el telefono');
                                        })
                                        }                              
                                }                           
                              });
            }else{
    tx.executeSql('update sueldo set fiva=?, sueldo=? where id=?',[fiva,sueldo,clave]);
    tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c3',clave,fiva,sueldo,'0','0','0','0']);//se inserta el sueldo para enviarlo al servidor
   $('#rgd').text('Datos guardados');
   console.log('No se detecto internet y se guardaron en el telefono');
   }
    },clave_error);
    } 
//guardar y mostrar gastos fijos
function save_gastos_f() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function(tx){
   var v1=$('#concepto').val();
    var v2=$('#pago').val();
    var clave=$('#fgs').text();    
    if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c4',clave:clave,concepto:v1,valor:v2},
                             beforeSend: function() {$('#send').append("enviando datos");},
                             success: function(data) {
                                if (data=='1'){
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                    db.transaction(
                                    function(tx){
                                        tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],nueva_consulta);
                                        $('#concepto,#pago').val('');
                                        console.log('Datos guardados en el servidor');
                                        })
                                    }else{
                                         var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                        db.transaction(
                                        function(tx){
                                            tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],nueva_consulta);
                                            tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c4',clave,'','',v1,'0',v2,'0']);
                                            $('#concepto,#pago').val('');
                                            })
                                        }                              
                                }                           
                              });
            }else{ 
    tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],nueva_consulta);
    ttx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c4',clave,'','',v1,'0',v2,'0']);
    $('#concepto,#pago').val('');
    }
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
             //SumarColumna('my-table', 1);           
        }
}
//guardar cambios o anexar nuevos gastos dijos o eliminar
function save_gastos_f_change() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function (tx){
   var v1=$('#concepto_change').val();
    var v2=$('#pago_change').val();
    var clave=$('#fgs').text();
    if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c4',clave:clave,concepto:v1,valor:v2},
                             beforeSend: function() {},
                             success: function(data) {
                                if (data=='1'){
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                    db.transaction(
                                    function (tx){
                                        tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],checkgasfi);
                                        $('#concepto_change,#pago_change').val('');
                                        console.log('Datos guardados en el servidor');
                                        });
                                    }else{ 
                                         var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                        db.transaction(
                                    function (tx){
                                        tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],checkgasfi);
                                        tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?)',['c4',clave,'','',v1,'0',v2,'0']);
                                        console.log('El servidor regreso un error y se guardaron en telefono');
                                        $('#concepto_change,#pago_change').val('');
                                        });
                                        }                              
                                }                           
                              });
            }else{
    tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],checkgasfi);
    tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c2',clave,'','',v1,'0',v2,'0']);
    console.log('se guardo en telefono por no encontrarce internet');
    $('#concepto_change,#pago_change').val('');
    
    }  
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
            $('table #gastos_change').prepend( "<tr><td>"+results.rows.item(i).concepto+"</td><td>"+results.rows.item(i).valor+"</td><td><input type='checkbox' value='"+results.rows.item(i).clave+"-"+results.rows.item(i).concepto+"-"+results.rows.item(i).valor+"' class='xj' /></td></tr>");         
        }
}     
         
function delete_gastos_f() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
    function(tx){
       $("input:checkbox:checked").each(function(){
      var a=$(this).val().split("-");
      if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c5',clave:a[0],concepto:a[1],valor:a[2]},
                             beforeSend: function() {$('#send').append("enviando datos");},
                             success: function(data) {
                                if (data=='1'){
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                    db.transaction(
                                    function(tx){
                                        tx.executeSql("delete from gasto where clave=? and concepto=? and valor=?",[a[0],a[1],a[2]]);
                                        console.log('Datos guardados en el servidor');
                                        })
                                    }else{
                                         var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                         db.transaction(                                          
                                         function(tx){
                                        tx.executeSql("delete from gasto where clave=? and concepto=? and valor=?",[a[0],a[1],a[2]]);
                                        tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c5',a[0],'','',a[1],'0',a[2],'0']);
                                        console.log('El servidor regreso un error y se guardaron en telefono');
                                        })
                                        }
                                }                                                           
                              });
            }else{
    tx.executeSql("delete from gasto where clave=? and concepto=? and valor=?",[a[0],a[1],a[2]]);
  tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c5',a[0],'','',a[1],'0',a[2],'0']);
   console.log('No se detecto internet y se guardo en telefono');
   }
   $(this).parents('tr').hide('slow');
   })
});    
 }
//SumarColumna('my-table', 1); 

//ingresar los gastos a la tabla sincronizacion
function save_gastos_d() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(
        function (tx){
  var fecha = new Date(); var dd = fecha.getDate(); var mm = fecha.getMonth()+1;var yyyy = fecha.getFullYear(); var h=fecha.getHours();var m=fecha.getMinutes();var s=fecha.getSeconds();if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} if(h<10){h='0'+h} if(m<10){m='0'+m} if(s<10){s='0'+s}
var fecha = yyyy+'-'+mm+'-'+dd+" "+h+":"+m+":"+s; 
var clave=$("#resultado").text();
   var pr=$('#me_gaste').val();
    var cat=$('#cat').val();
    if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c6',clave:clave,categoria:cat,valor:pr,fecha:fecha},
                             beforeSend: function() {},
                             success: function(data) {
                                 
                                if (data=='1'){ 
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                        db.transaction(
                                        function (tx){
                                        $( "#mensaje" ).popup("open").fadeIn().delay(1000).fadeOut();
                                        $('#me_gaste').val('');$('#me_gaste').focus();                                        
                                        console.log('Datos guardados en el servidor');   
                                        })                                 
                                    }else{
                                         var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                        db.transaction(
                                        function (tx){
                                           tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c6',clave,'','','0',cat,pr,fecha]);//se inserta el sueldo para enviarlo al servidor
                                          $( "#mensaje" ).popup("open").fadeIn().delay(1000).fadeOut();
                                           $('#me_gaste').val('');$('#me_gaste').focus(); 
                                           
                                           console.log('El servidor regreso un error y se guardo en telefono');
                                        })
                                        }                              
                                }                           
                              });
            }else{
   tx.executeSql('insert into sincronizacion(id1, clave, fiva, sueldo, concepto, categoria, valor, fecha) values(?,?,?,?,?,?,?,?)',['c6',clave,'','','0',cat,pr,fecha]);//se inserta el sueldo para enviarlo al servidor
    
    $('#me_gaste').val('');$('#me_gaste').focus();
    $( "#mensaje" ).popup("open").fadeIn().delay(1000).fadeOut();
    }
    });
    } 
 
  //funciones para obtener la imagen
  function onPhotoURISuccess(imageURI) {
      // Obtiene el elemento HTML de la imagen
      var largeImage = document.getElementById('imgop');
      // Revela el elemento de la imagen
      largeImage.style.display = 'block';
      // Muestra la foto capturada
      // Se usan reglas CSS para dimensionar la imagen
      largeImage.src = imageURI;
      $('#meturlimg').val(imageURI);
    }
    // Un botón llamara a esta función
    function getPhoto(source) {
      // Retorna la ruta del fichero de imagen desde el origen especificado
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
      }
    // Llamado cuando algo malo ocurre
    function onFail(message) {
      alert('Ocurrió un error: ' + message);
    }
      
function savemeta(){
     var clave=$("#resultado").text();
    var nommeta=$('#metnombre').val();
    var precio=$('#metprecio').val();    
    var periodo=$('#metperiodo').val();
    var periodo1=$('#metperiododias').val();
    var urlimagen=$('#meturlimg').val()
    if (nommeta==''){$('#metnombre').attr('placeholder','Ingrese su meta').focus();alert('vacio');return false; }
    else if (precio==''){$('#metprecio').attr('placeholder','Ingrese el precio').focus();return false; }
    else if (periodo==''){$('#metperiodo').attr('placeholder','Ingrese el periodo').focus();return false; }
    else if (urlimagen==''){urlimagen='0'}  
      var fecha = new Date(); var dd = fecha.getDate(); var mm = fecha.getMonth()+1;var yyyy = fecha.getFullYear();if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
var fecha = dd+" del "+mm+" de "+yyyy;
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {          
tx.executeSql('insert into metas(nombre,precio,periodo,periodo1,imagen,fecha,ahorro) values(?,?,?,?,?,?,?)',[nommeta,precio,periodo,periodo1,urlimagen,fecha,'0']);
            $("#metnombre,#metprecio,#metperiodo,#meturlimg").val('');
            $('#respmeta').html('Meta agregada').fadeIn().delay(1500).fadeOut('slow');

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
           valmetas.push(results.rows.item(i).id+'|'+results.rows.item(i).nombre+'|'+results.rows.item(i).precio+'|'+results.rows.item(i).periodo+'|'+results.rows.item(i).periodo1+'|'+results.rows.item(i).imagen+'|'+results.rows.item(i).fecha+'|'+results.rows.item(i).ahorro);
        } 
         cargarmeta();      
    }
    
    function cargarmeta(signo){ 
           if (!signo){signo=0}            
        if (m>=0 || m<=valmetas.length){ m+=signo;}        
        var nm=1+m;
        if (m==0){$('#lasts').attr('disabled','true');}else{$('#lasts').removeAttr('disabled');}
        if (m==(valmetas.length-1)){$('#nexts').attr('disabled','true');}else{$('#nexts').removeAttr('disabled');}
        $('#nmeta').html(nm);
        
       var dato=valmetas[m].split('|');       
       $('#metasxx h2').html(dato[1]);      
        if (dato[5]!=0){$('#imgop1').attr('src',dato[5]);}
       $('#fecmeta').html("Agregado: "+dato[6]);
       $('#premeta').html("Precio: $"+dato[2]);
       $('#editmeta').attr('editar',dato[0]);
       $('#slider-2').val(dato[7]);
       $('#slider-2').attr('max',dato[2]);
       $('#mosmet').html('Ahorrado');
       $('#deletemeta').attr('onclick','deletemeta('+dato[0]+')');
       $('#slider-2').slider( "refresh" )
    }
    //mandar datos al servidor
    
function check_sincronizacion() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM sincronizacion', [], mostrardatos);
    });
    }
function mostrardatos(tx,results){
    var len = results.rows.length;
    id=results.rows.item(i).id;
    id1=results.rows.item(i).id1;
    clave=results.rows.item(i).clave;
    fiva=results.rows.item(i).fiva;
    sueldo=results.rows.item(i).sueldo;
    concepto=results.rows.item(i).concepto;
    categoria=results.rows.item(i).categoria;
    valor=results.rows.item(i).valor;
    fecha=results.rows.item(i).fecha;
    if (len!=0){
    for (var i=0; i<len; i++){ 
  $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:id1, clave: clave, fiva:fiva, sueldo:sueldo, concepto:concepto, categoria:categoria, valor:valor ,fecha: fecha },
                             beforeSend: function () {},
                             success: function(data,tx) {
                                if (data=='1'){ 
                                     var db = window.openDatabase("Database", "1.0", "claves test", 200000);
                                    db.transaction(
                                    function(tx){                                                                     
                                    tx.executeSql("delete from sincronizacion where id=?",[id]);
                                    });
                                } 
                                }                          
                              }); 
                              }}
                              $('#resbalance').html('');
}

function ccbalance(){
    var clave=$("#resultado").text();
    $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/ejecutar.php',
                             data: {clave:clave},
                             beforeSend: function () {$('#resbalance').html('Obteniendo datos...')},
                             success: function(data) {
                                $('#resbalance').html(data);
                                }                          
                              }); 
    
}
var abono;
    var idmet;
function antecorte() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM metas', [], corte);
    });
    }
    
function corte(tx,results){
var len = results.rows.length;
console.log('metas '+len);
if (len!=0){
  var clave=$("#resultado").text();
    $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/corte.php',
                             data: {clave:clave},
                             beforeSend: function () {},
                             success: function(data) {
                                if (data=='1'){
                                    var i = 0;
                                    var temp10 = setInterval(function () {if(i==len){clearInterval(temp10);                                   
                                    };showConfirm(results.rows.item(i).nombre);idmet=results.rows.item(i).id;
                                    i++;}, 5000);

                                  }
                                  }
                                });                          
                              };   
}    

function showConfirm(nombre) { 
                                    navigator.notification.alert(
                                    'Guardaste el dinero para '+nombre+'?',
                                    onConfirm, 
                                    'Meta compida?', 
                                     'Si,No' );
                                    
}

function onConfirm(button){
if (button==1){
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(function(tx) {
        tx.executeSql('update metas set ahorro=? where id=?',['500',idmet]);
    });
}
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

