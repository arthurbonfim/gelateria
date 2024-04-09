import './style.css';

const Footer = () => (
    <footer className='footer'>
        <div className='footer__container container'>
            <div className='footer__info'>
                <div className='footer__img'>
                    <img src='/assets/logo.png' alt='logo'/>
                </div>
                <div>
                    <h4>Endereço</h4>
                    <p>Av. Bernardinho de campos, 98</p>
                    <p>São Paulo, SP 12345-6788</p>
                </div>
                <div>
                    <h4>Contato</h4>
                    <p>info@meusite.com</p>
                    <p>Tel:(11) 3456-7890</p>
                </div>
                <div>
                    <h4>Horários</h4>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className='footer__credit'>
                <p>Gelateria. Desenvolvido por <b>Arthur Bonfim</b></p>
            </div>
        </div>

        
    </footer>
);

export default Footer;