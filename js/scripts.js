(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
         //getElementById
        
        //var logo = document.getElementById('logo');
        //var navegacion = document.getElementById('navegacion');
        //navegacion.style.display ="none";
        //
        //
        // //getElementsByClassName
        //
        //var navegacion = document.getElementsByClassName('navegacion');
        //console.log(navegacion[0]);
        //var contenido = document.getElementsByClassName('contenido');
        //console.log(contenido[0]);
        //contenido[0].style.display = 'none';
       //
       // //
       // ////getElementsByTagName
       // //
       // //var enlaces = document.getElementsByTagName('a');
       // //console.log(enlaces.length);
       // //
       // //for(var i =0; i < enlaces.length;i++){
       // //  enlaces[i].setAttribute('target', '_blank');
       // //}
       // //
       // //var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
       // //console.log(enlacesSidebar);
       // //
       // //for(var i = 0; i < enlacesSidebar.length; i++) {
       // //  enlacesSidebar[i].setAttribute('href', 'http://www.google.com');
       // //}
       // //
       // //var logo = document.querySelector('.logo');
       // //console.log(logo);
       // //
       // //var encabezado = document.querySelectorAll('h2, footer p');
       // //console.log(encabezado);
       // //
       // //var enlaces = document.querySelectorAll('a');
       // //console.log(enlaces);
     //
     //   //var enlace = document.querySelectorAll('a');
     //   //
     //   //for(var i = 0; i< enlace.length;i++){
     //   //  console.log(enlace[i].innerText);
     //   //}
     //
     //   //var enlaces = document.querySelectorAll('#menu ul li a')[0];
     //   //console.log(enlaces.nodeType);
     //   //console.log(enlaces.nodeName);
     //   //console.log(enlaces.attributes);
     //   //console.log(enlaces.firstChild);
        //console.log(enlaces.firstChild.nodeValue);
        
        //enlaces.firstChild.nodeValue = "Home";
        //enlaces.id = "mi_id";
      //
      //  //
      //  ////Crear contenido
      //
      //  //var sidebar = document.querySelector('#sidebar');
      //  //var nuevoElemento = document.createElement("H1");
      //  //var nuevoTexto = document.createTextNode("Hola Mundo");
      //  //nuevoElemento.appendChild(nuevoTexto);
      //  //sidebar.appendChild(nuevoElemento);
      //  //
      //  //// Agregar Entrada 6:
      //  //var enlacesSidebar = document.querySelectorAll('#sidebar ul');
      //  //// creando el enlace
      //  //var nuevoEnlace = document.createElement('A');
      //  //nuevoEnlace.setAttribute('href', 'http://www.google.com');
      //  //var textoEnlace = document.createTextNode('Entrada 6');
      //  //nuevoEnlace.appendChild(textoEnlace);
      //  //// creando la lista
      //  //var nuevaLista = document.createElement('LI');
      //  //nuevaLista.appendChild(nuevoEnlace);
      //  //// lo agregamos al menu
      //  //enlacesSidebar[0].appendChild(nuevaLista);
      //
      ////// Clonar nodo
      //
      //va//r contenido = document.querySelectorAll('main');
      //va//r nuevoContenido = contenido[0].cloneNode(true);
      //
      //va//r sidebar = document.querySelector('aside');
      //
      //si//debar.insertBefore(nuevoContenido, sidebar.childNodes[5]);
      //
     //
     // /*// Creando lista de post populares**/
     //
     // va//r sidebar = document.querySelector('aside');
     // //
     // //va//r masVisitados = document.createElement('H2');
     // //va//r textoVisitados = document.createTextNode('Post más visitados');
     // //ma//sVisitados.appendChild(textoVisitados);
     // //si//debar.insertBefore(masVisitados, sidebar.childNodes[0] );
     // //  //        
     // //va//r contenido = document.querySelectorAll('main h2');
     // //
     // //fo//r(var i = 0; i < contenido.length; i++) {
     // //  //  var nuevoElemento = document.createElement('LI');
     // //  //  var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
     // //  //  nuevoElemento.appendChild(nuevoTexto);
     // //  //  sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
     // //}//
  //
      //
      // eliminar nodos
     
     // var primerPost = document.querySelector('main article');
     // console.log(primerPost);
     // 
     // primerPost.parentNode.removeChild(primerPost);
     // 
     // var enlaces =document.querySelectorAll('#navegacion nav ul li a')[10];
     // console.log(enlaces);
     // enlaces.parentNode.removeChild(enlaces);
     // 
     //
     // var viejoNodo = document.querySelector('main h2');
     // var nuevoNodo = document.querySelector('footer h2');
     // viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);
      
      
      // Reemplazar nodo con uno nuevo.
      
      var nuevoTitulo = document.createElement('H2');
      var nuevoTexto =document.createTextNode('Holi');
      nuevoTitulo.appendChild(nuevoTexto);
      
      var viejoNodo = document.querySelector('main h2');
      viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);
      
      
      
      
      
      
    
    
  });
  
})();