firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
/*         var nombre_archivo = filename();
        if(nombre_archivo=="index.html") location.href = "home.html"; */
        alert("Autorizado")
    } else {
        alert("No autorizado");
/*         var nombre_archivo = filename();
        if(nombre_archivo!="index.html" && nombre_archivo!="" ) location.href = "index.html"; */

    }
});  
//***** selecciona el nombre del archivo activo en el navegador */
function filename(){
    var rutaAbsoluta = self.location.href;   
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}