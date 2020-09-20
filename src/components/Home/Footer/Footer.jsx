import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faMap, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FormControl } from '@material-ui/core';
import React from 'react';
import { Row, Container, Input, Button } from 'reactstrap';
import './Footer.css'
function Footer(props) {
  return (
    <section className="footer">
      <Container>
        <Row className="p-30">
          <div className="col-sm-4 text-center">
            <img className="logo" src="https://vananhaudio.com/upload/hinhanh/1522634515_logo.png" alt="home" />
            <p className="bold ">Công ty TNHH Văn Anh Audio</p>
            <p>
              Tôi chẳng cầu vạn người đến với tôi,
              nhưng tôi mong bạn đến với tôi vạn lần.
            </p>
          </div>
          <div className="col-sm-4">
            <h3 className="s20">GỬI EMAIL LIÊN HỆ CHO CHÚNG TÔI</h3>
            <FormControl>
              <Input placeholder="Email" className="bg-f6f6f6 pl-3" />
              <button className="btn bold btn-submit mt-5">
                Gửi
              </button>
            </FormControl>
          </div>
          <div className="col-sm-4 ">
            <h3 className="s20 text-uppercase">Liên Hệ</h3>
            <ul>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />

                <p className="mb-0 ">0979 798 756</p>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faVoicemail} className="mr-2" />
                <p className="mb-0 ">vananhaudio@gmail.com</p>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                <p className="mb-0 ">
                  19 Ngõ 71 Hoàng Văn Thái, Khương Trung,
                  Thanh Xuân, Hà Nội, Việt Nam</p>
              </li>
            </ul>
            <ul>

            </ul>
          </div>
        </Row>
        <hr className="p-20" />
        <Row className="p-30">
          <div className="col-sm-4 ">
            <h3 className="s20 text-uppercase">TRỤ SỞ CÔNG TY TNHH VĂN ANH AUDIO</h3>
            <ul>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />

                <p className="mb-0 ">0979 798 756</p>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faVoicemail} className="mr-2" />
                <p className="mb-0 ">vananhaudio@gmail.com</p>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                <p className="mb-0 ">
                  19 Ngõ 71 Hoàng Văn Thái, Khương Trung,
                  Thanh Xuân, Hà Nội, Việt Nam
                </p>
              </li>
            </ul>
            <ul>

            </ul>
          </div>
          <div className="col-sm-4 ">
            <h3 className="s20 text-uppercase">CHI NHÁNH VĂN ANH AUDIO TPHCM</h3>
            <ul>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />

                <p className="mb-0 ">0979 798 756</p>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faVoicemail} className="mr-2" />
                <p className="mb-0 ">vananhaudio@gmail.com</p>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faMap} className="mr-2" />
                <p className="mb-0 ">
                  132 QL13, phường 26, Bình Thạnh,
                  Hồ Chí Minh, Việt Nam</p>
              </li>
            </ul>
            <ul>

            </ul>
          </div>
          <div className="col-sm-4 ">
            <h3 className="s20 text-uppercase">CHI NHÁNH VĂN ANH AUDIO ĐÀ NẴNG</h3>
            <ul>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />

                <p className="mb-0 ">0979 798 756</p>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faVoicemail} className="mr-2" />
                <p className="mb-0 ">vananhaudio@gmail.com</p>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                <p className="mb-0 ">78 Nguyễn Thị Minh Khai, Hải Châu, Đà Nẵng, Việt Nam</p>
              </li>
            </ul>
            <ul>

            </ul>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;