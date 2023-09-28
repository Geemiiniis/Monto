var nombre, numCedula, prestamoPedido=0; porcentajePrestamo=0;
for (var persona=1; persona<=5; persona++) {
    nombre = prompt("Ingrese el nombre del cliente" );
    numCedula = prompt("Ingrese la cedula del cliente " );
    prestamoPedido = parseFloat (prompt("Ingrese el prestamo que realizara el cliente correspondiente"));

    if parseFloat((prestamoPedido>=100)){
     porcentajePrestamo = (prestamoPedido)*0.10;
     alert(" el descuento total del cliente: " + nombre  +", con numero de cedula: " +numCedula +", es  = " + porcentajePrestamo);
    }

     else { ((prestamoPedido<100)) 
     porcentajePrestamo = (prestamoPedido)*0.02;
     alert(" el descuento total del cliente: " + nombre  +", con numero de cedula: " +numCedula +", es  = " + porcentajePrestamo);
    }
    
}