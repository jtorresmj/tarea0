function mostrarDatos() {
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const mensaje = document.getElementById("mensaje").value;
    
    alert(`Nombres: ${nombres}
      \nApellidos: ${apellidos}
      \nNúmero Telefónico: ${telefono}
      \nCorreo Electrónico: ${email}
      \nFecha de Nacimiento: ${fechaNacimiento}
      \nMensaje: ${mensaje}`);
  }
  