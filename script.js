function comparar(){
        const senhas={fulano123:"xxxxx",fulano345:"sssss"};
        var user=document.getElementById("username").value;
        var senha=document.getElementById("password").value;
         if(senhas.hasOwnProperty(user)){
                     if(senha.toString()===senhas[user]){
                        alert("Logando,guarde!")
                     }
                     else{
                        document.getElementById("message").innerHTML="Usuário ou senha invalida1!";
                     }
         }
        else{
            document.getElementById("message").innerHTML="Usuário ou senha invalida!";
        }
 }

document.getElementById("btnlogin").addEventListener("click",comparar);