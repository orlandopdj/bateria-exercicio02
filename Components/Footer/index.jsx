import React from "react";

export default function Footer() {
    const placeOrder = () => {
        console.log('Direcionando para fazer pedido...')
    }
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const fraseOpen = '🕛 Tamo aberto até as 22h. Vem visitar a gente ou faça seu pedido online.'
    const fraseClosed = '🕛 Vamo abrir amanhã as 12h'
    console.log(hour, minutes, seconds)
    return (
        <>
            <div className="footer">
                <div className="order">
                    <p>
                        {hour < 22 && minutes < 60 ? fraseOpen : fraseClosed}
                    </p>
                    <button className="btn" onClick={placeOrder}>
                        Fazer pedido
                    </button>
                </div>
            </div>
        </>
    )
}