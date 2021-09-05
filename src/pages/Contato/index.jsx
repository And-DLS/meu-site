import {Video, Imagens} from '../../components/Main'
export const Contato = () => {
	return(
		<>		
			<section class="page-section mt-5" id="contact">
	            <div class="container px-4 px-lg-5">
	                <div class="row gx-4 gx-lg-5 justify-content-center">
	                    <div class="col-lg-8 col-xl-6 text-center">
	                        <h2 class="mt-0">ENTRE EM CONTATO!</h2>
	                        <hr class="divider" />
	                        <p class="text-muted mb-5">Envie-me uma mensagem e entrarei em contato com você o mais breve possível!</p>
	                    </div>
	                </div>
	                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
	                    <div class="col-lg-6">
	                        <form className="row g-3 needs-validation" data-toggle="validator" role="form">

							  	<div className="form-floating mb-3">
							    	<input type="text" className="form-control" id="validationCustom01" placeholder="Enter your name..." required />
							    	<label for="validationCustom01" className="form-label">Nome</label>
							    	<div className="invalid-feedback">
							      	Looks good!</div>
							  	</div>

							  	<div className="form-floating mb-3">
							    	<input id="inputEmail" class="form-control" placeholder="Digite seu E-mail" type="email" 
								      data-error="Por favor, informe um e-mail correto." required />
							    	<label for="inputEmail" className="form-label">Email</label>
							    	
								    <div class="help-block with-errors"></div>
							  	</div>

							  	<div class="form-floating mb-3">
	                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required"></textarea>
	                                <label for="message">Mensagem</label>
	                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
	                            </div>

							  <div className="col-12 d-grid">
							    <button style={{color: 'white'}} className="btn btn-primary btn-xl" type="submit">Enviar</button>
							  </div>
							</form>
	                    </div>
	                </div>
	                
	            </div>
	        </section>
			<div classNameName="container espaco mb-5">
				<div classNameName="row mb-5">

				</div>
			</div>
		</>
	)
}