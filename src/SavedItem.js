
export default function SavedItem({title, image}) {
  console.log(image)
  return (
    <div className="container">
      <h1>{title}</h1>
      <img className="dishhImage" src={image} alt="" />
    </div>
  )
}
