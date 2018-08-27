import React from "react";


const createUser = () => (
    <div id="modal2" className="modal">
        <div className="modal-content">
            <h4>Create Account</h4>
            <div className="row">
                <form className="col s12">
                <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="email" className="validate" />
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="modal-footer">
            <a href="/auth/local" className="modal-close waves-effect waves-green btn-flat">Login</a>
            <button class="loginBtn loginBtn--google"><a href="/auth/google">Login with Google</a></button>
        </div>
    </div>
)

export default createUser;




