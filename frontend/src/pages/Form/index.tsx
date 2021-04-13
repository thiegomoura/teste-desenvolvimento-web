import './styles.css';

export const index = () => {
    return (
        <main>
            <div className="text-center">
                <h2>Registration form</h2>
                <p className="lead">
                    Preencha ao menos as informações obrigatórias abaixo para cadastrar as informações de um novo pokemon.
                </p>
            </div>
            <form method="POST" onSubmit={() => { }}>
                <h4>Pokemon info</h4>
                <div className="row">
                    <div className="col-5">
                        <label htmlFor="name">Name*</label>
                        <input id="name" type="text" className="form-control" required />
                    </div>
                    <div className="col">
                        <label htmlFor="pokedex-number">Pokedex Number*</label>
                        <input id="pokedex-number" type="number" className="form-control" required />
                    </div>
                    <div className="col">
                        <label htmlFor="img-name">Imagem name*</label>
                        <input id="img-name" type="text" className="form-control" required />
                    </div>
                    <div className="col">
                        <label htmlFor="generation">Generation*</label>
                        <input id="generation" type="number" className="form-control" required />
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Pokemon generation</small>
                    </div>
                </div>
                <hr className="mb4" />
                <h6>Details</h6>
                <div className="row">
                    <div className="col">
                        <label htmlFor="evolution_stage">Evolution stage</label>
                        <input id="evolution_stage" type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <label htmlFor="evolved">Evolved</label>
                        <input id="evolved" type="number" className="form-control" />
                    </div>
                    <div className="col">
                        <label htmlFor="family-id">Family ID</label>
                        <input id="family-id" type="number" className="form-control" />
                    </div>
                    <div className="col">
                        <label htmlFor="cross-gen">Cross gen</label>
                        <input id="cross-gen" type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <label htmlFor="type1">Type 1</label>
                        <input id="type1" type="number" className="form-control" />
                    </div>
                    <div className="col">
                        <label htmlFor="type2">Type 2</label>
                        <input id="type2" type="number" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <label htmlFor="weather1">Weather 1</label>
                        <input id="weather1" type="text" className="form-control" />
                    </div>
                    <div className="col-2">
                        <label htmlFor="weather2">Weather 2</label>
                        <input id="weather2" type="text" className="form-control" />
                    </div>
                    <div className="col-2">
                        <label htmlFor="sta-total">Stat Total</label>
                        <input id="sta-total" type="number" className="form-control" />
                    </div>
                </div>
                <hr className="mb4" />
                <h6>Attributes</h6>
                <div className="row">
                    <div className="form-group col-3">
                        <label htmlFor="atk">Atk</label>
                        <input id="atk" type="number" className="form-control" />
                    </div>
                    <div className="form-group col-3">
                        <label htmlFor="def">Def</label>
                        <input id="def" type="number" className="form-control" />
                    </div>
                    <div className="form-group col-3">
                        <label htmlFor="sta">Sta</label>
                        <input id="sta" type="number" className="form-control" />
                    </div>
                    <div className="form-group col-1">
                        <input id="ledendary" value="" type="checkbox" className="form-check-input" />
                        <label htmlFor="ledendary" className="form-check-label">Legendary</label>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="aquireable">Aquireable</label>
                        <input id="aquireable" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="spawns">Spaws</label>
                        <input id="spawns" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="regional">Regional</label>
                        <input id="regional" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="raidable">Raidable</label>
                        <input id="raidable" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="hatchable">Hatchable</label>
                        <input id="hatchable" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="shiny">Shiny</label>
                        <input id="shiny" type="number" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="nest">Nest</label>
                        <input id="nest" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="news">New</label>
                        <input id="news" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="not-gettable">Not gettable</label>
                        <input id="not-gettable" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="future-volve">Future volve</label>
                        <input id="future-volve" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="percent100cp40">100% cp 40</label>
                        <input id="percent100cp40" type="number" className="form-control" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="percent100cp39">100% cp 39</label>
                        <input id="percent100cp39" type="number" className="form-control" />
                    </div>
                </div>
                <small id="passwordHelpBlock" className="form-text text-muted">* Required fields</small>
                <hr className="mb4" />
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </main >
    )
}

export default index;
