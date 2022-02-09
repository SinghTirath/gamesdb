import React,{useState} from 'react';

const AddGame = (props) => {

    const [title,setTitle] = useState("");
    const [genre,setGenre] = useState("");
    const [played,setPlayed] = useState(false);

    function handleReset(){
        setTitle("");
        setGenre("");
        setPlayed(false);
    }



    return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Add Game
                </button>

                
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Game</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                <input onChange={ e => setTitle(e.target.value) } type="text" className="form-control" id="inputPassword" value={title} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Genre</label>
                                <div className="col-sm-10">
                                <input onChange={ e => setGenre(e.target.value)} type="text" className="form-control" id="inputPassword" value={genre} />
                                </div>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" onChange={ e => setPlayed(e.target.checked) } type="checkbox" value={played} id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    Played
                                </label>
                            </div>    
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleReset} >Reset</button>
                            <button type="button" className="btn btn-success" onClick={() => props.postGame({title,genre,played},handleReset())} data-dismiss="modal" >Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default AddGame;






