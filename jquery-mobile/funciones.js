$(document).ready(function(){
    
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
 $('#continue').click(function(){
    $.mobile.navigate( "#page3",{transition : "slide"} ); 
 });
 //evitar que los campos de gastos fijos no esten vacios
$("#ingresar").click(function(){
    var v1=$('#concepto').val();
    var v2=$('#pago').val();
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

 function checar(tx) {   
        tx.executeSql('SELECT * FROM clave', [], revisar);
    }

//abrir la bd y comprobar si existe y generar y guardar la clave
 function checar_c1(){
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(checar_c2);
 }
 function checar_c4(){
    var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(checar_c5);
 }
  function checar_c2(tx) {
        tx.executeSql('SELECT * FROM sueldo', [],checar_c3);
    }
  function checar_c5(tx) {
        tx.executeSql('SELECT * FROM gasto', [],checar_c6);
    }
 function checar_c3(tx, results) {
        var len = results.rows.length;
        console.log(len+" registros encontrados");
        if (len!=0){
           $.mobile.navigate("#page2",{},0);  
          checar_c4();           
        }        
        }
 function checar_c6(tx, results) {
        var len = results.rows.length;
        console.log("fdjkg "+len+" registros encontrados");
        if (len!=0){
           $.mobile.navigate("#page3");  
        }        
        }
 //se checa si ya esta configurado, la funcion de repides, y se crea el id de usuario
 function onDeviceReady() {
    checar_c1();FastClick.attach(document.body);
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(claveDB,successCB,clave_error);
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);
    }
     var online;
    function onOnline() {
   online='1';
   $('h1').append(online);  
}
function onOffline() {
   online='0';
   $('h1').append(online); 
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
    tx.executeSql('CREATE TABLE IF NOT EXISTS clave(id unique, clave,fecha TEXT)'); 
    tx.executeSql('CREATE TABLE IF NOT EXISTS sueldo(id TEXT, fiva,sueldo)');      
    tx.executeSql('CREATE TABLE IF NOT EXISTS sincronizacion(id INTEGER PRIMARY KEY AUTOINCREMENT, script TEXT)'); 
     if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c1', clave: clave, fecha: fecha },
                             beforeSend: function () {$('#send').append("enviando datos");},
                             success: function(data,tx) {
                                if (data=='1'){ 
                                    db.transaction(
                                    function(tx){
                                    $('#send').text('Datos guardados');                                    
                                    tx.executeSql('insert into clave(id,clave,fecha) values(1,"'+clave+'","'+fecha+'")');                                
                                    console.log('se guardaron en el servidor y en el telegono');
                                    });
                                }else{
                                    db.transaction(
                                    function(tx){
                                    tx.executeSql('insert into clave(id,clave,fecha) values(1,"'+clave+'","'+fecha+'")'); 
                                    tx.executeSql('insert into sincronizacion(script) values(?)',["insert into clave(clave,fecha) values('"+clave+"','"+fecha+"')"]);//se inserta la clave generada para enviarla al servidor
                                    console.log('enviados pero ocurrio error y se mandan al telefono');
                                   })
                                   }
                                                              
                                }                            
                              });
            }else{
    tx.executeSql('insert into clave(id,clave,fecha) values(1,"'+clave+'","'+fecha+'")'); 
    tx.executeSql('insert into sincronizacion(script) values(?)',["insert into clave(clave,fecha) values('"+clave+"','"+fecha+"')"]);//se inserta la clave generada para enviarla al servidor
      console.log('datos guardados en telefono');
    }
    }
 function clave_error(err) {
      // console.log("se a producido un error "+err.code);
    }
 function checar_clave(tx) {
        tx.executeSql('SELECT * FROM clave', [], querySuccess, clave_error);
    }
 function successCB() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(checar_clave,clave_error);
    }
 function querySuccess(tx, results) {
        var len = results.rows.length;
        for (var i=0; i<len; i++){
            $('#resultado,#fgs,#cfs').append( results.rows.item(i).clave)+"<br/>";          
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
                                     db.transaction(
                                    function(tx){
                                    tx.executeSql('insert into sueldo(id,fiva,sueldo) values(?,?,?)',[clave,fiva,sueldo]);
                                    $('#send').text('Datos guardados');
                                    $.mobile.navigate( "#page2",{transition : "slide"} );
                                    console.log("guardados en servidor");
                                    })
                                }else{  
                                    db.transaction(
                                    function(tx){
                                   tx.executeSql('insert into sueldo(id,fiva,sueldo) values(?,?,?)',[clave,fiva,sueldo]);
                                   tx.executeSql('insert into sincronizacion(script) values(?)',["insert into sueldo(clave,fiva,sueldo) values('"+clave+"','"+fiva+"','"+sueldo+"')"]);//se inserta el sueldo para enviarlo al servidor
                                    $.mobile.navigate( "#page2",{transition : "slide"} );
                                   console.log("mandados a servidor regreso un error");
                                  })
                                     }
                              
                                }                           
                              });
            }else{
    tx.executeSql('insert into sueldo(id,fiva,sueldo) values(?,?,?)',[clave,fiva,sueldo]);
    tx.executeSql('insert into sincronizacion(script) values(?)',["insert into sueldo(clave,fiva,sueldo) values('"+clave+"','"+fiva+"','"+sueldo+"')"]);//se inserta el sueldo para enviarlo al servidor
   console.log("se insertaron los registros en el telefono");
   $.mobile.navigate( "#page2",{transition : "slide"} );
}
},clave_error);
    }    


