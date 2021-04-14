import axios from "axios";
import { FormEvent, useState } from "react";

export default function Formik() {
    const [cep, setcep] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await axios.get(`https://ws.apicep.com/cep/${cep}.json`)
            .then(res => {
                console.log(res.data)
                setCity(res.data.city);
                setState(res.data.state);
            })
    }
    return (
        <main>
            <form method="GET" onSubmit={handleSubmit} >
                <label htmlFor="cep">CEP</label>
                <input type="text" name="CEP" id="cep"
                    onChange={event => setcep(event.target.value)}
                    value={cep} required />
                <small>Ex: 99999-999</small>
                <br />
                <button type="submit">Search</button>
            </form>
            <label htmlFor="">Cidade: {city}</label>
            <label htmlFor="">Estado: {state}</label>

        </main>
    )
}
