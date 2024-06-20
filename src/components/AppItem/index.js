// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="lis cardCont">
      <img src={imageUrl} className="appImg" alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
