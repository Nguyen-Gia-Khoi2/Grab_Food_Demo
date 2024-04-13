import style from './Footer.module.css'
import appstore from '../assets/appstore.png'
import CHplay from '../assets/CHplay.png'
import Logo from '../assets/Logo.png';
import squarefacebook1 from '../assets/squarefacebook1.svg'
import squareinstagram from '../assets/squareinstagram.svg'
import squaretwitter from '../assets/squaretwitter.svg'

function Footer (){

    return(
        <div className={style.Footer_Container}>
            <div className={style.Footer}>
                <div className={style.Logo_Container}>
                    <a className={style.imglogo_footer} href='/'>
                        <img src={Logo} className={style.Logo_footer} alt="Logo" />
                    </a> 
                </div>
            

        <hr className={style.HorizontalLine1} />
        <div className={style.footer_content}>


          <div className={style.footer_column}>
            <ul className={style.footer_links}>
              <li><a href="#">Về GrabFood</a></li>
              <li><a href="#">Về Grab</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className={style.footer_column}>
            <ul className={style.footer_links}>
              <li><a href="#">Mở quán trên GrabFood</a></li>
              <li><a href="#">Trở thành tài xế Grab</a></li>
            </ul>
          </div>
          <div className={style.footer_column}>
            <ul className={style.footer_links}>
              <li><a href="#">Trung tâm hỗ trợ</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
          <div className={style.social_icons}>
            <a href="https://www.facebook.com/grabvn"><img src={squarefacebook1} alt="facebook" /></a>
            <a href="https://www.instagram.com/grabfoodvietnam/"><img src={squareinstagram} alt="instagram" /></a>
            <a href="https://twitter.com/grabvn"><img src={squaretwitter} alt="twitter" /></a>
          </div>
        </div>
        <hr className={style.HorizontalLine1} />
        <div className={style.finishfooter}>
          <div className={style.download_buttons}>
            <a href="#"><img src={appstore} alt="App Store" /></a>
            <a href="#"><img src={CHplay} alt="Google Play" /></a>
          </div>
          <div className={style.copyright}>
            © 2024 Grab &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Câu hỏi thường gặp • Chính sách bảo mật
          </div>
        </div>
        </div>
        </div>
   
    );
}
export default Footer;