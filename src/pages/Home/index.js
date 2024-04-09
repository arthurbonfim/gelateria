import './style.css';
import Top from '../../components/Top'
import Footer from '../../components/Footer';

export default function Home () {
    return(
        <div className="home">
            <Top/>

            <section className='h-banner'>
                <div className='h-banner__container container'>
                    <h1>SORVETE ARTESANAL</h1>
                </div>    
            </section>

            <section className='h-content'>
                <div className='h-content__img'>
                    <img src={process.env.PUBLIC_URL + '/assets/banner-sabores.jpg'} alt='sabores de sorvete'/>
                </div>
                <div className='h-content__text' id='flavors'>
                    <h2>Nossos Sabores</h2>
                    <p>Novos e deliciosos!</p>
                    <p>
                        Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos 
                        são naturais, à base de frutas e sem nenhum conservante!Também temos opções sem lactose e sem açúcar.
                        Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                    </p>
                </div>
            </section>

            <section className='h-content h-content--inverted' id='events'>
                <div className='h-content__text'>
                    <h2>Nossos Eventos</h2>
                    <p>Delícias com sorvete!</p>
                    <p>
                        Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer
                        os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente!
                    </p>
                </div>
                <div className='h-content__img'>
                    <img src={process.env.PUBLIC_URL + '/assets/eventos-image.jpg'} alt='mesa com sorvetes'/>
                </div>
            </section>

            <section className='h-content' id='about-us'>
                <div className='h-content__img'>
                    <img src={process.env.PUBLIC_URL + '/assets/sobre-image.jpg'} alt='amigos tomando sorvete'/>
                </div>
                <div className='h-content__text'>
                    <h2>Sobre nós</h2>
                    <p>Alegria em cada casquinha!</p>
                    <p>
                        Venha tomar o melhor sorvete da região aqui com gente! Nós estamos há anos no mercado produzindo o que tem de 
                        melhor para o nosso cliente e você não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite o melhor 
                        atendimento e o melhor sorvete da cidade.
                    </p>
                </div>
            </section>

            <Footer/>

        </div>
    )
}