import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="mb-10">
            <div className="flex justify-end">
                <a href="https://www.youtube.com/@XNOTXD">
                    <span>
                        Powered by React.js and Tailwind
                        <FontAwesomeIcon className="ml-2" icon={faYoutube} />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer;