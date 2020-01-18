import React, {useEffect, useState} from 'react';
import api from '../../services/api';


function DevForm({ onSubmit }){
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect( () => {
        navigator.geolocation.getCurrentPosition(
          (position) => { 
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
    
           },
          err => { console.log(err) },
          { timeout: 30000 }
          )
      }, [] );

    async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({ github_username,techs, latitude, longitude });

        setGithubUsername('');
        setTechs('');
  
    }


    return (
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username"
            value={github_username}
            onChange={ e=> setGithubUsername(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologia</label>
            <input name="techs" id="techs"
            value={techs}
            onChange={ e=> setTechs(e.target.value)} />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type='number' name="latitude" id="latitude" value={latitude}
              onChange={ e=> setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">longitude</label>
              <input type='number' name="longitude" id="longitude" value={longitude}
              onChange={ e=> setLongitude(e.target.value)}
              />
            </div>

          </div>

          <div className="input-block">
            <button type='submit'>Salvar</button>
          </div>

        </form>
    )
}

export default DevForm;