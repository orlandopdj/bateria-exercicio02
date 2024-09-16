const App = () => {

    const handleClickCloseButton = (e) => console.log(e.target.textContent)
    const handleClickBackButton = (e) => console.log(e.target.textContent)
    const handleClickNextButton = (e) => console.log(e.target.textContent)

    return (
        <>
            <div className="container-close">
                <button onClick={handleClickCloseButton} className="close">
                    <span>Fechar</span>
                </button>
            </div>

            <div className="steps">
                <div className="numbers">
                    <div className="active">1</div>
                    <div>2</div>
                    <div>3</div>
                </div>

                <p className="message">Passo 1: Entender o problema do cliente</p>

                <div className="buttons">
                    <button onClick={handleClickBackButton}>
                        <span>
                            Anterior</span></button>
                    <button onClick={handleClickNextButton}
                    ><span>
                            Próximo</span></button>
                </div>

            </div>
        </>
    )
}

export { App }