//modificar el sueldo
function mostrar_sueldo() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(checar_sueldo,clave_error);
    } 
 function checar_sueldo(tx) {
        tx.executeSql('SELECT * FROM sueldo', [], show_sueldo);
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
                                    db.transaction(
                                    function(tx){
                                    tx.executeSql('update sueldo set fiva=?, sueldo=? where id=?',[fiva,sueldo,clave]);
                                    $('#rgd').text('Datos guardados');
                                    console.log('datos guardados con exito en el servidor');
                                    
                                    })                                    
                                    }else{ 
                                        db.transaction(
                                        function(tx){
                                        tx.executeSql('update sueldo set fiva=?, sueldo=? where id=?',[fiva,sueldo,clave]);
                                        tx.executeSql('insert into sincronizacion(script) values(?)',["update sueldo set fiva='"+fiva+"',sueldo='"+sueldo+"' where clave='"+clave+"'"]);
                                        $('#rgd').text('Datos guardados');
                                        console.log('el servidor marco error y se guardaron en el telefono');
                                        })
                                        }
                              
                                }                           
                              });
            }else{
    tx.executeSql('update sueldo set fiva=?, sueldo=? where id=?',[fiva,sueldo,clave]);
    tx.executeSql('insert into sincronizacion(script) values(?)',["update sueldo set fiva='"+fiva+"',sueldo='"+sueldo+"' where clave='"+clave+"'"]);//se inserta el sueldo para enviarlo al servidor
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
    tx.executeSql('CREATE TABLE IF NOT EXISTS gasto(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,concepto,valor)');
    if (online=='1'){
                $.ajax({
                             type: 'POST',
                             url: 'http://2030.mx/dinero/consultas.php',
                             data: {id:'c4',clave:clave,concepto:v1,valor:v2},
                             beforeSend: function() {$('#send').append("enviando datos");},
                             success: function(data) {
                                if (data=='1'){
                                    db.transaction(
                                    function(tx){
                                        tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],nueva_consulta);
                                        $('#concepto,#pago').val('');
                                        console.log('Datos guardados en el servidor');
                                        })
                                    }else{
                                        db.transaction(
                                        function(tx){
                                            tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],nueva_consulta);
                                            tx.executeSql("insert into sincronizacion(script) values(?)",["insert into gasto(clave,concepto,valor) values('"+clave+"','"+v1+"','"+v2+"')"]);
                                            $('#concepto,#pago').val('');
                                            })
                                        }
                              
                                }                           
                              });
            }else{ 
    tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],nueva_consulta);
    tx.executeSql("insert into sincronizacion(script) values(?)",["insert into gasto(clave,concepto,valor) values('"+clave+"','"+v1+"','"+v2+"')"]);
    $('#concepto,#pago').val('');
    }
});
    } 
function nueva_consulta() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(checar_gastos);
    } 
 function checar_gastos(tx) {
        tx.executeSql('SELECT * FROM gasto', [], alguna);
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
                                    db.transaction(
                                    function (tx){
                                        tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],check_gas_fi);
                                        $('#concepto_change,#pago_change').val('');
                                        console.log('Datos guardados en el servidor');
                                        })
                                    }else{ 
                                        db.transaction(
                                    function (tx){
                                        tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],check_gas_fi);
                                        tx.executeSql("insert into sincronizacion(script) values(?)",["insert into gasto(clave,concepto,valor) values('"+clave+"','"+v1+"','"+v2+"')"]);
                                        console.log('El servidor regreso un error y se guardaron en telefono');
                                        $('#concepto_change,#pago_change').val('');
                                        })
                                        }
                              
                                }                           
                              });
            }else{
    tx.executeSql('insert into gasto(clave,concepto, valor) values(?,?,?)',[clave,v1,v2],check_gas_fi);
     tx.executeSql("insert into sincronizacion(script) values(?)",["insert into gasto(clave,concepto,valor) values('"+clave+"','"+v1+"','"+v2+"')"]);
    console.log('se guardo en telefono por no encontrarce internet');
    $('#concepto_change,#pago_change').val('');
    }  
});
    } 
