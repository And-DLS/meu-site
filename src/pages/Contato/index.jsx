import {Video, Imagens} from '../../components/Main'
export const Contato = () => {
	return(
		<>		
			<section className="page-section mt-5" id="contact">
	            <div className="container px-4 px-lg-5">
	                <div className="row gx-4 gx-lg-5 justify-content-center">
	                    <div className="col-lg-8 col-xl-6 text-center">
	                        <h2 className="mt-0">ENTRE EM CONTATO!</h2>
	                        <hr className="divider" />
	                        <p className="text-muted mb-5">Envie-me uma mensagem e entrarei em contato com você o mais breve possível!</p>
	                    </div>
	                </div>
	                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
	                    <div className="col-lg-6">
	                        <form className="row g-3 needs-validation" data-toggle="validator" role="form">

							  	<div className="form-floating mb-3">
							    	<input type="text" className="form-control" id="validationCustom01" placeholder="Enter your name..." required />
							    	<label for="validationCustom01" className="form-label">Nome</label>
							    	<div className="invalid-feedback">
							      	Looks good!</div>
							  	</div>

							  	<div className="form-floating mb-3">
							    	<input id="inputEmail" className="form-control" placeholder="Digite seu E-mail" type="email" 
								      data-error="Por favor, informe um e-mail correto." required />
							    	<label for="inputEmail" className="form-label">Email</label>
							    	
								    <div className="help-block with-errors"></div>
							  	</div>

							  	<div className="form-floating mb-3">
	                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required"></textarea>
	                                <label for="message">Mensagem</label>
	                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
	                            </div>

							  <div className="col-12 d-grid">
							    <button style={{color: 'white'}} className="btn btn-primary btn-xl" type="submit">Enviar</button>
							  </div>
							</form>
	                    </div>
	                </div>
	                
	            </div>
	        </section>
			<div className="container espaco mb-5">
				<div className="row mb-5">

				</div>
			</div>
		</>
	)
}
