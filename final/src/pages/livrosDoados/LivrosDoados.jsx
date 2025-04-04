import s from './livrosDoados.module.scss';
import livroDoado from '../../assets/livroDoado.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const resposta = await axios.get("https://api-livros-vai-na-web.onrender.com/livros")
        setLivros(resposta.data)
    }

    useEffect(() => {
        getLivros()
    }, [])

    return (
        <section className={s.livrosDoadoSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                {livros.map((item) => (

                    <section>
                        <div>
                            <h3>{item.titulo}</h3>
                            <img src={item.imagem_url} alt={item.titulo} />
                        </div>
                    </section>
                ))}

            </section>
        </section>
    )
}
