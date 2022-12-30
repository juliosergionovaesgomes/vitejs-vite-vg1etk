import React from 'react'
import image from '../../../assets/images/Thinking-Man-Transparent.jpeg'
import aboutBk from '../../../assets/images/aboutbk.jpg'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaCreditCard } from 'react-icons/fa'
const Home = () => {
    return (
        <div className="text-white w-full flex items-center justify-center flex-col ">
            <div className='w-full h-full flex items-center justify-center flex-row space-x-2 py-2' style={{ height: 'calc(100vh - 80px)' }}>
                <div className="w-full h-full flex  items-start justify-center flex-col px-20 space-y-8">
                    <h1 className=' w-full   uppercase  text-start ' style={{ zIndex: 123121414 }}>

                        <h1 className='text-6xl' style={{ fontFamily: 'SoulcraftGX' }}>O<span style={{ color: '#f9004d' }}> Código</span> <br /> das Milhas</h1>
                        <span className='text-2xl font-thin'>Aprenda viajar barato e não fique <br />preso a tarifas  flexíveis!</span>
                    </h1>
                    <button className='text-sm uppercase   top-42 -bottom-32 font-bold text-black  rounded-lg p-4 hover:scale-90' style={{ background: '#f9004d' }}>Acessar conteúdo.</button>

                </div>
                <div className="w-full h-full">
                    <img src={image} alt="" className='object-cover h-full w-full opacity-40' />
                </div >
            </div >
            <div className="w-full h-screen pb-16 flex items-center justify-start  bg-neutral-900 flex-col ">
                <img src={aboutBk} alt="" className='absolute z-10 object-cover w-full h-full opacity-5' />
                <h1 className="text-4xl w-full  text-white font-black mt-10 text-center" style={{ zIndex: 9999, fontFamily: 'SoulcraftGX'  }}>ESSE TREINAMENTO FOI FEITO <br/><span style={{ color: '#f9004d' }}>EXCLUSIVAMENTE</span> PARA VOCÊ QUE:</h1>
                <div className='p-10  flex items-center justify-center flex-row   w-4/5 h-80 z-50'>
                    <ul className=" text-lg ">
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  '><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  '><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  '><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  '><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>

                    </ul>
                </div>
                <button className='z-50 text-sm uppercase font-bold text-black  rounded-lg p-4 hover:scale-90' style={{ background: '#f9004d' }}>Acessar conteúdo.</button>

            </div>
            <div className="w-full h-screen flex items-center justify-center  bg-neutral-black flex-row">
                <div className="w-full h-full   flex item-center justify-center flex-col py-10 text-center px-20 ">
                    <h1 className='text-4xl text-start ' style={{ fontFamily: 'SoulcraftGX' }}><span className='tracking-widest'>CHEGOU A HORA</span> <br />DE CRESCER!</h1>
                    <p className='text-justify text-lg mt-10'>Essa imersão foi preparada para empreendedores e gestores que desejam mudar completamente os resultados dos seus negócios. É para quem deseja aprender na prática as técnicas e ferramentas utilizadas pelas empresas mais inovadoras do mundo para crescer e alavancar seus resultados, inclusive, técnicas essas que me fizeram chegar até aqui.
                        Não importa o setor que você empreende ou o tamanho da sua empresa, essa imersão também é pra você.
                        São dois dias intensos de muito conteúdo prático, desde o planejamento até a execução, para que você aprenda como levar o seu negócio para o próximo nível. Sem contar com o valioso networking que agregará de forma imensurável para a sua empresa.</p>
                    <div className='w-full flex items-center justify-center pt-4'>
                        <button className='z-50 w-2/4 text-sm uppercase font-bold text-black  rounded-lg p-4 hover:scale-90' style={{ background: '#f9004d' }}>Acessar conteúdo.</button>
                    </div>
                </div>
                <div className="w-full h-full px-32 py-5  flex flex-col items-center justify-center">
                    {
                        [1, 2, 3, 4].map((element) => <div key={element} className={`w-full h-32 flex flex-row hover:delay-200 hover:transition-transform hover:translate-x-1 space-x-10 items-center justify-start   p-6  ${element === [1, 2, 3, 4].length ? '' : 'border border-b-white  border-b-2 border-t-0 border-l-0 border-r-0 '}`}>

                            <FaCreditCard className='text-5xl ' style={{ color: '#f9004d' }} />
                            <span > <span className='text-2xl font-bold'>Pré Imersão</span> <br /> <span className='text-1xl'>Nivelamento</span></span>
                        </div>)
                    }
                </div>



            </div>
        </div >
    );
}

export default Home