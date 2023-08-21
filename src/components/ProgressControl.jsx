import "./scss_dir/ProgressControl.scss"

function ProgressControl() {
  return (
    <>
      <div className="progressControl-container">
        <div className="previouspage-container">
          <button className="previouspage-button" id="previouspage-button" disabled>上一頁</button> 
        </div>

        <div className="nextpage-container">
          <button className="nextpage-button" id="nextpage-button">下一頁</button> 
        </div>
      </div>
    </>
  )
}

export default ProgressControl