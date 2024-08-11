import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-heading">
            <h2>WE COOK ONLY <span>THE MOST <br /> DELICIOUS</span> MEALS</h2>
        </div>
        <div className="footer-links">
            <div className="footer-link">
                <h4>ADDRESS</h4>
                <p>India - <br />
                785 Street , Office 478 <br />
                Bengaluru , 573412
                </p>
            </div>
            <div className="footer-link">
                <h4>SAY HELLO</h4>
                <p>info@email.com</p>
                <p>+91 9876543210</p>
            </div>
            <div className="footer-link">
                <h4>SOCIALS</h4>
                <p>Facebook</p>
                <p>Linkdin</p>
                <p>Instagram</p>
                <p>X.com</p>
            </div>
        </div>
        <div className="footer-foot">
            <hr />
            <p>JashWanthSPoojary @ 2024 . All Rights Reserved </p>
        </div>

    </div>
  )
}

export default Footer