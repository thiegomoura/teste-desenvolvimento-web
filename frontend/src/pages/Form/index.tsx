import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../service/api';
import './styles.css';



export default function Index() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [pokedexNumber, setPokedexNumber] = useState('');
    const [imgName, setImgName] = useState('');
    const [generation, setGeneration] = useState('');
    const [evolutionStage, setEvolutionStage] = useState('');
    const [evolved, setEvolved] = useState('');
    const [familyId, setFamilyId] = useState('');
    const [crossGen, setCrossGen] = useState('');
    const [type1, setType1] = useState('');
    const [type2, setType2] = useState('');
    const [weather1, setWeather1] = useState('');
    const [weather2, setWeather2] = useState('');
    const [statTotal, setStatTotal] = useState('');
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    const [sta, setSta] = useState('');
    const [legendary, setLegendary] = useState('');
    const [aquireable, setAquireable] = useState('');
    const [spawns, setSpawns] = useState('');
    const [regional, setRegional] = useState('');
    const [raidable, setRaidable] = useState('');
    const [hatchable, setHatchable] = useState('');
    const [shiny, setShiny] = useState('');
    const [nest, setNest] = useState('');
    const [news, setNews] = useState('');
    const [notGettable, setNotGettable] = useState('');
    const [futureVolve, setFutureVolve] = useState('');
    const [percent100cp40, setPercent100cp40] = useState('');
    const [percent100cp39, setPercent100cp39] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const data = new FormData();

        data.append('name', name);
        data.append('pokedex_number', String(pokedexNumber));
        data.append('img_name', imgName);
        data.append('generation', String(generation));
        data.append('evolution_stage', evolutionStage);
        data.append('evolved', String(evolved));
        data.append('family_id', String(familyId));
        data.append('cross_gen', String(crossGen));
        data.append('type1', type1);
        data.append('type2', type2);
        data.append('weather1', weather1);
        data.append('weather2', weather2);
        data.append('stat_total', String(statTotal));
        data.append('atk', String(atk));
        data.append('def', String(def));
        data.append('sta', String(sta));
        data.append('legendary', String(legendary));
        data.append('aquireable', String(aquireable));
        data.append('spawns', String(spawns));
        data.append('regional', String(regional));
        data.append('raidable', String(raidable));
        data.append('hatchable', String(hatchable));
        data.append('nest', String(nest));
        data.append('news', String(news));
        data.append('not_gettable', String(notGettable));
        data.append('future_volve', String(futureVolve));
        data.append('percent100cp40', String(percent100cp40));
        data.append('percent100cp39', String(percent100cp39));

        await api.post('pokemons', data);

        history.push('/');
        alert('Registration successful!')
    }

    return (
        <main>
            <Link to={'/'} >Go back</Link>
            <div className="text-center">
                <h2>Registration form</h2>
                <p className="lead">
                    Preencha ao menos as informações obrigatórias abaixo para cadastrar as informações de um novo pokemon.
                </p>
            </div>
            <form method="POST" onSubmit={handleSubmit}>
                <h4>Pokemon info</h4>
                <div className="row">
                    <div className="col-5">
                        <label htmlFor="name">Name*</label>
                        <input
                            id="name" type="text" className="form-control"
                            onChange={event => setName(event.target.value)} value={name}
                            required />
                    </div>
                    <div className="col">
                        <label htmlFor="pokedex-number">Pokedex Number*</label>
                        <input
                            id="pokedex-number" type="number" className="form-control"
                            onChange={event => setPokedexNumber(event.target.value)}
                            value={pokedexNumber}
                            required />
                    </div>
                    <div className="col">
                        <label htmlFor="img-name">Imagem name*</label>
                        <input id="img-name" type="text" className="form-control"
                            onChange={event => setImgName(event.target.value)}
                            value={imgName}
                            required />
                    </div>
                    <div className="col">
                        <label htmlFor="generation">Generation*</label>
                        <input id="generation" type="number" className="form-control"
                            onChange={event => setGeneration(event.target.value)}
                            value={generation}
                            required />
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Pokemon generation</small>
                    </div>
                </div>
                <hr className="mb4" />
                <h6>Details</h6>
                <div className="row">
                    <div className="col">
                        <label htmlFor="evolution-stage">Evolution stage</label>
                        <input id="evolution-stage" type="text" className="form-control"
                            onChange={event => setEvolutionStage(event.target.value)}
                            value={evolutionStage} />
                    </div>
                    <div className="col">
                        <label htmlFor="evolved">Evolved</label>
                        <input id="evolved" type="number" className="form-control"
                        onChange={event => setEvolved(event.target.value)}
                        value={evolved} />
                    </div>
                    <div className="col">
                        <label htmlFor="family-id">Family ID</label>
                        <input id="family-id" type="number" className="form-control"
                        onChange={event => setFamilyId(event.target.value)}
                        value={familyId} />
                    </div>
                    <div className="col">
                        <label htmlFor="cross-gen">Cross gen</label>
                        <input id="cross-gen" type="text" className="form-control"
                        onChange={event => setCrossGen(event.target.value)}
                        value={crossGen} />
                    </div>
                    <div className="col">
                        <label htmlFor="type1">Type 1</label>
                        <input id="type1" type="text" className="form-control"
                        onChange={event => setType1(event.target.value)}
                        value={type1} />
                    </div>
                    <div className="col">
                        <label htmlFor="type2">Type 2</label>
                        <input id="type2" type="text" className="form-control"
                        onChange={event => setType2(event.target.value)}
                        value={type2} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <label htmlFor="weather1">Weather 1</label>
                        <input id="weather1" type="text" className="form-control"
                        onChange={event => setWeather1(event.target.value)}
                        value={weather1} />
                    </div>
                    <div className="col-2">
                        <label htmlFor="weather2">Weather 2</label>
                        <input id="weather2" type="text" className="form-control"
                        onChange={event => setWeather2(event.target.value)}
                        value={weather2} />
                    </div>
                    <div className="col-2">
                        <label htmlFor="sta-total">Stat Total</label>
                        <input id="sta-total" type="number" className="form-control"
                        onChange={event => setStatTotal(event.target.value)}
                        value={statTotal} />
                    </div>
                </div>
                <hr className="mb4" />
                <h6>Attributes</h6>
                <div className="row">
                    <div className="form-group col-3">
                        <label htmlFor="atk">Atk</label>
                        <input id="atk" type="number" className="form-control"
                        onChange={event => setAtk(event.target.value)}
                        value={atk} />
                    </div>
                    <div className="form-group col-3">
                        <label htmlFor="def">Def</label>
                        <input id="def" type="number" className="form-control"
                        onChange={event => setDef(event.target.value)}
                        value={def} />
                    </div>
                    <div className="form-group col-3">
                        <label htmlFor="sta">Sta</label>
                        <input id="sta" type="number" className="form-control"
                        onChange={event => setSta(event.target.value)}
                        value={sta} />
                    </div>
                    <div className="form-group col-1">
                        <input id="ledendary" value="" type="checkbox" className="form-check-input"
                        onChange={event => setLegendary(event.target.value)} />
                        <label htmlFor="ledendary" className="form-check-label">Legendary</label>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="aquireable">Aquireable</label>
                        <input id="aquireable" type="number" className="form-control"
                        onChange={event => setAquireable(event.target.value)}
                        value={aquireable} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="spawns">Spaws</label>
                        <input id="spawns" type="number" className="form-control"
                        onChange={event => setSpawns(event.target.value)}
                        value={spawns} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="regional">Regional</label>
                        <input id="regional" type="number" className="form-control"
                        onChange={event => setRegional(event.target.value)}
                        value={regional} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="raidable">Raidable</label>
                        <input id="raidable" type="number" className="form-control"
                        onChange={event => setRaidable(event.target.value)}
                        value={raidable} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="hatchable">Hatchable</label>
                        <input id="hatchable" type="number" className="form-control"
                        onChange={event => setHatchable(event.target.value)}
                        value={hatchable} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="shiny">Shiny</label>
                        <input id="shiny" type="number" className="form-control"
                        onChange={event => setShiny(event.target.value)}
                        value={shiny} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="nest">Nest</label>
                        <input id="nest" type="number" className="form-control"
                        onChange={event => setNest(event.target.value)}
                        value={nest} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="news">New</label>
                        <input id="news" type="number" className="form-control"
                        onChange={event => setNews(event.target.value)}
                        value={news} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="not-gettable">Not gettable</label>
                        <input id="not-gettable" type="number" className="form-control"
                        onChange={event => setNotGettable(event.target.value)}
                        value={notGettable} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="future-volve">Future volve</label>
                        <input id="future-volve" type="number" className="form-control"
                        onChange={event => setFutureVolve(event.target.value)}
                        value={futureVolve} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="percent100cp40">100% cp 40</label>
                        <input id="percent100cp40" type="number" className="form-control"
                        onChange={event => setPercent100cp40(event.target.value)}
                        value={percent100cp40} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="percent100cp39">100% cp 39</label>
                        <input id="percent100cp39" type="number" className="form-control"
                        onChange={event => setPercent100cp39(event.target.value)}
                        value={percent100cp39} />
                    </div>
                </div>
                <small id="passwordHelpBlock" className="form-text text-muted">* Required fields</small>
                <hr className="mb4" />
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </main >
    )
}