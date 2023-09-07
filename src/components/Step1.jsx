import "../style/Step1.scss"

function Step1() {
  return (
    <section className="Step1">
      <div className="step1-container">
        <h2 className="pay-info">寄送地址</h2>
        <div className="input-container1">

          <div className="title d-flex flex-column">
            <label htmlFor="" className="title-label">稱謂</label>
            <div className="select-wrapper">
            <select className="title-select" id="title-select" required defaultValue="">
                <option value="" disabled>請問您的稱謂</option>
                <option value="先生">先生</option>
                <option value="小姐">小姐</option>
            </select>
            </div>
          </div>

          <div className="name d-flex flex-column">
            <label htmlFor="" className="name-label">姓名</label>
            <input type="text" className="name-input" id="name-input" placeholder="請輸入姓名"/>
          </div>

          <div className="phone d-flex flex-column">
            <label htmlFor="" className="phone-label">電話</label>
            <input type="text" className="phone-input" id="phone-input" placeholder="請輸入行動電話"/>
          </div>

          <div className="email d-flex flex-column">
            <label htmlFor="" className="email-label">Email</label>
            <input type="text" className="email-input" id="email-input" placeholder="請輸入電子郵件"/>
          </div>

          <div className="county d-flex flex-column">
            <label htmlFor="" className="county-label">縣市</label>
            <div className="select-wrapper">
            <select name="" id="county-select" className="county-select"  required defaultValue="">
              <option value="" disabled >請選擇縣市</option>
              <option>台北市</option>
              <option>新北市</option>
            </select>
            </div>
          </div>

          <div className="address d-flex flex-column">
            <label htmlFor="" className="address-label">地址</label>
            <input type="text" className="address-input" id="address-input" placeholder="請輸入地址"/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Step1