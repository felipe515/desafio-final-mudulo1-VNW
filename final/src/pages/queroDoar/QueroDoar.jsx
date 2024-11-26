import s from './queroDoar.module.scss';
import logoLivro from '../../assets/Vector.png';
export default function QueroDoar() {
    return (
        <section className={s.sectionPrincipal}>
            <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>

            <section className={s.sectionForm}>

                <section className={s.sectionTitulo}>
                    <img src={logoLivro} alt="imagem livro aberto" />
                    <p>Infromações do Livro</p>
                </section>

                <section className={s.inputs}>
                    <form action="">
                        <input type="text" placeholder="Titulo" />
                        <input type="text" placeholder="Categoria" />
                        <input type="text" placeholder="Autor" />
                        <input type="text" placeholder="Link da Imagem" />
                        <button>Doar</button>
                    </form>
                </section>

            </section>
        </section>
    )
}