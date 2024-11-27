import s from './queroDoar.module.scss';
import logoLivro from '../../assets/Vector.png';
export default function QueroDoar() {
    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

                    <form action="">
                        <div>
                            <img src={logoLivro} alt="imagem livro aberto" />
                            <h2>Infromações do Livro</h2>
                        </div>
                        <input type="text" placeholder="Titulo" />
                        <input type="text" placeholder="Categoria" />
                        <input type="text" placeholder="Autor" />
                        <input type="text" placeholder="Link da Imagem" />
                        <input className={s.buttonDoar} type="submit" value="Doar" />
                    </form>

        </section>
    )
}