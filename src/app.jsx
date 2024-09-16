const App = () => {
    const handleClickMenosIntervalo = () => console.log('Clicou no menos do Intervalo')
    const handleClickMenosContagem = () => console.log('Clicou no menos do Contagem')
    const handleClickMaisIntervalo = () => console.log('Clicou no mais do Intervalo')
    const handleClickMaisContagem = () => console.log('Clicou no mais do Contagem')
    return (
        <>
            <div className="container">
                <div className="count">
                    <button onClick={handleClickMenosIntervalo}>-</button>
                    <h2>Intervalo: 1</h2>
                    <button onClick={handleClickMaisContagem}>+</button>
                </div>
                <div className="count">
                    <button onClick={handleClickMenosContagem}>-</button>
                    <h2>Contagem: 0</h2>
                    <button onClick={handleClickMaisIntervalo}>+</button>
                </div>
                <h2>Hoje é Domingo, 22 de out. de 2023</h2>
            </div>
        </>
    )
}

export { App }
