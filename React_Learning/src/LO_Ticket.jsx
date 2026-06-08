import LO_TicketN0 from "./LO_TicketN0";

export default function LO_Ticket({ticket}) {
    return (
        <div>
            {/* <LO_TicketN0 num={ticket[0]}/>
            <LO_TicketN0 num={ticket[1]}/> */}
            <p>ticket</p>
            {
                ticket.map((num,idx)=>(
                    <LO_TicketN0 num={num} key={idx}/>
                ))
            }
        </div>
    )
}
sw