import logoFacebook from '../../assets/face.png'
import logoTwitter from '../../assets/Twitter.png'
import logoYoutube from '../../assets/youtube.png'
import logoLinkedin from '../../assets/linkedin.png'
import logoInsta from '../../assets/insta.png'
import s from './footer.module.scss';
export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="" /></a>
                    <a href=""><img src={logoInsta} alt="" /></a>
                    <a href=""><img src={logoTwitter} alt="" /></a>
                    <a href=""><img src={logoYoutube} alt="" /></a>
                    <a href=""><img src={logoLinkedin} alt="" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}