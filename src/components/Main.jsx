import {Link} from 'react-router-dom'


export const Header = () => {
	return (
		<>
			
	        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
	            <a className="navbar-brand js-scroll-trigger" href="#page-top">
	                <span className="d-block d-lg-none">Andrey Diógenes Lima da Silva</span>
	                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile.png" alt="..." /></span>
	            </a>
	            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
	          
	            <div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to={'/'} className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to={'/sobre'} className="nav-link">Sobre</Link>
						</li>
						<li className="nav-item">
							<Link to={'/curriculo'} className="nav-link">Currículo</Link>
						</li>
						<li className="nav-item">
							<Link to={'/hobbies'} className="nav-link">hobbies</Link>
						</li>
						<li className="nav-item">
							<Link to={'/galeria'} className="nav-link">Galeria</Link>
						</li>
						<li className="nav-item">
							<Link to={'/contato'} className="nav-link">Contato</Link>
						</li>
					</ul>
				</div>
	        </nav>
			
		</>
	)
}

export const Footer = () => {
	return(
		<>
			<footer class="bg-secondary bg-opacity-25 py-5">
		        <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2021 - Andrey Diógeens Lima da Silva</div></div>
		    </footer>
		</>
	)
}

export const Banner = props => {
	return(
		<>		
			<header style={{background: `linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("images/bg-masthead.jpg")`}} className="masthead">
	            <div className="container px-4 px-lg-5 h-100">
	                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
	                    <div className="col-lg-8 align-self-end">
	                        <h1 className="text-white font-weight-bold">Conheça um Pouco Sobre Mim</h1>
	                        <hr className="divider" />
	                    </div>
	                    <div className="col-lg-8 align-self-baseline">
	                        <p className="text-white-75 mb-5">Conheça minhas redes sociais, meu currículo, veja minha galeria e os trabalhos que fiz e eventos de que participei, ou se prefeir entre em contato!</p>
	                        <Link to={'/sobre'} className="btn btn-primary btn-xl">Conheça-me Melhor</Link>

	                    </div>
	                </div>
	            </div>
	        </header>
		</>
	)
}

export const Video = props => {
	return(
		<>
			<div className="col-12 col-md-4">
				<div className="card">
					<iframe width="100%" height="320" src={`https://youtube.com/embed/${props.video}`}></iframe>
					<div className="card-body">
						<h3>{props.titulo}</h3>
						<p className="descVideo">{props.desc}</p>
					</div>
				</div>			
			</div>	
		</>
	)
}

export const Imagens = props => {
	return(
		<>
			<div className="col-12 col-md-4">
				<div className="card">
					
					<div className="card-body">
						<a href={props.bookmark}>
				            <figure className="mb-0">
				                <img src={props.imagem} alt={props.titulo} title={props.titulo} className="w-100" />
				            </figure>
				        </a>
				        <div id={props.bookmarkid} className="dialogo">
				            <div className="imgAberta">
				                <a className="fechar" title="Fechar" href="#">X</a>
				                <img className="imagemmodal" src={props.imagem} alt={props.titulo} title={props.titulo} />
				            </div>
				        </div>	
					</div>
				</div>			
			</div>	
		</>
	)
}
