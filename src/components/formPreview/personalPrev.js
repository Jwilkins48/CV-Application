export default function PersonalList({personal_info}){
    return(
        <div>
            {personal_info.map((personal) => (
                <div className="card" key={personal.phoneNumber}>
                    <div className="nameContainer">
                        <h1 className="card-name">{personal.name}</h1>
                        <h2>{personal.title}</h2>
                    </div>
                    <p className="addressDisplay">{personal.address}</p>
                    <p>{personal.email}</p><br></br><hr></hr>
                </div>
            ))}
        </div>
    );
}