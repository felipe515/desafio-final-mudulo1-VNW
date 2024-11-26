import s from './livrosDoados.module.scss';
import livroDoado from '../../assets/livroDoado.png'
export default function LivrosDoados(){
    return(
        <section className={s.sectionPrimeiro}>
            <h2>Livros Doados</h2>
            
            <section className={s.livroDoado}>
                <a href=""><img src={livroDoado} alt="livro doado" /></a>
                <p>O protagonista</p>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
            </section>
        </section>
    )
}