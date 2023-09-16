import LectureItem from './LectureItem';
import './Styles.css';
import React, { useState } from 'react';

const LectureDetailList = ({ Lecture_list, num }) => {
    const [showFree, setShowFree] = useState(true);

    const filteredLectureList2 = Lecture_list.filter((it) => {
        const price = parseInt(it.price);
        return (!showFree && price !== 0) && parseInt(it.field) === num;
    });

    const filteredLectureList = Lecture_list.filter((it) => {
        return parseInt(it.field) === num;
    });
    const setShow = ()=>{
        setShowFree(!showFree)

    }

    return (
        <div>
            <section className="py-5">
                <fieldset>
                    <label>
                        <input
                            role="switch"
                            type="checkbox"
                            checked={showFree}
                            onClick={setShow}
                        />
                        <span>무료 강의</span>
                    </label>
                </fieldset>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {showFree ? (
                <>{filteredLectureList.map((it) => (
                    <LectureItem key={it.id} {...it} />
                ))}</>
            ) : (
               <>{filteredLectureList2.map((it) => (
                <LectureItem key={it.id} {...it} />
            ))}</>
            )}


                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LectureDetailList;
