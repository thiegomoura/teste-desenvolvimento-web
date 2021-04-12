import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import api from "../../service/api";
import './styles.css';

const Index = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        api.get('/pokemons')
            .then(res => {
                setPokemons(res.data);
            })
            .catch(err => {
                console.log("Backend unavaliable!")
            });
    }, []);

    const { ExportCSVButton } = CSVExport;
    const columns = [{
        dataField: 'name',
        text: 'Pokemon Name',
        sort: true,
        filter: textFilter()
    }, {
        dataField: 'pokedex_number',
        text: 'Pokedex Number',
        sort: true
    }, {
        dataField: 'img_name',
        text: 'Img'
    }, {
        dataField: 'generation',
        text: 'Generation',
        sort: true
    }, {
        dataField: 'evolution_stage',
        text: 'Evolution Stage',
        sort: true
    }, {
        dataField: 'evolved',
        text: 'Evolved'
    }];


    return (

        <main>
            <div className="content">
                <ToolkitProvider
                    keyField="id"
                    data={pokemons}
                    columns={columns}
                    exportCSV
                >
                    {
                        props => (
                            <div>
                                <ExportCSVButton {...props.csvProps}>Export CSV!</ExportCSVButton>
                                <Link to="/new">
                                    <Button>New</Button>
                                </Link>
                                <hr />
                                <BootstrapTable
                                    keyField='id'
                                    data={pokemons}
                                    columns={columns}
                                    filter={filterFactory()}
                                    pagination={paginationFactory({})}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        </main>
    )
}
export default Index;