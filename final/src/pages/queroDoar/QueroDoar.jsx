import s from './queroDoar.module.scss';
import logoLivro from '../../assets/Vector.png';
import { useState } from 'react';
import axios from 'axios';

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [autor, setAutor] = useState("");
    const [imagem_url, setImagem_url] = useState("");

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
        setImagem_url(e.target.value)
    }

    const enviarDados = async () => {
    
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post("https://api-livros-vai-na-web.onrender.com/doar", dadosPEnviar)
            
       alert("Livro cadastrado com sucesso!")
    }

    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <img src={logoLivro} alt="imagem livro aberto" />
                            <h2>Infromações do Livro</h2>
                        </div>
                        <input type="text" placeholder="Titulo" onChange={capturaTitulo} required/>
                        <input type="text" placeholder="Categoria" onChange={capturaCategoria} required/>
                        <input type="text" placeholder="Autor" onChange={capturaAutor} required/>
                        <input type="text" placeholder="Link da Imagem" onChange={capturaImagem} required/>
                        <input className={s.buttonDoar} type="submit" value="Doar" onClick={enviarDados}/>
                    </form>

        </section>
    )
}