import '../css/Landingpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

const Gray_search = {backgroundColor: '#333333', border: 'none'};

function LandingPage(){
    return (
        <div className="container-fluid LandingPage">
            <div className="row">
                <div className="col-md-12 ">
                    <div className="row p-3">
                        <div className="col-1">
                        </div>
                        <div className="col-1">
                            <button className="btn home_button">
                                <FontAwesomeIcon icon={faHome} size="2x"/>
                            </button>
                        </div>
                        <div className="col-4" id="search_bar" style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                            <div className="input-group row" style={{width:'100%'}}>
                                <input type="search"  className="form-control col-10 ps-5 search_input" style={{...Gray_search, borderRadius: '100px 0px 0px 100px', color:'white'}}  placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                <button className="btn col-2" style={{...Gray_search, borderRadius: '0px 100px 100px 0px'}} type="button">
                                    <FontAwesomeIcon icon={faSearch} size="2x"/>
                                </button>
                            </div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-2" style={{display:'flex', justifyContent:'end', alignContent:'center', textAlign:'center'}}>
                            <div className='row signup_button'>
                                <a>
                                    <b>
                                        Sign up
                                    </b>
                                </a>
                            </div>
                            
                        </div>
                        <div className="col-2" style={{display:'flex', justifyContent:'center', alignContent:'center', textAlign:'center'}}>
                            <div className='row login_button'>
                                <a >
                                    <b>
                                        Log in
                                    </b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;