import Banner from "./components/banner"
import Card from "./components/card"
import Contentcl from "./components/contentcl"


function Home() {
  return <div>
    <Banner />
    <h1 className="pl-10 pt-10 text-xl font-bold"> Tuyền đường Phổ biến</h1>
    <div className="flex gap-4 mt-8">
      <Card title="Sài Gòn - Nha Trang" mony=" từ 200.000 - 250.000 " color="bg-[#78716c]" img="/img_hero.png.png" />
      <Card title="Hà Nội  - Hải Phòng" mony="từ 80.000 - 110.000" color="bg-[#8b5cf6]" img="/img_hero.png (1).png" />
      <Card title="Sài Gòn - Đà Lạt" mony="từ 200.000 " color="bg-[#ec4899]" img="/img_hero.png (2).png" />
      <Card title="Sài Gòn - Phan Thiết" mony="từ 150.000" color="bg-[#4338ca]" img="/img_hero.png (3).png" />
    </div>
    <div className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-4 w-100">
          <div className="lg:col-span-3">
            <Contentcl title="Tuyến đường" data={['Xe đi Buôn Ma Thuật từ Sài Gòn ', 'Xe đi Vũng tàu Từ Sài Gòn', 'Xe đi Nha Trang từ Sài Gòn', 'Xe đi Đà Lạt từ Sài Gòn', 'Xe đi SaPa từ Hà Nội', 'Xe đi Hải Phòng Từ Hà Nội']} />
          </div>
          <div className="lg:col-span-4">
            <Contentcl title="Tuyến đường" data={['Xe Limousine đi Đà Lạt từ Sài Gòn', 'Xe Limousine đi Vũng Tàu từ Sài Gòn', 'Xe Limousine đi Nha Trang từ Sài Gòn', 'Xe Limousine đi Hải Phòng từ Hà Nội', 'Xe Limousine đi Hạ Long từ Hà Nội', 'Xe Limousine đi Sapa Từ Hà Nội', 'Xe Limousine đi Quảng Ninh từ Hà Nội']} />
          </div>
          <div className="lg:col-span-5">
            <Contentcl title="Xe Limousine " data={['Xe giường nằm Limousine', 'Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe', 'Review xe limousine đi Đà Lạt: những câu hỏi thường gặp', 'Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao ']} />
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 pb-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="grid  md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 w-100">
          <Contentcl title="Bến xe" data={['Biến xe miền Đông', 'Biến xe trung tâm Đà Nẵng', 'Biến xe Gia Lâm', 'Biến xe Mỹ Đình', 'Bến xe An Sương', 'Bến xe Nước Ngầm', 'Bến xe Miền Tây']} />
          <Contentcl title="Nhà xe" data={['Xe Liên Hưng', 'Xe Long Vân Limousine', 'Xe Vie Limousine', 'Xe Cúc Tùng', 'Xe An Phú Buslines', 'Xe Bằng Phấn', 'Xe Hà Lan', 'Xe 36 Limousine']} />
          <Contentcl title="." data={['Xe Thuận Tiến', 'Xe Khanh Phong', 'Xe Tiến Oanh', 'Xe Hạnh Cafe', 'Xe Tân Kim Chi', 'Xe Quang Nghị', 'Xe Nam Cường Limousine', 'Xe Phúc Xuyên']} />
          <Contentcl title="." data={['Xe Điền Linh', 'Xe Tuấn Hưng', 'Xe Phong Phú', 'Xe Trà Lan Viên', 'Xe Lam Quynh Anh', 'Xe G8 Open Tour', 'Xe Hải Âu', 'Xe Tràng An limoisine']} />
          <Contentcl title="." data={['Xe Đồng Phước', 'Xe Hảo', 'Xe Hoa Mai ', 'Xe MInh Quốc', 'Xe An Phú Quý', 'Xe Xuân Tráng Limousine', 'Xe Sao việt', 'Xe Sao Nghệ Limusine']} />
        </div>
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 pb-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-cols-4 gap-4 w-100">
          <Contentcl title="Hỗ trợ" data={['Hướng dẫn thanh toán', 'Quy chế Vexere.com', 'Chính sách bảo mật thông tin', 'Chính sách bảo mật thanh toán', 'Chính sách và quy trình giải quyết tranh chấp, khiếu nại', 'Câu hỏi thường gặp', 'Tra cứu đơn hàng']} />
          <Contentcl title="Về chúng tôi" data={['Phần mềm đại lý', 'Giới Thiệu Vexere.com', 'Tuyển dụng', 'Tin tức', 'Liên hệ']} />
          <div>
            <h2 className="mb-2 font-bold text-2xl">Đối tác thanh toán</h2>
            <img src="https://229a2c9fe669f7b.cmccloud.com.vn/images/payment_partner_desktop.png" alt="" width={"200px"} />
          </div>
          <div>
            <h2 className="mb-2 font-bold text-2xl">Tải ứng dụng về vexere</h2>
            <img src="https://229a2c9fe669f7b.cmccloud.com.vn/images/landingpagetet2023/download_app_qr.png" width={"200px"} alt="" />
            <img src="https://229a2c9fe669f7b.cmccloud.com.vn/images/download-app-store.png" alt="" width={"200px"} className="mt-4" />
            <img src="https://229a2c9fe669f7b.cmccloud.com.vn/images/download-gg-play.png" alt="" width={"200px"} className="mt-4" />
          </div>
        </div>
      </div>

    </div>

  </div>
}

export default Home