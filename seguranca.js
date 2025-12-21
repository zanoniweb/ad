// Dados dos usuários para login
        const users = [
            { username: "jzanoni", password: "180804", page: "geracaodocumentosadv.html" },
            { username: "drapri", password: "senha123adm", page: "geracaodocumentosadv.html" },
            { username: " ", password: " ", page: "geracaodocumentosadv.html" },
            { username: " ", password: " ", page: "geracaodocumentosadv.html" },
            { username: " ", password: " ", page: "geracaodocumentosadv.html" },
            { username: " ", password: " ", page: "geracaodocumentosadv.html" },
            { username: " ", password: " ", page: "geracaodocumentosadv.html" },

        ];

        function login() {
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            // Limpa a mensagem de erro
            errorMessage.textContent = "";

            // Encontra o usuário correspondente no array
            const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

            if (user) {
                // Se o usuário e a senha estiverem corretos, redireciona para a página apropriada
                window.location.href = user.page;
            } else {
                // Se o login falhar, exibe uma mensagem de erro
                errorMessage.textContent = "Usuário ou senha incorretos!";
            }
        }