import "./Header.css"

function Header () {
  return (
    <div className='Header'>
      <div className="headerContainer">
        
        <div className="info-button-container">
          <ul className="info-button">
            <li><a href="#">男款</a></li>
            <li><a href="#">女款</a></li>
            <li><a href="#">最新消息</a></li>
            <li><a href="#">客製商品</a></li>
            <li><a href="#">聯絡我們</a></li>
          </ul>
        </div>

        <div className="logo">
          <span className="Alpha-shop">Alpha Shop</span>
        </div>
        
        <div className="function-button-container">
          <ul className="function-button">
            <li><a href="#">搜尋</a></li>
            <li><a href="#">購物車</a></li>
            <li><a href="#">DarkMode</a></li>
          </ul>
        </div>

      
      </div>
    </div>  
  )
}

export default Header