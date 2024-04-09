import './style.css';
import Top from '../../components/Top';
import Footer from '../../components/Footer';

const Sobre = () => (
    <section className='sobre' id='sobre'>
        <Top/>

        <section className='a-banner'>
            <div className='container'>
                <h1>A GELATERIA</h1>
            </div>    
        </section>

        <section className='a-info'>
            <div className='a-info__container container'>
                <h2>Sobre Nós</h2>
                <p>Nós simplesmente amamos sorvete!</p>
                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor
                    sorvete para os nosso clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores
                    materias primas para a produção do sorvete. Vendemos tanto para varejo como para atacado.
                </p>
                <p>
                    Nossos clientes podem comprar os nosssos sorvetes e degustar na nossa loja ou levar para sua residência e 
                    aproveitar com a família. Também vendemos para estabelecimentos e criamos eventos, como festa de aniversario,
                    formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco.
                    Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer sua festa mais saborosa, com
                    o melhor sorvete da cidade.
                </p>
            </div>       
        </section>

        <section className='a-imgs'>
            <img src='/assets/sorveteria.jpg' alt='Interior da sorveteria'/>
        </section>

        <Footer/>
    </section>
)

export default Sobre;
