import { useNavigate } from "react-router-dom";

function BarberCard({barber}) {

    const navigate = useNavigate();

    return (
        <article onClick={() => navigate(`/barbershop/${barber.id}/services`)}>
            <p>{barber.name}</p>
        </article>
    )
}

export default BarberCard