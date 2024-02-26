
const Footer = () => {
    return(
        <div className="bg-red-500 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <span className="text-3xl font-bold text-white tracking-tight">
                    HUFD
                </span>
                <span className="text-white font-bold flex tracking-tight gap-3">
                    <span>Privacy Policy</span>&nbsp;|&nbsp;
                    <span>Terms of Use</span>
                </span>
            </div>
        </div>
    );
}

export default Footer;
