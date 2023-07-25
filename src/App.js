import "./App.css";

function App() {
  return (
    <div className="nord">
      <header className="nord-header">
        <img className="nord-header-build" src="build.jpg" />
        <h4>หน้าหลัก</h4>
        <h4>ตารางเทียบแคลอรี</h4>
        <h4>ผู้จัดการ</h4>
      </header>
      <div className="app-food">
        <div className="food_name">
          อาหารพื้นเมืองที่มีสรรคุณต่อสุขภาพตามวิถีภูปัญญาท้องถิ่นของจังหวัดอุบลราชธานี
        </div>
      </div>
      <div className="nord-grid">
        <div className="tattoo-item">
          <img src="f0201.jpg" />
          <h1>ควันไก่</h1>
          <h4>กินอร่อยดี</h4>
          <button onclick="myFunction()">เรียนรู้</button>
        </div>
        <div className="tattoo-item">
          <img src="f0203.jpg" />
          <h1>ปลาส้มอาบแดด</h1>
          <h4>รสชาติอร่อย</h4>
          <button onclick="myFunction()">เรียนรู้</button>
        </div>
        <div className="tattoo-item">
          <img src="f0202.jpg" />
          <h1>หมูทอดควันอบ</h1>
          <h4>โปรตีนอร่อย</h4>
          <button onclick="myFunction()">เรียนรู้</button>
        </div>
      </div>
    </div>
  );
}
export default App;
