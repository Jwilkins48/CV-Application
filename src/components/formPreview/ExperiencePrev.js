export default function ExperienceList({experience_info}){
    return(
        <div>
            {experience_info.map((experience) => (
                <div key={experience.position}>
                    <p>{experience.company}</p>
                    <p>{experience.city}</p>
                    <p>{experience.from}</p>
                    <p>{experience.till}</p>
                </div>
            ))}
        </div>
    );
}