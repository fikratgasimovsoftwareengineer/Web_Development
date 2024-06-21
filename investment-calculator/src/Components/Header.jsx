import logo from  '../images/investment-calculator-logo.png'
import '../style/header.css'

export default function Header(){

    return (
        <header id ="header">
            <img src={logo} alt='Logo showing money bag'></img>
            <h1>Invetment calculator</h1>
        </header>

    );
}

