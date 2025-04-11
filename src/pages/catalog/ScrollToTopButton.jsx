import React, {useState, useEffect} from "react";
import arrowToTop from "../../assets/images/arrow-to-top.svg";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={`toTop ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <img src={arrowToTop} alt="" title="Наверх"/>
        </div>
    )
}

export default ScrollToTopButton