const { useEffect } = require("react")

const useObserver = (ref) => {

  const observer = new IntersectionObserver((element) => {
    console.log(element);
  })
  return observer;
}

export default useObserver;