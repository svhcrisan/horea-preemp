import React from "react";
import "./Footer.css"
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-logo">
                    <a href="/"><h2 style={{ color: "#fff" }}>Amazing shop</h2></a>
                </div>
                <div className="contact footer-contact" >
                    <h4 className="sub-title"><i class="fas fa-map-marker-alt"></i> My city:
                        <a href="https://goo.gl/maps/27cDydCFh38FUNeb6" target="_blank">
                            <span style={{ color: "#8077aa" }}>Los Angeles</span>
                        </a>
                    </h4>
                    <h4 className="sub-title"><i className="fas fa-phone"></i> 8 800505-04-83</h4>
                </div>
            </footer >

        )
    }
}

export default Footer;
