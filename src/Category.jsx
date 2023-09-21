import './Styles.css';
import developer from './img/developer.png';
import game from './img/game.png';
import newbie from './img/newbie.png';
import theory from './img/theory.png';
import oldbie from './img/oldbie.png';
import security from './img/security.png';
import test from './img/coding_test.png';

const Category = () => {
    return (
        <div className="categories">
            <a className="ctg_detail" href="javascript:void(0);">
                <div>
                    <span>
                        <img className="ctg_img" src={newbie} alt="" />
                    </span>
                </div>
                <span className="ctg_text">#초보자</span>
            </a>
            <a className="ctg_detail" href="javascript:void(0);">
                <div>
                    <span>
                        <img className="ctg_img" src={oldbie} alt="" />
                    </span>
                </div>
                <span className="ctg_text">#심화</span>
            </a>
            <a className="ctg_detail" href="javascript:void(0);">
                <div>
                    <span>
                        <img className="ctg_img" src={theory} alt="" />
                    </span>
                </div>
                <span className="ctg_text">#이론중심</span>
            </a>
            <a className="ctg_detail" href="javascript:void(0);">
                <div>
                    <span>
                        <img className="ctg_img" src={developer} alt="" />
                    </span>
                </div>
                <span className="ctg_text">#실습중심</span>
            </a>
            <a className="ctg_detail" href="javascript:void(0);">
                <div>
                    <span>
                        <img className="ctg_img" src={game} alt="" />
                    </span>
                </div>
                <span className="ctg_text">#게임개발</span>
            </a>
            <a className="ctg_detail" href="javascript:void(0);">
                <div>
                    <span>
                        <img className="ctg_img" src={security} alt="" />
                    </span>
                </div>
                <span className="ctg_text">#보안</span>
            </a>
            <a className="ctg_detail" href="javascript:void(0);">
                <div>
                    <span>
                        <img className="ctg_img" src={test} alt="" />
                    </span>
                </div>
                <span className="ctg_text">#코딩테스트</span>
            </a>
        </div>
    );
};

export default Category;
