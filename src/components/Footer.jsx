import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="flex justify-between items-start">

                {/* Resources Section */}
                <div className="w-1/3 pl-40">
                    <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text">Resources</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-neutral-300 hover:text-blue-800">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Platform Section */}
                <div className="w-1/3 text-center">
                    <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-neutral-300 hover:text-blue-800">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Community Section */}
                <div className="w-1/3 text-right pr-40 bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text">
                    <h3 className="text-md font-semibold mb-4">Community</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-neutral-300 hover:text-blue-800">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
