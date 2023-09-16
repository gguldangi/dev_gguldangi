import './Styles.css';

const LectureHeader = ({ isEdit, changepage }) => {
    return (
        <div>
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="mt-5 p1-lg-5 rounded-3 text-center">
                        <div className="m-1 m-lg-5">
                            {/* <h1 className="display-5 fw-bold">A warm welcome!</h1> */}
                            <p className="fs1-4">최저가 강의를 한번에 확인해보세요!</p>
                            <button
                                className="btn btn-primary btn-lg "
                                onClick={() => {
                                    changepage((isEdit = true));
                                }}
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LectureHeader;
