import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Luigi Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Tzaneen, Luigi Repairs  provides a trained staff ready to meet your repair repair needs.</p>
                <address className="public__addr">
                    Luigi Repairs<br />
                    19 Freesia Street<br />
                    Arbor Park, Tzaneen 0850<br />
                    <a href="tel:+27722553772">(072) 255-3772</a>
                </address>
                <br />
                <p>Owner: Vutomi L. Khosa</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public