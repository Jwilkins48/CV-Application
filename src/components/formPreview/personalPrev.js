export default function PersonalList({personal_info}){
    return(
        <div>
            {personal_info.map((personal) => (
                <div className="card" key={personal.phoneNumber}>
                    <p className="card-name">{personal.name}</p>
                    <p>{personal.title}</p>
                    <p>{personal.address}</p>
                    <p>{personal.email}</p>
                </div>
            ))}
        </div>
    );
}