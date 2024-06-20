// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, appClick, isActive} = props
  const {tabId, displayText} = tabItem

  const underLine = isActive ? 'active-tab-btn' : ''

  const onTabItem = () => {
    appClick(tabId)
  }
  return (
    <li className="lists">
      <button
        className={`button ${underLine}`}
        type="button"
        onClick={onTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
