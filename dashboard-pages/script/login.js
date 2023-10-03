const toggle = document.querySelector(".toggle"),
              input = document.querySelector("input");
              toggle.addEventListener("click", () =>{
                  if(input.type ==="password"){
                    input.type = "text";
                    toggle.classList.replace("fa-eye", "fa-eye-slash");
                  }else{
                    input.type = "password";
                  }
              })