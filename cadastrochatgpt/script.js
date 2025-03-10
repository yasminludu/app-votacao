let cadastroLista = [];
let contador = 1;

function cadastrar(event) {
    event.preventDefault();

    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;
    const usuario = document.getElementById('cadastroUsuario').value;
    const senha = document.getElementById('cadastroSenha').value;

    if (nomeCompleto && dataNascimento && cpf && usuario && senha) {
        cadastroLista.push(
            `${contador}. Nome: ${nomeCompleto}, Nascimento: ${dataNascimento}, CPF: ${cpf}, Usuário: ${usuario}, Senha: ${senha}`
        );
        contador++;

        const dados = cadastroLista.join('\n');
        const arquivo = new Blob([dados], { type: 'text/plain' });

        const a = document.createElement('a');
        a.href = URL.createObjectURL(arquivo);
        a.download = 'usuarios.txt';
        a.click();

        alert('Usuário cadastrado com sucesso!');

        document.getElementById('nomeCompleto').value = '';
        document.getElementById('dataNascimento').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('cadastroUsuario').value = '';
        document.getElementById('cadastroSenha').value = '';
    } else {
        alert('Preencha todos os campos!');
    }
}

function login(event) {
    event.preventDefault();
    alert('Esta funcionalidade precisa ser implementada para verificar o login.');
}
