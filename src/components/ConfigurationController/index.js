// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const changeContext = () => {
        onToggleShowContent()
      }

      const changeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const changeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <div>
            <h1 className="configuration-heading">Layout</h1>
            <input
              id="content"
              type="checkbox"
              onChange={changeContext}
              checked={showContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
            <br />
            <input
              id="left-navbar"
              type="checkbox"
              onChange={changeLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="left-navbar" className="label">
              Left Navbar
            </label>
            <br />
            <input
              id="right-navbar"
              type="checkbox"
              onChange={changeRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="right-navbar" className="label">
              Right Navbar
            </label>
            <br />
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