function check_gas_fi() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(checar_gastos_c);
    } 
 function checar_gastos_c(tx) {
        tx.executeSql('SELECT * FROM gasto', [], check_change_gastos_f);
    }    
function check_change_gastos_f(tx,results){
    var len = results.rows.length;
    $('table #gastos_change').html('');
        for (var i=0; i<len; i++){            
            $('#my-table-change #gastos_change').append("<tr><td>"+results.rows.item(i).concepto+"</td><td>"+results.rows.item(i).valor+"</td><td><input type='checkbox' value='"+results.rows.item(i).clave+"-"+results.rows.item(i).concepto+"-"+results.rows.item(i).valor+"' id='xj' /></td></tr>");
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
                                    db.transaction(
                                    function(tx){
                                        tx.executeSql("delete from gasto where clave=? and concepto=? and valor=?",[a[0],a[1],a[2]]);
                                        console.log('Datos guardados en el servidor');
                                        })
                                    }else{
                                         db.transaction(
                                         function(tx){
                                        tx.executeSql("delete from gasto where clave=? and concepto=? and valor=?",[a[0],a[1],a[2]]);
                                        tx.executeSql("insert into sincronizacion(script) values(?)",["delete from gasto where clave='"+a[0]+"' and concepto='"+a[1]+"' and valor='"+a[2]+"'"]);
                                        console.log('El servidor regreso un error y se guardaron en telefono');
                                        })
                                        }
                                }                                                           
                              });
            }else{
   tx.executeSql("delete from gasto where clave=? and concepto=? and valor=?",[a[0],a[1],a[2]]);
   tx.executeSql("insert into sincronizacion(script) values(?)",["delete from gasto where clave='"+a[0]+"' and concepto='"+a[1]+"' and valor='"+a[2]+"'"]);
   
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
                                        $( "#mensaje" ).popup("open");
                                        $('#me_gaste').val('');$('#me_gaste').focus();                                        
                                        console.log('Datos guardados en el servidor');                                    
                                    }else{
                                        db.transaction(
                                        function (tx){
                                           tx.executeSql('insert into sincronizacion(script) values(?)',["insert into gasto_hormiga(clave,categoria,valor,fecha) values('"+clave+"','"+cat+"','"+pr+"','"+fecha+"')"]);//se inserta el sueldo para enviarlo al servidor
                                          $( "#mensaje" ).popup("open");
                                           $('#me_gaste').val('');$('#me_gaste').focus(); 
                                           
                                           console.log('El servidor regreso un error y se guardo en telefono');
                                        })
                                        }
                              
                                }                           
                              });
            }else{
    tx.executeSql('insert into sincronizacion(script) values(?)',["insert into gasto_hormiga(clave,categoria,valor,fecha) values('"+clave+"','"+cat+"','"+pr+"','"+fecha+"')"]);//se inserta el sueldo para enviarlo al servidor
    
    $('#me_gaste').val('');$('#me_gaste').focus();
    $( "#mensaje" ).popup("open");
    }
    });
    } 
 
 
// function SumarColumna(grilla, columna) {
// 
//    var resultVal = 0.0; 
//         
//    $("#" + grilla + " tbody tr").not(':first').not(':last').each(
//        function() {
//         
//            var celdaValor = $(this).find('td:eq(' + columna + ')');
//            
//            if (celdaValor.val() != null)
//                    resultVal += parseFloat(celdaValor.html().replace(',','.'));                     
//        }          
//    );    
//    $("#" + grilla + " tfoot tr:last td:eq(" + columna + ")").html(resultVal.toFixed(2).toString().replace('.',','));   
// 
//}  

//checar contenido de la tabla de sincronizacion
 function sincro() {
        var db = window.openDatabase("Database", "1.0", "claves test", 200000);
        db.transaction(checar_sincronizacion);
    }
  function checar_sincronizacion(tx) {
        tx.executeSql('SELECT * FROM sincronizacion', [], sincrony);
    }
 function sincrony(tx, results) {
        var len = results.rows.length;
        console.log('se encontraron '+len+' resgistros');
        for (var i=0; i<len; i++){ 
           // var script=results.rows.item(i).script;
//            if (online=='1'){                
//              $.ajax({
//                             type: 'POST',
//                             url: 'http://2030.mx/dinero/consultas.php',
//                             data: {id:'c7',script:script},
//                             beforeSend: function() {},
//                             success: function(data) {
//                                if (data=='1'){
//                                    db.transaction(
//                                    function (tx){
//                                    tx.executeSql("delete from sincronizacion where id=?",[results.rows.item(i).id]);
//                                    console.log('dato ='+results.rows.item(i).id);   
//                                        })
//                                    }else{}                              
//                               }                           
//                              });  
//            }
            $('#consin').append("<tr><td>"+results.rows.item(i).script+"</td></tr>");          
        }
    }