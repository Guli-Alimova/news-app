import { Descriptions } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import {TwitterOutlined   } from '@ant-design/icons';
import { YoutubeOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';

function Footer(){
    return(
         <div class="inner-container">
        <div class="row">
            <div class="col-lg-6"  >
            <a><img src="../assets/img/logo2.png"></img></a>
        </div>
        <div class="col-lg-6">
            <a class="header__link"  href="index.html">PPOLITICS</a>
            <a  class="header__link"  href="aboutus.html">SOCIETY</a>
            <a class="header__link"  href="creataplan.html">BUSINESS</a>
            <a class="header__link"  href="creataplan.html">CULTURE</a>
            <a class="header__link"  href="creataplan.html">SPORT</a>
            <a class="header__link"  href="creataplan.html">TOURISM</a>

        </div>
        <div class="col-lg-6 text-end">
            <a class="footer-icon" href="whatsup.com"><WhatsAppOutlined/></a>
            <a class="footer-icon" href="twetter.com"><TwitterOutlined /></a>
            <a class="footer-icon" href="instagram.com"><InstagramOutlined/></a>
            <a class="footer-icon" href="youtube.com">< YoutubeOutlined /></a>
        </div>
        <br/>
        <div className="adress">
            <a className="footer-link">Terms Of Use</a>
            <a className="footer-link">Privacy Policy</a>
            <a className="footer-link">Cookies</a>
            <a className="footer-link">Assabillity Help</a>
            <a className="footer-link">Advertised us</a>
            <p className="footer-link">Copyright © 2021 News.</p>
            <p className="footer-link"> The News is not responsible for the content of external sites. </p>
        </div>
        </div>  
         </div>
    )
   
 
}
export default Footer;