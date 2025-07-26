import Lottie from "lottie-react";
import groovyWalkAnimation from "../utils/groovyWalk.json"

const SearchShimmer = () => {
  return (
    <div className="groovy-walk">
        <Lottie animationData={groovyWalkAnimation} />
    </div>
  )
};

export default SearchShimmer;
