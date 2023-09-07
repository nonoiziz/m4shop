import "./scss_dir/Header.scss"

function Header () {
  return (
    <div className='Header'>
      <div className="headerContainer">  
        <div className="info-button-container">
          <ul className="info-button">
            <li className="info-but"><a href="#">男款</a></li>
            <li className="info-but"><a href="#">女款</a></li>
            <li className="info-but"><a href="#">最新消息</a></li>
            <li className="info-but"><a href="#">客製商品</a></li>
            <li className="info-but"><a href="#">聯絡我們</a></li>
          </ul>
        </div>

        <div className="logo">
          <span className="Alpha-shop">Alpha Shop</span>
        </div>
        
        <div className="function-button-container">
          <ul className="function-button">
            <li className="function-but"><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></li>
            <li className="function-but"><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
            <li className="function-but"><a href="#"><i className="fa-solid fa-moon"></i></a></li>
          </ul>
        </div>

      
      </div>
    </div>  
  )
}

export default Header