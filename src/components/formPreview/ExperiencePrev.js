export default function ExperienceList({experience_info}){
    return(
        <div>
            {experience_info.map((experience) => (
                <div key={experience.position}>
                    <h1 className="experiencePrevTitle">Experience</h1>
                    <div className="experienceInform">
                        <p className="position experience">Worked as a <span className="expPosition">{experience.position}</span></p>
                        <p className="company experience">for <span className="expPosition">{experience.company}</span></p>
                        <p className="experienceCity experience">Located in <span className="expPosition">{experience.city}</span></p>
                        <p className="experienceTill experience"><span className="expPosition">{experience.from}</span> - <span className="expPosition">{experience.till}</span></p>
                        <br></br><hr></hr>
                    </div>
                </div>
            ))}
        </div>
    );
}