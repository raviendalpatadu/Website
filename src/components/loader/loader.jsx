import loaderVideo from "../../images/Animation - 1744624841261.webm"

const Loader = () => {
  return (
    <div className="w-40 h-40 relative top-12">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="inset-0 w-full h-full object-cover"
      >
        <source src={loaderVideo} type="video/webm" />
      </video>
    </div>
  )
}

export default Loader


