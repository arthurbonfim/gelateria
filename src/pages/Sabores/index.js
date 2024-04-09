import './style.css';
import Top from '../../components/Top';
import Footer from '../../components/Footer';


const Sabores = () => (
    <section className='sabores'>
        <Top/>

        <section className='s-banner'>
            <div className='s-banner__overlayer'></div>
            <div className='s-banner__container container'>
                <h1>NOSSOS SABORES</h1>
            </div>
        </section>

        <section className='s-flavors'>
            <div className='container'>
                <h2>SABORES DE SORVETE</h2> 
                <div className='s-flavors-container'>
                    <div className='s-flavor'>
                        <img src={process.env.PUBLIC_URL + '/assets/sabor-oreo.png'} alt='sorvete de oreo'/>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma expressão de sabor.</p>
                    </div>
                    <div className='s-flavor'>
                        <img src={process.env.PUBLIC_URL + '/assets/sabor-pistache.png'} alt='sorvete de pistache'/>
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorverte sabor pistache com pedacinhos de semente</p>
                    </div>
                    <div className='s-flavor'>
                        <img src={process.env.PUBLIC_URL + '/assets/sabor-cookies-avela.png'} alt='sorvete de cookies e avela'/>
                        <h3>Sorvete de Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className='s-flavor'>
                        <img src={process.env.PUBLIC_URL + '/assets/sorbet-kiwi.png'} alt='sorvete de kiwi'/>
                        <h3>Sorvete de kiwi</h3>
                        <p>Delicioso e refrescante sorverte sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className='s-flavor'>
                        <img src={process.env.PUBLIC_URL + '/assets/sorbet-morango.png'} alt='sorvete de morango'/>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className='s-flavor'>
                        <img src={process.env.PUBLIC_URL + '/assets/sorbet-limao.png'} alt='sorvete de limao'/>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </section>
)

export default Sabores;