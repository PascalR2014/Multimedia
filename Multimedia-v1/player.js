// Information DOM interface - dom/interfaces/html/nsIDOMHTMLMediaElement.idl
/* 
The basis for the nsIDOMHTMLAudioElement and nsIDOMHTMLVideoElement interfaces, 
which in turn implement the <audio> and <video> HTML5 elements. 
*/

/* Info code
La première ligne récupère le premier élément video dans le document,
et la seconde appelle la méthode play() de l'élément, telle que définie 
dans l'interface nsIDOMHTMLMediaElement utilisée pour implémenter les éléments de médias. 
*/

var v = document.getElementsByTagName("video")[0];
v.play();
v.pause();
v.loadstart();
v.suspend();
v.ended();
v.volumechange();
v.error();
