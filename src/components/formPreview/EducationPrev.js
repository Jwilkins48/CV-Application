
export default function EducationList({education_info}){
    return(
        <div>
            {education_info.map((education) => (
                <div key={education.city}>
                    <h1 className="experiencePrevTitle">Education</h1>
                    <p className="education">Education from <span className="expPosition">{education.school}</span></p>
                    <p className="education">location in <span className="expPosition">{education.city}</span></p>
                    <p className="education">for a degree in <span className="expPosition">{education.degree}</span></p>
                    <p className="education"><span className="expPosition">{education.from}</span> - <span className="expPosition">{education.till}</span></p><br></br><hr></hr>
                </div>
            ))}
        </div>
    );
}