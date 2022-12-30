
import React, { useState, useEffect } from "react"
const FixHeaderComponent = () => {
    const [dias, setDias] = useState<number>()
    const [horas, setHoras] = useState<number>()
    const [minutos, setMinutos] = useState<number>()
    const [segundos, setSegundos] = useState<number>()
    const [mes] = useState(11)
    const [diaDefault] = useState(31)

    const contador = () => {
        let now = new Date();
        let eventDate = new Date(now.getFullYear(), mes, diaDefault);

        let currentTime = now.getTime();
        let eventTime = eventDate.getTime();
        let remTime = eventTime - currentTime;


        let s = Math.floor(remTime / 1000)
        let m = Math.floor(s / 60)
        let h = Math.floor(m / 60)
        let d = Math.floor(h / 24)

        h %= 24
        m %= 60;
        s %= 60;

        h = h < 10 ? 0 + h : h;
        m = m < 10 ? 0 + m : m;
        s = s < 10 ? 0 + s : s;


        setHoras(h)
        setMinutos(m)
        setDias(d)
        setSegundos(s)
        setTimeout(contador, 1000);
    }

    useEffect(() => {
        contador()
    })

    return (
        <header className="w-full h-20   flex justify-center items-center space-x-3 " style={{ background: '#f9004d' }}>
            <div>
                <h1 className="text-black text-lg font-serif  ">AS VAGAS ENCERRAM EM :</h1>
            </div>
            <div className="font-semibold text-black  flex flex-row space-x-3">
                <span className="flex item-center justify-center flex-col text-center  -space-y-2">
                    <h6 className="text-1xl font-normal">Dias</h6>
                    <h1 className="text-4xl font-extrabold">{dias}</h1>
                </span>
                <span className="flex item-center justify-center flex-col text-center  -space-y-2">
                    <h6 className="text-1xl font-normal">Horas</h6>
                    <h1 className="text-4xl font-extrabold">{horas}</h1>
                </span>
                <span className="flex item-center justify-center  text-center flex-col -space-y-2">
                    <h6 className="text-1xl font-normal">Minutos</h6>
                    <h1 className="text-4xl font-extrabold">{minutos}</h1>
                </span>
                <span className="flex item-center justify-center flex-col text-center  -space-y-2">
                    <h6 className="text-1xl font-normal">Segundos</h6>
                    <h1 className="text-4xl font-extrabold">{segundos}</h1>
                </span>
            </div>
        </header>
    )

}

export default FixHeaderComponent