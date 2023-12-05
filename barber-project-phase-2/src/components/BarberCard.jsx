import { useNavigate } from "react-router-dom";

function BarberCard({barber, index}) {

    const navigate = useNavigate();

    return (
        <article onClick={() => navigate(`/barbershop/${index}/services`)}>
            <p>{barber.name}</p>
        </article>
    )
}

export default BarberCard