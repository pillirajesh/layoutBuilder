// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <ul className="left-container">
              <h1 className="heading">Left Navbar Menu</h1>
              <li className="paragraph">Item 1</li>
              <li className="paragraph">Item 2</li>
              <li className="paragraph">Item 3</li>
              <li className="paragraph">Item 4</li>
            </ul>
          ) : null}

          {showContent ? (
            <div className="central-container">
              <h1 className="heading">Content</h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="heading">Right Navbar</h1>
              <div className="ad-container">Ad 1</div>
              <div className="ad-container">Ad 2</div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
