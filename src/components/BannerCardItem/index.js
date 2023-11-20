import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText} = bannerDetails
  const {description} = bannerDetails
  const {className} = bannerDetails

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
