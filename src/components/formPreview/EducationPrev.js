
export default function EducationList({education_info}){
    return(
        <div>
            {education_info.map((education) => (
                <div key={education.city}>
                    <p>{education.school}</p>
                    <p>{education.city}</p>
                    <p>{education.degree}</p>
                    <p>{education.from}</p>
                    <p>{education.till}</p>
                </div>
            ))}
        </div>
    );
}