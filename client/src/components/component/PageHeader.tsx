import '../styles/PageHeader.css'

export function PageHeader() {
    return (
<header className="header">
      <div className="header-left">
        <button>
        <img src="./src/components/images/LOGO.jpg" alt="Left Image" className="left-image"/>
        </button>
      </div>
      <div className="header-right">
        <button className="user-button">
          <img src="./src/components/images/USER.png" alt="Right Image" className="right-image"/>
        </button>
      </div>
    </header>

);

}