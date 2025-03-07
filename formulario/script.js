   function validarFormulario(event) {
            event.preventDefault();
            
            let nombre = document.getElementById("nombre").value.trim();
            let cif = document.getElementById("cif").value.trim();
            let telefono = document.getElementById("telefono").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensaje = document.getElementById("mensaje").value.trim();
            
            let cifRegex = /^(?=.*[A-Z])[0-9A-Z]{9}$/;
            let telefonoRegex = /^[0-9]{9}$/;
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!nombre || !cif || !telefono || !email || !mensaje) {
                alert("Todos los campos son obligatorios.");
                return;
            }
            
            if (!cifRegex.test(cif)) {
                alert("El CIF debe tener exactamente 9 caracteres, con 8 números y al menos 1 letra mayúscula.");
                return;
            }
            
            if (!telefonoRegex.test(telefono)) {
                alert("El teléfono debe tener 9 dígitos numéricos.");
                return;
            }
            
            if (!emailRegex.test(email)) {
                alert("Ingrese un correo electrónico válido.");
                return;
            }
            
            alert("Formulario enviado correctamente, nos pondremos en contacto con usted.");
            event.target.submit();
        }