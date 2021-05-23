function Perfil() {
    return (
        <div>
            <h3>Minha Conta</h3>
            <div>
                <p>Nome completo: </p>
                <input></input>
                <p>CPF: </p>
                <input></input>
                <p>E-mail: </p>
                <input></input>
                <p>CEP: </p>
                <input></input>
            </div>
            <div>
                <a href='./'>Gerenciar doações</a>
                <a href='./'>Gerenciar notificações</a>
            </div>
            <button>Salvar modificações</button>
            <button>Excluir conta</button>
        </div>
    )
}

export default Perfil;