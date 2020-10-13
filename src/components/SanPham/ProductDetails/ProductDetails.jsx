
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row, Container } from 'reactstrap';
import Footer from '../../Home/Footer/Footer';
import './ProductDetails.css'

function ProductDetails({ match }) {
  const src = "https://thegioidanviet.com/wp-content/uploads/2019/10/dan-guitar-acoustic-nghe-nhan-thuan-dt-03c-1.jpg"
  const [displayDetails, setDisplayDetails] = useState(false)
  const [item, setItem] = useState({})
  const [backgroundImages, setBackgroundImages] = useState(`url(${src})`)
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')
  const [groupInstrument, setGroupInstrument ] = useState('')
  const handleClickDetails = () => {
    setDisplayDetails(!displayDetails)
  }
  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 50
    const y = (e.pageY - top) / height * 50
    setBackgroundPosition(`${x}% ${y}%`)

  }
  useEffect(() => {
    async function fetchData() {
      await fetch(`http://localhost:3000/api/all-product/${match.params.group}/${match.params.product}`)
        .then(res => res.json())
        .then(data => {
          console.log(data[0].groupInstrument)
          setGroupInstrument(data[0].groupInstrument.name)
          setItem(data[0])
          console.log(data)
        }).catch(err => {
          console.log(err)
        })
    }
    fetchData();
  }, [match.params])

  return (
    <main className="product-details">
      <section className="banner-page">
        <Container>
          <div className="banner-page-wrap d-flex flex-column  justify-content-center align-items-center">
            <h1 className="s36 bold cl-f26522 text-uppercase text-center breadcrumb-tit ">{item.name}</h1>
            <ul className="pb-3">
              <li><a href="http://localhost:3001"> Trang Chủ </a></li>
              <li><a href="http://localhost:3001/san-pham"> Sản Phẩm</a></li>
              <li><a href="http://localhost:3001/san-pham">{groupInstrument}</a></li>
              <li>{item.name}</li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="">
        <Container>
          <Row>
            <div className="col-lg-6 col-sm-12">
              <figure className="hover-img-wrap" onMouseMove={handleMouseMove} style={{ backgroundImage: backgroundImages, backgroundPosition: backgroundPosition }} >
                <img alt="item" width="400" height="auto" src={item.img} />
              </figure>


            </div>
            <div className="col-lg-6 col-sm-12">
              <h3 className="s20">{item.name}</h3>
              <h4>{item.price}</h4>
              <div className="tabs-detail">
                <p onClick={handleClickDetails} className="p-0 cursor-pointer link-ref border-f26522 w-170"> THÔNG SỐ KỸ THUẬT</p>
                <div className={displayDetails ? "table-detail active" : "table-detail"}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p><span >1.&nbsp;&nbsp;&nbsp;&nbsp; Headstock (đầu đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Có Logo C# in lụa màu vàng đồng</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >2.&nbsp;&nbsp;&nbsp;&nbsp; Nut (lược đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Xương</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >3.&nbsp;&nbsp;&nbsp;&nbsp; Machine heads (Khóa đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Khóa tai đen KC30</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >4.&nbsp;&nbsp;&nbsp;&nbsp; Frets (những phím đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Phím đồng bạch</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >5.&nbsp;&nbsp;&nbsp;&nbsp; Truss rod (trục kim loại giữ độ thẳng cho cần đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Hai chiều</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >6.&nbsp;&nbsp;&nbsp;&nbsp; Inlays (dấu trên ngăn phím đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Nhựa</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >7.&nbsp;&nbsp;&nbsp;&nbsp; Neck (cần đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Gỗ teak</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >8.&nbsp;&nbsp;&nbsp;&nbsp; Heel</span></p>
                          <p><span >(Chỗ tiếp nối giữa cần và thân đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Ghép</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >9.&nbsp;&nbsp;&nbsp;&nbsp; Body (thân đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Gỗ hồng đào</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >10.&nbsp; Pickups</span></p>
                        </td>
                        <td>
                          <p><span >Không</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >11.&nbsp; Electronics (điện tử)</span></p>
                        </td>
                        <td>
                          <p><span >Không</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >12.&nbsp; Bridge (ngựa đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Gỗ đen</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >13.&nbsp; Pickguard (Miếng dán chống xước)</span></p>
                        </td>
                        <td>
                          <p><span >Nhựa</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >14.&nbsp; Back (Lưng đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Gỗ hồng đào có chỉ</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >15.&nbsp; Soundboard (Mặt đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Gỗ thông</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >16.&nbsp; Body sides (Sườn đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Gỗ hồng đào</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >17.&nbsp; Sound hole (lỗ thoát âm)</span></p>
                        </td>
                        <td>
                          <p><span >Tròn</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >18.&nbsp; Strings</span></p>
                        </td>
                        <td>
                          <p><span >D'addario USA</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >19.&nbsp; Saddle (Lưng ngựa đàn)</span></p>
                        </td>
                        <td>
                          <p><span >Xương</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span >20.&nbsp; Fretboard or fingerboard (bàn phím)</span></p>
                        </td>
                        <td>
                          <p><span >Gỗ đen</span></p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="form-order">
                <input type="number" className="ml-3 border-bold s18 p-2 w-80" defaultValue="1" />
                <div>
                  <button className="cl-f26522-background cl-white s18"> MUA NGAY </button>
                  <button className="cl-white black-background s18"> Thêm vào giỏ hàng  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 item-info">
              <h3 className="s20">THÔNG TIN SẢN PHẨM</h3>
              <hr />
              <ul>
                <li>Giới thiệu mẫu đàn C400-2018</li>
                <br />
                <li>Giá: 4 triệu</li>
                <br />

                <li>Đàn Guitar Clasic với tiêu chí dành cho người chơi chuyên sâu cổ điển</li>
                <br />

                <li>Âm thanh lên tròn trịa thì phím 1 đến phím 17</li>
                <li> Nhờ có chất gỗ thùng đàn vừa có chất gỗ hồng đào (Mềm, và nhẹ, thanh mảnh) vừa có chất gỗ điệp (Nặng và ấm) là đặc trưng âm sắc và độ ngân của đàn C400</li>
                <li>Nhà sản xuất: Công ty TNHH Văn Anh Audio</li>
              </ul>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />

    </main>
  );
}

export default ProductDetails;