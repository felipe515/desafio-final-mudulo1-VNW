import s from './livrosDoados.module.scss';
import livroDoado from '../../assets/livroDoado.png'
export default function LivrosDoados() {
    return (
        <section className={s.livrosDoadoSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={livroDoado} alt="livro doado" />
                    <div>

                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
