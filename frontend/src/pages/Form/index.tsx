import './styles.css';

export const index = () => {
    return (
        <main>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
            </form>
        </main>
    )
}

export default index;
