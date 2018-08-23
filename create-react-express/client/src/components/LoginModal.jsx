import React from "react";

const LoginModal = () => (
    <div id="modal1" className="modal">
    <div className="modal-content">
        <h4>Login</h4>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                        <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
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
        <a href="#!" className="waves-effect waves-green btn-flat">Create Account</a>
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Login</a>
    </div>
</div>
)

export default LoginModal;



