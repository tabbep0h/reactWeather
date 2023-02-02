import React from "react";

function Form({ gettingWeather }){
    return(<form className="form" onSubmit={gettingWeather}>
        <input name='city' placeholder="Город" className="input"></input>
        <button type="submit" className="submit">Получить погоду</button>
    </form>)
}
export default Form;