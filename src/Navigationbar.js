import './Styles.css';
/* eslint-disable */

const Navogationbar = ({ isEdit, changepage }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-lg-5">
                <a className="navbar-brand" href="" id='font'>
                    Gguldangi
                    {/* <img className='logo-img' src={logo} alt="" /> */}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href=''
                                onClick={() => {
                                    changepage((isEdit = true));
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="https://shocking-leather-c84.notion.site/about-88ceb43d2ba044b2b74bddaba416e6aa?pvs=4">
                                About us
                            </a>
                        </li>
                        <li className="nav-item">
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
/* eslint-enable */
export default Navogationbar;
