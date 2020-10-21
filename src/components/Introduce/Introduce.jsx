import { Container } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-elastic-carousel';

import Footer from '../Home/Footer/Footer';
import './Introduce.css'
import Slide from './Slide';
function Introduce(props) {
  return (
    <main>
      <section className="banner-page">
        <Container>
          <div className="banner-page-wrap d-flex flex-column  justify-content-center align-items-center">
            <h1 className="s36 bold cl-f26522 text-uppercase text-center breadcrumb-tit ">Giới Thiệu</h1>
            <ul className="pb-3">
              <li><a href="http://localhost:3001"> Trang Chủ </a></li>
              <li><a href="http://localhost:3001/gioi-thieu"> Giới Thiệu</a></li>
            </ul>
          </div>
        </Container>
      </section>
      <Container >
        <div className="introduce" >
          <div>
            <h3 className="s20 text-center">GIỚI THIỆU VỀ CHÚNG TÔI</h3>
            <div className='d-flex'>
              <img className="img-intro" style={{ height: 45 }} src="https://megamusic.blob.core.windows.net/images/0022601_taylor-k24ce-koa-acoustic-guitar-with-pickup-and-cutaway.jpg" />
              <p>Công ty TNHH Văn Anh Audio chuyên đào tạo bộ môn đàn guitar,
              sản xuất và bán lẻ Đàn Guitar và Trống cajon,
             Sáo trúc thương hiệu Văn Anh Audio với Logo C#.</p>
            </div>
            <p>Công ty được thành lập ngày 4/4/2014 tiền thân trước đó (từ 2007-2014) là CLB Guitar Gỗ Việt Nam, Trung tâm Guitar Văn Anh.</p>
            <ul className="d-flex flex-column">
              <li>Thương hiệu Văn Anh Audio với logo C# là thương hiệu được bảo hộ thương hiệu tại cục sở hữu trí tuệ Việt Nam 2017</li>
              <li>Được vinh danh giải thưởng nhà nước Top 100 thương hiệu uy tín Việt Nam 2018</li>
              <li>
                Là công ty đầu tiên tại Việt Nam kinh doanh, sản xuất bộ môn trống cajon
            </li>
              <li>Tổ chức thành công kỷ lục Guitar có số lượng người chơi nhiều nhất được các tờ báo chính thống như vnexpress, vietbao, và truyền hình vtc xác nhận
                Giám đốc công ty là ông Trần Văn Anh</li>
              <li>Giải nhất tài năng guitar HSSV Việt Nam 2009, Giải nhất tiếng hát sinh viên Bách Khoa Hà Nội 2010, Chủ nhiệm CLB Guitar Đại Học Bách Khoa Hà Nội (2008-2012), Chủ tịch CLB Guitar Gỗ Việt Nam</li>
              <li>Người cải tiến cây đàn Guitar Clasic và Acoustic trộn lại thành cây đàn chuyên solo và đặt tên cho cây đàn là Guitar Bolero B3</li>
              <li>Người phát minh ra cần gạt kim loại cải tiến chức năng của trống cajon</li>
              <li>Đưa ra tiêu chuẩn và thông số kỹ thuật cho trống cajon</li>
              <li>Người đầu tiên đưa ra phương pháp giảng dạy đệm hát guitar bằng sơ đồ</li>
              <li>Tác giả các cuốn sách: Giáo trình đệm hát cơ bản, Giáo trình bolero, Giáo trình trống cajon. Các giáo trình trên được đông đảo bạn đọc tiếp nhận, được nhiều tác giả khác trích dẫn và làm tư liệu giảng dạy ở các trung tâm đào tạo âm nhạc
              Với bề dày giảng dạy hơn 10 năm, tính đến 2018 Văn Anh Audio đã đào tạo được trên 3000 học viên
              và hầu hết đã tốt nghiệp và có thể chơi guitar ở
              mức độ căn bản và không ít học viên đã đạt được trình
              độ nâng cao có thể biểu diễn trên các sân khấu lớn hoặc
              các phòng trà âm nhạc. Nhiều em học viên thi đậu vào các
              trường âm nhạc chuyên nghiệp. Suốt 8 năm trong công việc
              dạy học Văn Anh Audio luôn chăm chút cho học viên học
              guitar từ những điều rất căn bản trở đi. Không chạy theo
              thị hiếu của thị trường mà luôn giữ vững được một Văn Anh Audio chuyên nghiệp và bài bản.</li>
            </ul>
          </div>

          <div>
            <h3 className="s20 text-center">THƯƠNG HIỆU VĂN ANH AUDIO VỚI LOGO C#</h3>
            <p className=" text-center">Lần đầu tiên công bố</p>
            <p className=" text-center">******************</p>
          </div>
        </div>
        <div className="video d-flex flex-column align-items-center">
          <iframe width="800" className="mb-5" height="400" src="https://www.youtube.com/embed/T_iJuBBmRfQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="800" className="mb-5" height="400" src="https://www.youtube.com/embed/IqCHdGmlv4M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="800" className="mb-5" height="400" src="https://www.youtube.com/embed/CG5sGmqAXc4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <h3 className="s20">
            TRIẾT LÝ KINH DOANH
          </h3>
          <ul className="d-flex flex-column">
            <li className="bold">Tôi không cầu vạn người đến với tôi, nhưng tôi mong bạn đến với tôi vạn lần.</li>
            <li className="bold">Không cạnh tranh về giá.</li>
            <li className="bold">Không ham mở rộng, chỉ tập trung đi sâu vào chất lượng sản phẩm.</li>
            <li className="bold">Thà có thể đánh mất tất cả nhưng không được đánh mất chữ "Tín".</li>
          </ul>
        </div>
        <div className="partner">
          <h2>ĐỐI TÁC CỦA VANANH AUDIO</h2>
          <div className="logo-partner"></div>
          <h2 >THÀNH VIÊN SÁNG LẬP</h2>
          <div className="slide-founder">
            <Slide />
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default Introduce;