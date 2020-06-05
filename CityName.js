import React, { useState } from 'react';

function CityName(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const cityNamePattern = /[a-z]/gi;
        const valid = cityNamePattern.test(event.target.value);
        if (!valid) {
            setValidationError('* should be a string of letters only');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onCityNameChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="New Zealand City (letters only Please)"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default CityName